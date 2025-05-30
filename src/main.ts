import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtAuthGuard());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
