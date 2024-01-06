import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { nanoid } from 'nanoid';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { Request } from 'express';
import * as fs from 'fs';
import * as path from 'path';

export default {
  fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  storage: diskStorage({
    destination: async (req, file, cb) => {
      const firstFolder = path.join(
        '/public',
        Math.random().toString(36).substr(2, 2),
      );
      const secondFolder = path.join(
        firstFolder,
        Math.random().toString(36).substr(2, 2),
      );

      fs.mkdirSync(firstFolder, { recursive: true });
      fs.mkdirSync(secondFolder, { recursive: true });

      cb(null, secondFolder);
    },
    filename: (req, file, callback) => {
      callback(null, `${nanoid()}${extname(file.originalname)}`);
    },
  }),
} as MulterOptions;
