import FileApi from '@/api/FileApi';
import FileInfo from '@/components/FileInfo/FileInfo';
import { FileFromStorage } from '@/types/File';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ReadFilePage = () => {
    const location = useLocation();
    const [fileData, setFileData] = useState<FileFromStorage>();

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

    return <div>{fileData && <FileInfo file={fileData} />}</div>;
};

export default ReadFilePage;
