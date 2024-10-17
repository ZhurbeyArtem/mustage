import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from 'src/db/entities/user.entity';

@Injectable()
export class TelegramService {
  constructor(private userService: UserService) { }

  async groupData(ctx): Promise<User> {
    try {
      const contact = ctx.message.contact;

      const user = { ...ctx.message.from, telegram_id: ctx.message.from.id };

      const userPhotos = await ctx.telegram.getUserProfilePhotos(user.id);
      const photo = await ctx.telegram.getFileLink(
        userPhotos.photos[0][0].file_id,
      );

      const newUser = {
        ...user,
        photo: photo.href,
        phoneNumber: contact.phone_number,
      };
      delete newUser.id;
      delete newUser.is_bot;
      return await this.userService.create(newUser);
    } catch (error) {
      throw new HttpException(
        'Opps something went wrong try again',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
