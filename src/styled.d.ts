import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      lighter: IPalette;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: string;
      sizes: {
        title: string;
        subtitle: string;
        small: string;
        medium: string;
        xmedium: string;
        large: string;
        huge: string;
      };
    };
    layers: {
      disappear: number;
      neutron: number;
      base: number;
      dropDown: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
    medias: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    spacings: {
      inside: {
        small: string;
        medium: string;
        huge: string;
      };
      outside: {
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        xmedium: string;
        huge: string;
        xhuge: string;
      };
    };
    transition: {
      default: string;
      fast: string;
      slow: string;
    };
    icons: {
      menu: string;
      small: string;
      medium: string;
      huge: string;
    };
  }
}
