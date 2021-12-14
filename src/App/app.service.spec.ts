import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('AppService - should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });

  describe('getWaf', () => {
    it('should return "WAf!', () => {
      expect(appService.getWaf()).toBe('WAf!');
    });
  });
});
