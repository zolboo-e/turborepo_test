import { NestFactory } from "@nestjs/core";
import { AppModule } from "modules/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  await app.listen(3002);
}
bootstrap();
