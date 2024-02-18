import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
// Cоздали подключение к нашей базе данных через prisma
const prisma = new PrismaClient();
class HelloWorldDto {
  // указываем swagger какой тип нужно сохранить
  @ApiProperty()
  message: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const users = await prisma.user.findMany({});
    // проверяем что приходят данные через prisma
    console.log(users);
    return { message: this.appService.getHello() };
  }
}
