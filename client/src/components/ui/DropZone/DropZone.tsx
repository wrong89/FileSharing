import { FC } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import cls from './DropZone.module.scss';

interface DropZoneProps {
    onDrop?:
        | (<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void)
        | undefined;
}

const DropZone: FC<DropZoneProps> = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={cls.drop} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

export default DropZone;
