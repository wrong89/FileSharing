import { downloadZip } from 'client-zip';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button/Button';
import DropZone from '../ui/DropZone/DropZone';
import cls from './Overlay.module.scss';

type SavedFile = {
    file?: Partial<File>;
    fileBuffer: ArrayBuffer;
};

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

    return (
        <div className={cls.overlay}>
            <h1>Some</h1>
            <DropZone onDrop={onDrop} />
            <Button onClick={() => console.log('Click', savedFile)}>Click</Button>
        </div>
    );
};

export default Overlay;
