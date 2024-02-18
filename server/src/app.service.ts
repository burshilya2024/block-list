import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'запрос на получение всех юзеров в базе данных прошел успешно!';
  }
}
