import { Module } from '@nestjs/common';
import { TelegramUpdate } from './telegram.update';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramService } from './telegram.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TG_TOKEN,
    }),
    UserModule,
  ],
  providers: [TelegramUpdate, TelegramService],
})
export class TelegramModule { }
