import { AppRoutes } from "./routes/route";
import { ShoppingCartProvider } from "./context/shopping-cart";
import { DataProvider } from "./context/data-context";
import { createGlobalStyle } from "styled-components";

export const App = () => {
	return (
		<DataProvider>
			<ShoppingCartProvider>
				<GlobalStyle />
				<AppRoutes />
			</ShoppingCartProvider>
		</DataProvider>
	)
}

const GlobalStyle = createGlobalStyle`
	*{
		font-family: Roboto, sans-serif;
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