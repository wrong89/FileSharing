import { AppRoutes } from '@/config/routeConfig/routeConfig';
import { SavedFile } from '@/types/File';
import axios from 'axios';

interface FileApiRepository {
    read: (id: string) => void;
    // save: (fileToSave: SavedFile) => Promise<string>;
    save: (fileToSave: SavedFile) => void;
}

class FileApi implements FileApiRepository {
    baseUrl = this.generateApiUrl(import.meta.env.VITE_API_URL, 'file');

    private generateApiUrl(...urlParts: string[]): string {
        let url = '';

        if (this.baseUrl) {
            url += this.baseUrl + '/';
        }

        url += urlParts.join('/');

        return url;
    }

    async read(id: string) {
        const { data } = await axios.get(this.generateApiUrl('read', id));

        console.log(data);
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
        formData.append('fileBuffer', fileBlob, fileName);

        const { data } = await axios.post(this.generateApiUrl('save'), formData);

        const savedFileRoute = this.generateApiUrl(AppRoutes.READ, data.id);

        return {
            savedFileRoute,
            file: data.savedFile,
        };
    }
}

export default new FileApi();
