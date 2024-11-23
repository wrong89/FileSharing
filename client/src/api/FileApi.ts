import { AppRoutes } from '@/config/routeConfig/routeConfig';
import { SavedFile } from '@/types/File';
import axios from 'axios';

interface FileApiRepository {
    read: (id: string) => void;
    save: (fileToSave: SavedFile) => Promise<string>;
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

    async save(file: SavedFile) {
        const { data } = await axios.post(this.generateApiUrl('save'), file);
        const savedFileRoute = `${AppRoutes.READ}/${data.id}`;

        return savedFileRoute;
    }
}

export default new FileApi();
