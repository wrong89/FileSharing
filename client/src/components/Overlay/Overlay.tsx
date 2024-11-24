import FileApi from '@/api/FileApi';
import { SavedFile } from '@/types/File';
import { downloadZip } from 'client-zip';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropZone from '../ui/DropZone/DropZone';
import cls from './Overlay.module.scss';

const Overlay = () => {
    const navigate = useNavigate();
    const [savedFile, setSavedFile] = useState<SavedFile | null>();

    const onDrop = useCallback((acceptedFiles: File[]) => {
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
            const savedFileObj = await FileApi.save(savedFile);
            console.log('savedFileObj', JSON.parse(savedFileObj.file));

            // navigate(savedFileRoute);
        }
    };

    useEffect(() => {
        redirectToSavedFile();
    }, [savedFile]);

    return (
        <div className={cls.overlay}>
            <DropZone onDrop={onDrop} />
        </div>
    );
};

export default Overlay;
