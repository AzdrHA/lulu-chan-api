import { SwaggerCustomOptions } from '@nestjs/swagger';
import { swaggerConfig as SwagerConfig } from './SwaggerConfig';

describe('SwaggerConfig', () => {
  let swaggerConfig: SwaggerCustomOptions;

  beforeAll(async () => {
    swaggerConfig = SwagerConfig;
  });

  test('test SwagerConfig is 100% equal', () => {
    const config: SwaggerCustomOptions = {
      customSiteTitle: 'Lulu-chan docs',
    };

    expect(config).toStrictEqual(swaggerConfig);
  });
});
