import {
  Ubuntu_Mono,
  Montserrat,
  Noto_Sans_JP,
  Poppins,
} from 'next/font/google';

export const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});
