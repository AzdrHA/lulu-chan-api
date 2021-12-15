import { AppModule } from './app.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
});
