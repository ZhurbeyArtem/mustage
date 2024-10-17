import { User } from 'src/db/entities/user.entity';
import { Markup } from 'telegraf';

const toQueryString = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = String(obj[key]);
      return acc;
    },
    {} as Record<string, string>,
  );
};

export const inlineButton = (text: string, queryString: User) => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text,
            web_app: {
              url: `${process.env.FRONT_URL}?${new URLSearchParams(toQueryString(queryString)).toString()}`,
            },
          },
        ],
      ],
    },
  };
};

export const actionButton = () => {
  return Markup.keyboard([
    Markup.button.contactRequest('Відправити номер телефону'),
  ])
    .oneTime()
    .resize();
};
