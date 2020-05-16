export type Gradient = {
  colors: string[];
};

export type PageTheme = {
  gradient: Gradient;
};

export const gradients: Record<string, Gradient> = {
  blue: {
    colors: ['#2D46B9', '#509BF5'],
  },
  darkBlue: {
    colors: ['#1E3264', '#A0C3D2'],
  },
  brown: {
    colors: ['#674638', '#C39887'],
  },
  green: {
    colors: ['#1DB954', '#006350'],
  },
  orangeYellow: {
    colors: ['#FF6437', '#FFC864'],
  },
  redOrange: {
    colors: ['#A72525', '#E6542D'],
  },
  pinkOrange: {
    colors: ['#F13DA2', '#FF8A48'],
  },
  purpleBlue: {
    colors: ['#2D00AA', '#C769B5'],
  },
  tealGreen: {
    colors: ['#19E68C', '#1D7F6E'],
  },
  violetPeach: {
    colors: ['#B39AC8', '#FCCBD3'],
  },
  violetGreen: {
    colors: ['#4302F4', '#C3EFC8'],
  },
  purple: {
    colors: ['#a186bd', '#7c5c92'],
  },
  eveningSea: {
    colors: ['#00FFF2', '#035355'],
  },
  royalBlue: {
    colors: ['#000044', '#4B80D4'],
  },
  grey: {
    colors: ['#111111', '#777777'],
  },
  sunset: {
    colors: ['#cf8022', '#4e6ec7'],
  },
  sky: {
    colors: ['#69B9FF', '#ACCEEC'],
  },
  teal: {
    colors: ['#005E4D', '#9BF0E1'],
  },
};

export const pageTheme: Record<string, PageTheme> = {
  home: {
    gradient: gradients.teal,
  },
  documentation: {
    gradient: gradients.eveningSea,
  },
  tool: {
    gradient: gradients.purpleBlue,
  },
};
