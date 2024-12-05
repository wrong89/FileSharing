import { FileFromStorage, SavedFile } from '@/types/File';
import { AppRoutes } from '@config/routeConfig/routeConfig';
import axios from 'axios';

interface FileApiRepository {
    read: (id: string) => void;
    save: (fileToSave: SavedFile) => void;
}

class FileApi implements FileApiRepository {
    apiBaseUrl = this.generateApiUrl([import.meta.env.VITE_API_URL, 'file'], true);

    private generateApiUrl(urlParts: string[], apiUrl = false): string {
        let url = '';

        if (this.apiBaseUrl && apiUrl) {
            url += this.apiBaseUrl + '/';
        }

        url += urlParts.join('/');

        return url;
    }

    async read(id: string): Promise<FileFromStorage> {
        const { data } = await axios.get(this.generateApiUrl(['read', id], true));

        console.log('FileAPI', data);

        return data;
    }

    async save(fileToSave: SavedFile) {
        const formData = new FormData();
        let fileName = fileToSave.file?.name;

        if (!fileName) {
            fileName = 'fileSharing.zip';
        }

        const fileBlob = new Blob([fileToSave.fileBuffer], {
            type: fileToSave.file?.type,
        });
        formData.append('fileBuffer', fileBlob, encodeURIComponent(fileName));

        const { data } = await axios.post(this.generateApiUrl(['save'], true), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const savedFileRoute = this.generateApiUrl([AppRoutes.READ, data.id], false);

        return {
            savedFileRoute,
            file: data.savedFile,
        };
    }
}

export default new FileApi();
