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
      const { category, name } = req.params;
      const categoryPath = path.join('/public', category);
      const namePath = path.join(categoryPath, name);

      // Ensure category directory exists
      fs.mkdirSync(categoryPath, { recursive: true });

      // Ensure name directory exists
      fs.mkdirSync(namePath, { recursive: true });

      cb(null, namePath);
    },
    filename: (req, file, callback) => {
      callback(null, `${nanoid}${extname(file.originalname)}`);
    },
  }),
} as MulterOptions;
