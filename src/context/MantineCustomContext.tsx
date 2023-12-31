import { useEffect } from 'react';

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

function RouteTransition() {
  const { asPath, events } = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => url !== asPath && nprogress.start();
    const handleComplete = () => nprogress.complete();
    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleComplete);
    events.on('routeChangeError', handleComplete);
    return () => {
      events.off('routeChangeStart', handleStart);
      events.off('routeChangeComplete', handleComplete);
      events.off('routeChangeError', handleComplete);
    };
  }, [asPath, events]);

  return <NavigationProgress progressLabel="Loading Page" autoReset />;
}

function MantineCustomProvider({ children }: any) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const changeHTMLTheme = (value: ColorScheme) => {
    const parentHTML = document.querySelector('#html-parent');

    if (parentHTML) {
      if (value === 'dark') {
        parentHTML.classList.add('dark');
      } else {
        parentHTML.classList.remove('dark');
      }
    }
  };

  const toggleColorScheme = (value?: ColorScheme) => {
    const val = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(val);

    changeHTMLTheme(val);
  };

  useEffect(() => {
    changeHTMLTheme(colorScheme);
    return () => {};
  }, [colorScheme]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          breakpoints: {
            xs: '0px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
          fontFamily: 'Hind Vadodara , sans-serif',
          colors: {
            brand: [
              '#e9fbf0',
              '#bef4d2',
              '#93ecb4',
              '#67e496',
              '#3cdd78',
              '#22c35e',
              '#1b9849',
              '#136c34',
              '#0b411f',
              '#04160a',
            ],
          },
          primaryColor: 'brand',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <RouteTransition />
          <Notifications position="top-right" />
          {children}
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MantineCustomProvider;
