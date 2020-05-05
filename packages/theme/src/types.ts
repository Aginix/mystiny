import { Theme, ThemeOptions } from '@material-ui/core';
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette';

type PaletteAdditions = {
  status: {
    ok: string;
    warning: string;
    error: string;
    pending: string;
    running: string;
    background: string;
  };
  border: string;
  textContrast: string;
  textVerySubtle: string;
  textSubtle: string;
  highlight: string;
  errorBackground: string;
  warningBackground: string;
  infoBackground: string;
  errorText: string;
  infoText: string;
  warningText: string;
  linkHover: string;
  link: string;
  gold: string;
  sidebar: string;
  bursts: {
    fontColor: string;
    slackChannelText: string;
    backgroundColor: {
      default: string;
    };
  };
  appbar: string;
};

export type AppPalette = Palette & PaletteAdditions;
export type AppPaletteOptions = PaletteOptions & PaletteAdditions;

export interface AppTheme extends Theme {
  palette: AppPalette;
}

export interface AppThemeOptions extends ThemeOptions {
  palette: AppPaletteOptions;
}
