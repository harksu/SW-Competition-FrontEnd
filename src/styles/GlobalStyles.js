import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        body,html{    
            box-sizing: border-box;    
            overflow-x: hidden;
      
            }
        font-family: 'NanumSquare';
    }
`;

export default GlobalStyle;
