import FileApi from '@/api/FileApi';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type DownloadFile = {
    href: string;
    download: string;
};

const ReadFilePage = () => {
    const location = useLocation();
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

    useEffect(() => {
        FileApi.read('d3644c36-1621-476d-8fc3-6fafab6c04ac');
    }, []);

    return (
        <div>
            {/* // * Correctly Working */}
            {/* {savedFile && <a {...getDownloadConfiguration()}>Download</a>} */}
            <h1>ReadFilePage</h1>
        </div>
    );
};

export default ReadFilePage;
