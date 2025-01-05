import sulgify from 'slugify';

export const slugifyHelper = (name: string) => {
  return sulgify(name, {
    lower: true,
    strict: true,
    locale: 'en',
    remove: /[*+~.()'"!:@]/g,
  });
};
