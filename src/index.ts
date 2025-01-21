import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module.js";
import { AppService } from "./app.service.js";
import { fileURLToPath } from 'url';
import gnocchicssPlugin from './vite-plugin.js';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(await AppModule.forRootAsync());
    await app.get(AppService).run();
    await app.close();
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    bootstrap();
}

export default gnocchicssPlugin;