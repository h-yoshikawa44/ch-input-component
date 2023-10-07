import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { Global, CacheProvider, EmotionCache } from '@emotion/react';
import { globalStyle } from '@/styles/globals';
import { createEmotionCache } from '@/lib/emotionCache';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Fragment>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </Fragment>
    </CacheProvider>
  );
};

export default MyApp;
