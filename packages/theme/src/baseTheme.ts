import { createMuiTheme } from '@material-ui/core';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import { Overrides } from '@material-ui/core/styles/overrides';

import { AppTheme, AppThemeOptions, AppPaletteOptions } from './types';

export function createThemeOptions(palette: AppPaletteOptions): AppThemeOptions {
  return {
    palette,
    props: {
      MuiGrid: {
        spacing: 2,
      },
      MuiSwitch: {
        color: 'primary',
      },
    },
    typography: {
      fontFamily: 'Prompt, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
      h6: {
        fontSize: 21,
        fontWeight: 400,
      },
      h5: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 6,
      },
      h3: {
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 6,
      },
      h2: {
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 8,
      },
      h1: {
        fontSize: 54,
        fontWeight: 700,
        marginBottom: 10,
      },
    },
  };
}

export function createThemeOverrides(theme: AppTheme): Overrides {
  return {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          fontFamily: theme.typography.fontFamily,
        },
        body: {
          height: '100%',
          fontFamily: theme.typography.fontFamily,
          'overscroll-behavior-y': 'none',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: theme.palette.appbar,
      },
    },
    MuiTableRow: {
      // Alternating row backgrounds
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
      // Use pointer for hoverable rows
      hover: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
      // Alternating head backgrounds
      head: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
    // Tables are more dense than default mui tables
    MuiTableCell: {
      root: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        verticalAlign: 'middle',
        lineHeight: '1',
        margin: 0,
        padding: '8px',
        borderBottom: 0,
      },
      head: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        color: 'rgb(179, 179, 179)',
        fontWeight: 'normal',
        lineHeight: '1',
      },
    },
    MuiTabs: {
      // Tabs are smaller than default mui tab rows
      root: {
        minHeight: 24,
      },
    },
    MuiTab: {
      // Tabs are smaller and have a hover background
      root: {
        color: theme.palette.link,
        minHeight: 24,
        textTransform: 'initial',
        '&:hover': {
          color: darken(theme.palette.link, 0.3),
          background: lighten(theme.palette.link, 0.95),
        },
        [theme.breakpoints.up('md')]: {
          minWidth: 120,
          fontSize: theme.typography.pxToRem(14),
          fontWeight: 500,
        },
      },
      textColorPrimary: {
        color: theme.palette.link,
      },
    },
    MuiTableSortLabel: {
      // No color change on hover, just rely on the arrow showing up instead.
      root: {
        color: 'inherit',
        '&:hover': {
          color: 'inherit',
        },
        '&:focus': {
          color: 'inherit',
        },
      },
      // Bold font for highlighting selected column
      active: {
        fontWeight: 'bold',
        color: 'inherit',
      },
    },
    MuiListItemText: {
      dense: {
        // Default dense list items to adding ellipsis for really long str...
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    MuiButton: {
      text: {
        // Text buttons have less padding by default, but we want to keep the original padding
        padding: undefined,
      },
    },
    MuiChip: {
      root: {
        // By default there's no margin, but it's usually wanted, so we add some trailing margin
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    MuiCardHeader: {
      root: {
        // Reduce padding between header and content
        paddingBottom: 0,
      },
    },
    MuiCardActions: {
      root: {
        // We default to putting the card actions at the end
        justifyContent: 'flex-end',
      },
    },
  };
}

// Creates a Mystiny MUI theme using a palette.
// The theme is created with the common Mystiny options and component styles.
export function createTheme(palette: AppPaletteOptions): AppTheme {
  const themeOptions = createThemeOptions(palette);
  const baseTheme = createMuiTheme(themeOptions) as AppTheme;
  const overrides = createThemeOverrides(baseTheme);
  const theme = { ...baseTheme, overrides };
  return theme;
}
