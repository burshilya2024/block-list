import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
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
    // const users = await this.dbService.user.findMany({});
    // console.log(users);
    return { message: this.appService.getHello() };
  }
}
