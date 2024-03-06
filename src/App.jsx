import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/route";
import poppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	)
}

const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'PoppinsSemiBold';
		src: url(${poppinsSemiBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
	}

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