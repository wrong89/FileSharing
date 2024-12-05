import { FileFromStorage } from '@/types/File';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from '../ui/Button/Button';

type DownloadFile = {
    href: string;
    download: string;
};

interface DownloadButtonProps {
    fileData: FileFromStorage;
    className?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({ fileData, className }) => {
    const { t } = useTranslation();

    const getDownloadConfiguration = (): Partial<DownloadFile> => {
        const result: Partial<DownloadFile> = {};

        if (fileData) {
            const blob = new Blob([new Uint8Array(fileData.data.data)], { type: fileData.data.type });
            const url = URL.createObjectURL(blob);

            result.href = url;
            result.download = decodeURIComponent(fileData.name);
        }

        return result;
    };

    return (
        <a className={className} {...getDownloadConfiguration()}>
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>{t('download')}</Button>
        </a>
    );
};

export default DownloadButton;
