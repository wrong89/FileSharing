import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import cls from './Overlay.module.scss';

interface IFile extends File {
    handle?: {
        kind: string;
        name: string;
    };
}

const Overlay = () => {
    const navigate = useNavigate();

    const onDrop = useCallback((acceptedFiles: IFile[]) => {
        acceptedFiles.forEach((file: IFile) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                const binaryStr = reader.result;

                if (file && file.handle) {
                    console.log('Its only 1 file', {
                        file,
                        binaryStr,
                    });
                } else {
                    console.log('Its folder');
                }
            };
            reader.readAsArrayBuffer(file);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={cls.overlay}>
            <h1>Some</h1>
            <div className={cls.overlay__drop} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div>
        </div>
    );
};

export default Overlay;
