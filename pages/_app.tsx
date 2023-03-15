import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, rem } from '@mantine/core';
import AppShellLayout from '@/layout/AppShell.layout';
import { Tourney } from 'next/font/google';

//! add global styles to the app
//todo add background CSS to the app
//todo static image for the background

const TourneyFont = Tourney({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>DLT hub</title>
        <meta name="description" content="We are a community-driven space, located in the heart of London." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest.json" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
              margin: 0,
              padding: 0,
            },
            body: {

              background: 'conic-gradient(from -45deg,rgb(90, 238, 252),rgb(83, 134, 254),rgb(191, 0, 255),rgb(255, 187, 90),rgb(90, 238, 252))',
            },
          }),
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Helvetica',
          headings: {
            fontFamily: TourneyFont.style.fontFamily,
            sizes: {
              h1: {
                fontWeight: 100,
              },
              h2: {
                fontWeight: 100,
              },
              h3: {
                fontWeight: 100,
              },
              h4: {
                fontWeight: 100,
              },
              h5: {
                fontWeight: 100,
              },
              h6: {
                fontWeight: 100,
              },
            },
          },
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
              },
            },
          },
        }}
      >
        <AppShellLayout>
          <Component {...pageProps} />
        </AppShellLayout>
      </MantineProvider >
    </>
  );
}