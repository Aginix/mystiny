import React from 'react';
import { addDecorator } from '@storybook/react';
import { lightTheme, darkTheme } from '@aginix/theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useDarkMode } from 'storybook-dark-mode';
import { UniqueIdFactoryContext, UniqueIdFactory, globalIdGeneratorFactory } from '../src/utilities';

const uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);

addDecorator(story => (
  <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
    <UniqueIdFactoryContext.Provider value={uniqueIdFactory}>
      <CssBaseline>{story()}</CssBaseline>
    </UniqueIdFactoryContext.Provider>
  </ThemeProvider>
));
