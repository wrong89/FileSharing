import FileApi from '@/api/FileApi';
import FileInfo from '@/components/FileInfo/FileInfo';
import Button from '@/components/ui/Button/Button';
import { FileFromStorage } from '@/types/File';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type DownloadFile = {
    href: string;
    download: string;
};

const ReadFilePage = () => {
    const location = useLocation();
    const [fileData, setFileData] = useState<FileFromStorage>();
    // * Correctly Working
    // const getDownloadConfiguration = (): Partial<DownloadFile> => {
    //     const result: Partial<DownloadFile> = {};

    //     if (savedFile && savedFile.fileBuffer && savedFile.file.name) {
    //         const blob = new Blob([savedFile.fileBuffer]);

    //         const url = URL.createObjectURL(blob);
    //         result.href = url;
    //         result.download = savedFile.file.name;
    //     }

    //     return result;
    // };

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
            {/* // * Correctly Working */}
            {/* {savedFile && <a {...getDownloadConfiguration()}>Download</a>} */}
            <h1>ReadFilePage</h1>
            <Button onClick={() => console.log(fileData)}>Check the file data</Button>
            {fileData && <FileInfo file={fileData} />}
        </div>
    );
};

export default ReadFilePage;
