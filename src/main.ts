import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { UserConfig } from "./types.js";

export async function init(userConfig: UserConfig) {
    const app = await NestFactory.createApplicationContext(await AppModule.forRootAsync(userConfig));
    return app;
}

