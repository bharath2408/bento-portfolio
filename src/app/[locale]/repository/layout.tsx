import type { Metadata } from 'next';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'bk — repository',
  description: "bk's personal website",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/memoji-2.png',
        href: '/memoji-2.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/memoji-1.png',
        href: '/memoji-1.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
