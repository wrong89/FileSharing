type DownloadFile = {
    href: string;
    download: string;
};


const ReadFilePage = () => {
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
    return (
        <div>
            {/* // * Correctly Working */}
            {/* {savedFile && <a {...getDownloadConfiguration()}>Download</a>} */}
            <h1>ReadFilePage</h1>
        </div>
    );
};

export default ReadFilePage;
