import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import * as CryptoJS from 'crypto-js';

function base64url(source) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
}

@Injectable()
export class TokenService {
  public generateToken = (request: Request, response: Response, id: number) => {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const encodedHeader = base64url(stringifiedHeader);

    request.res.json(encodedHeader);
    console.log('cc');
  };

  public checkToken = () => {};
}
