import { On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { actionButton, inlineButton } from './telegram.buttons';
import { TelegramService } from './telegram.service';

@Update()
export class TelegramUpdate {
  constructor(private readonly telegramService: TelegramService) { }
  @Start()
  async sayHello(ctx: Context): Promise<void> {
    await ctx.reply(
      'Привіт, для подальших кроків поділіться номером телефону',
      actionButton(),
    );
  }

  @On('contact')
  async onContact(ctx: Context) {
    if (ctx.message && 'contact' in ctx.message) {
      const user = await this.telegramService.groupData(ctx);
      await ctx.reply(
        'Дякую за наданну інформацію',
        inlineButton('Відкрити додаток', user),
      );
    } else {
      await ctx.reply(
        'Будь ласка, скористайся кнопкою для відправки номеру телефону.',
      );
    }
  }
}
