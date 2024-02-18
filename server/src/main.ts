import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Определяем асинхронную функцию bootstrap, которая будет запускать приложение
async function bootstrap() {
  // Создаем экземпляр приложения Nest.js
  const app = await NestFactory.create(AppModule);

  // Создаем конфигурацию для Swagger, устанавливаем заголовок API
  const config = new DocumentBuilder().setTitle('Block list').build();

  // Генерируем документ Swagger для API приложения
  const document = SwaggerModule.createDocument(app, config);

  // Настраиваем Swagger для предоставления документации по маршруту '/api'
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

// Вызываем функцию bootstrap для запуска приложения
bootstrap();
