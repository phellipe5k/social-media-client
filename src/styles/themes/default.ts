// theme.ts
import { DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: 'rgb(27, 26, 29)',
      white: 'rgb(255, 255, 255)'
    },
    primary: {
      main: 'rgb(62, 140, 250)',
      contrastText: 'rgb(92, 145, 219)'
    },
    secondary: {
      main: 'rgb(44, 46, 47)',
      contrastText: 'rgb(69, 71, 71)'
    },
    lighter: {
      main: 'rgb(94, 94, 96)',
      contrastText: 'rgb(69, 71, 71)'
    }
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 'bold',
    sizes: {
      title: '70pt',
      subtitle: '30pt',
      small: '12pt',
      medium: '18pt',
      xmedium: '20pt',
      large: '28pt',
      huge: '35pt'
    }
  },
  layers: {
    disappear: -90,
    neutron: 0,
    base: 10,
    dropDown: 20,
    menu: 30,
    overlay: 40,
    modal: 50,
    alwaysOnTop: 60
  },
  medias: {
    desktop: '1100px',
    tablet: '870px',
    mobile: '615px'
  },
  spacings: {
    inside: {
      small: '1%',
      medium: '2%',
      huge: '5%'
    },
    outside: {
      xxsmall: '10px',
      xsmall: '15px',
      small: '25px',
      medium: '35px',
      xmedium: '50px',
      huge: '75px',
      xhuge: '100px'
    }
  },
  transition: {
    default: '450ms ease-in-out',
    fast: '250ms ease-in-out',
    slow: '650ms ease-in-out'
  },
  icons: {
    menu: '45px',
    small: '20px',
    medium: '30px',
    huge: '50px'
  }
};

export const mediaQuery = generateMedia({
  desktop: defaultTheme.medias.desktop,
  tablet: defaultTheme.medias.desktop,
  mobile: defaultTheme.medias.mobile
});

export default defaultTheme;
