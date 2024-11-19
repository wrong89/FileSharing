import { Request, Response } from 'express';

class FileController {
    saveFile(req: Request, res: Response) {
        // const {} = req;
    }

    test(req: Request, res: Response) {
        res.send('FileController test');
    }
}

export default new FileController();
