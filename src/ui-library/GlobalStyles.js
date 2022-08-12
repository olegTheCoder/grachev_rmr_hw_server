import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  padding:0;
  margin: 0;
  font-size: 16px;
  color: #111;
  font-family: Molot;
}

button{
  border: none;
}

h2, p{
  margin: 0;
  padding: 0;
}

ul, ol{
  list-style: none;
  padding: 0;
  margin: 0;
}

a{
  text-decoration: none;
  color: #222628;
}

html::-webkit-scrollbar {
  display: none;
}

input:focus{
  outline: rgb(52, 52, 52);
  border: 1px solid rgb(52, 52, 52);
}
`;

export default GlobalStyles;
