import { Module } from '@nestjs/common';
import { DbService } from './db.service';

// модуль для использования базы данных через prisma по всему приложению
@Module({
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
