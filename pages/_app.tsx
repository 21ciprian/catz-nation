import type {AppProps} from 'next/app'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
	overflow-x: hidden;
}

body{
  font-family:Verdana;
}

`
function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
