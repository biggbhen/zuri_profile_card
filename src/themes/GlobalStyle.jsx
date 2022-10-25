import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
   
  background-color: #28223F;
  font-family: Montserrat, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}
`;
export default GlobalStyle;
