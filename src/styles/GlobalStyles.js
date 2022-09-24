import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        body,html{    
            box-sizing: border-box;    
            overflow: hidden;
            }
        font-family: 'NanumSquare';
    }
`;

export default GlobalStyle;
