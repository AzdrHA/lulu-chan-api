import * as util from 'util';

export const PROJECT_DIR = process.cwd();
export const APP_DIR = util.format('%s/src', PROJECT_DIR);
export const MODEL_DIR = util.format('%s/model', APP_DIR);
