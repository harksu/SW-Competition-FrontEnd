import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        body{    
            box-sizing: border-box;
        }
        //font-family: 'NanumSquare';
    }
`;

export default GlobalStyle;
