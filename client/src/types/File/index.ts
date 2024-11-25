export type SavedFile = {
    file?: Partial<File>;
    fileBuffer: ArrayBuffer;
};

export interface FileFromStorage {
    encoding: string;
    md5: string;
    mimetype: string;
    name: string;
    size: number;
    tempFilePath: string;
    truncated: boolean;

    data: {
        data: [];
        type: string;
    };
}
