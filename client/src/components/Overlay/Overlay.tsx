import FileApi from '@/api/FileApi';
import { SavedFile } from '@/types/File';
import { downloadZip } from 'client-zip';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropZone from '../ui/DropZone/DropZone';
import Loader from '../ui/Loader/Loader';
import cls from './Overlay.module.scss';

const Overlay = () => {
    const navigate = useNavigate();
    const [savedFile, setSavedFile] = useState<SavedFile | null>();
    const [loader, setLoader] = useState<JSX.Element | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setLoader(<Loader />);

        if (!acceptedFiles.length) {
            return;
        }

        if (acceptedFiles.length > 1) {
            downloadZip(acceptedFiles)
                .arrayBuffer()
                .then((fileBuffer) => {
                    setSavedFile({ fileBuffer });
                });
            return;
        }

        const file = acceptedFiles[0];

        file.arrayBuffer().then((fileBuffer) => {
            console.log('Obj', { file, fileBuffer });
            setSavedFile({
                file,
                fileBuffer,
            });
        });
    }, []);

    const redirectToSavedFile = async () => {
        if (savedFile && savedFile.fileBuffer) {
            const { file, savedFileRoute } = await FileApi.save(savedFile);

            navigate(savedFileRoute, {
                state: JSON.parse(file),
            });
        }
    };

    useEffect(() => {
        redirectToSavedFile();
    }, [savedFile]);

    return <div className={cls.overlay}>{loader ? loader : <DropZone onDrop={onDrop} />}</div>;
};

export default Overlay;
