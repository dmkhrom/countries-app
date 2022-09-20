import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderColor: string;
    background: string;
    body: string;
    elementsBackground: string;
    text: string;
    toggleBackground: string;
    type: string;
  }
}
