import { nanoid } from 'nanoid';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as fs from 'fs';

export const imageInterceptor: MulterOptions = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      /*const distOne = Math.random().toString(36).substr(2, 2);
      const distTwo = Math.random().toString(36).substr(2, 2);

      if (!fs.existsSync(`./public/${distOne}`))
        fs.mkdirSync(`./public/${distOne}`);

      if (!fs.existsSync(`./public/${distOne}/${distTwo}`))
        fs.mkdirSync(`./public/${distOne}/${distTwo}`);*/

      cb(null, `./public/`);
      // cb(null, `./public/${distOne}/${distTwo}`);
    },
    filename: (req, file, callback) => {
      callback(null, `${nanoid()}${extname(file.originalname)}`);
    },
  }),
  limits: {
    fileSize: 20971520,
  },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  },
};
