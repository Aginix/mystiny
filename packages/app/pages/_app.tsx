import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';

import { lightTheme, darkTheme, ThemeContext, useThemeType, ThemeContextType } from '@aginix/theme';
import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useThemeType('auto');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const backstageTheme = useMemo(() => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        if (isMounted) {
          if (!window.matchMedia) {
            return lightTheme;
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme;
        } else {
          return lightTheme;
        }
    }
  }, [theme]);

  const themeContext: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <React.Fragment>
      <Head>
        <title>Next Nest Starter</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={themeContext}>
        <ThemeProvider theme={backstageTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
