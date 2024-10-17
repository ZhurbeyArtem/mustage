import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';
import { TelegramModule } from './modules/telegram/telegram.module';

@Module({
  imports: [DbModule, UserModule, TelegramModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
