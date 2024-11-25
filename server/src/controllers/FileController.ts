import { Request, Response } from 'express';
import FileService from '../services/FileService';

class FileController {
    async save(req: Request, res: Response) {
        const files = req.files;

        if (files) {
            const id = await FileService.saveFile(files.fileBuffer);
            const savedFile = await FileService.getFile(id);

            res.send({
                id,
                savedFile,
            });
        } else {
            res.sendStatus(500);
        }
    }

    async read(req: Request, res: Response) {
        const { id } = req.params;

        const data = await FileService.getFile(id);

        console.log('READ CONTROLLER DATA', data);

        if (data) {
            res.send(JSON.parse(data));
        } else {
            res.sendStatus(404);
        }
    }
}

export default new FileController();
