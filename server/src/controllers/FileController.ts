import { Request, Response } from 'express';
import FileService from '../services/FileService';

class FileController {
    async save(req: Request, res: Response) {
        const { file } = req.body;

        if (file) {
            const id = await FileService.saveFile(file);
            const savedFile = await FileService.getFile(id);

            console.log('id', id);
            // console.log('GET', id && (await FileService.getFile(id)));

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

        if (data) {
            res.send(JSON.parse(data));
        } else {
            res.sendStatus(404);
        }
    }
}

export default new FileController();
