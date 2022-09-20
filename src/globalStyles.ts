import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    #root{
        margin: 0 auto;
    }
		body {
			background: ${({ theme }) => theme.background};
			font-size: 14px;
			color: ${({ theme }) => theme.text};
			font-family: sans-serif;
		}
 `;
