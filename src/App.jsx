import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./routes/route"

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	)
}

const GlobalStyle = createGlobalStyle`
	*{
		font-family: Roboto, Helvetica, 'sans-serif';
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
		color: #000000;
	}

	ul{
		list-style: none;
	}

	img{
		max-width: 100%;
	}
`