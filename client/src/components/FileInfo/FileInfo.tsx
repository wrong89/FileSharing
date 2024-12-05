import { FileFromStorage } from '@/types/File';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton/DownloadButton';
import FileContentRepresentation from '../FileContentRepresentation/FileContentRepresentation';
import cls from './FileInfo.module.scss';

interface FileInfoProps {
    file: FileFromStorage;
}

const FileInfo: FC<FileInfoProps> = ({ file }) => {
    const { t } = useTranslation();

    return (
        <div className={cls.fileinfo}>
            <div className={cls.fileinfo__inner}>
                <div className={cls.fileinfo__content}>
                    <FileContentRepresentation file={file} />
                </div>
                <div className={cls.fileinfo__data}>
                    <h1 className={cls.fileinfo__title}>
                        {t('file_name')}: {decodeURIComponent(file.name)}
                    </h1>
                </div>
                <DownloadButton fileData={file} />
            </div>
        </div>
    );
};

export default FileInfo;
