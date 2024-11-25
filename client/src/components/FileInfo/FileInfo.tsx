import { FileFromStorage } from '@/types/File';
import { FC } from 'react';
import cls from './FileInfo.module.scss';

interface FileInfoProps {
    file: FileFromStorage;
}

const FileInfo: FC<FileInfoProps> = ({ file }) => {
    return (
        <div className={cls.fileinfo}>
            <h1>File name {file.name}</h1>
        </div>
    );
};

export default FileInfo;
