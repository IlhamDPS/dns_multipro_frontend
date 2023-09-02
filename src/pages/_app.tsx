import '@/styles/globals.css';

import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import type { AppProps } from 'next/app';
import MantineCustomProvider from '@/context/MantineCustomContext';
import AuthProvider from '@/context/AuthenticationContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <MantineCustomProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MantineCustomProvider>,
  );
}
