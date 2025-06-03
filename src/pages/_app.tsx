import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Head from 'next/head';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* Script actualizado del chatbot de Zapier */}
        <script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        ></script>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        {/* Chatbot Norma con ID actualizado */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <zapier-interfaces-chatbot-embed
                is-popup="true"
                chatbot-id="cmb9jx6tm00fjpmdz1y00d1z1">
              </zapier-interfaces-chatbot-embed>
            `,
          }}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
