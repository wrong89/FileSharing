import FileApi from '@/api/FileApi';
import FileInfo from '@/components/FileInfo/FileInfo';
import Button, { ButtonTheme } from '@/components/ui/Button/Button';
import { FileFromStorage } from '@/types/File';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

type DownloadFile = {
    href: string;
    download: string;
};

const ReadFilePage = () => {
    const location = useLocation();
    const [fileData, setFileData] = useState<FileFromStorage>();
    const { t } = useTranslation();

    const getDownloadConfiguration = (): Partial<DownloadFile> => {
        const result: Partial<DownloadFile> = {};

        if (fileData) {
            const blob = new Blob([new Uint8Array(fileData.data.data)], { type: fileData.data.type });
            const url = URL.createObjectURL(blob);

            result.href = url;
            result.download = fileData.name;
        }

        return result;
    };

    const getFileData = async () => {
        let fileData: FileFromStorage | null = null;

        if (location.state) {
            fileData = location.state;
        }

        const fileId = location.pathname.split('/').at(-1);

        if (fileId) {
            fileData = await FileApi.read(fileId);
        }

        if (fileData) {
            setFileData(fileData);
        }
    };

    useEffect(() => {
        getFileData();
    }, []);

    return (
        <div>
            {fileData && <FileInfo file={fileData} />}
            <a {...getDownloadConfiguration()}>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED}>Download</Button>
            </a>
        </div>
    );
};

export default ReadFilePage;
