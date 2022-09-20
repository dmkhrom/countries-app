import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    toggleBackground: string;
  }
}
