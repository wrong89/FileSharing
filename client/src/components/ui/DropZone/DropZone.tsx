import { FC } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import cls from './DropZone.module.scss';

interface DropZoneProps {
    onDrop?:
        | (<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void)
        | undefined;
}

const DropZone: FC<DropZoneProps> = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, noClick: true, noKeyboard: true });
    const { t } = useTranslation();

    return (
        <div className={cls.drop} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <div className={cls.drag}></div>
            ) : (
                <h1 className={cls.drop__text}>{t('drag_and_drop_text')}</h1>
            )}
        </div>
    );
};

export default DropZone;
