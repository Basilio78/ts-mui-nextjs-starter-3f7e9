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
        {/* Script del chatbot de Zapier */}
        <script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/webcomponents/zapier-interfaces-chatbot/zapier-interfaces-chatbot.js"
        ></script>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        {/* Chatbot embebido como pop-up */}
        <zapier-interfaces-chatbot-embed
          is-popup="true"
          chatbot-id="cmb9jx6am0ohq0z6z6mbe9aiw"
        ></zapier-interfaces-chatbot-embed>
      </ThemeProvider>
    </CacheProvider>
  );
}
