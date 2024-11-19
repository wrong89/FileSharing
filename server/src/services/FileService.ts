import db from '../db';

class FileService {
    private generateFileKey() {
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) => {
            return (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16);
        });
    }

    public async saveFile(file: File) {
        const key = this.generateFileKey();
        const exists = await db.exists(key);

        if (!exists) {
            // 60 * 60 * 24 - 1 Day
            await db.set(key, JSON.stringify(file), { EX: 60 * 60 * 24 * 7 });

            return key;
        }
        return '';
    }

    public async getFile(id: string) {
        return await db.get(id);
    }
}

export default new FileService();
