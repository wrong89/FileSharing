import crypto from 'crypto';
import { UploadedFile } from 'express-fileupload';
import db from '../db';

class FileService {
    private generateFileKey() {
        const randomBytes = crypto.randomBytes(16);
        return randomBytes.toString('hex');
    }

    public async saveFile(file: UploadedFile | UploadedFile[]) {
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
