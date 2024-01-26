import { createGlobalStyle, ThemeProvider } from "styled-components";

const lightTheme = {
	bodyBackground: "#F6F8FF",
	containerBackground: "#FEFEFE",
	textColor: "#4B6A9B",
	headerColor: "#222731",
	titleColor: "#2B3442",
	toggleHover: "#222731",
	SVGcolor: "#4B6A9B",
	boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
	isLight: true,
};

const darkTheme = {
	bodyBackground: "#141D2F",
	containerBackground: "#1E2A47",
	textColor: "#fff",
	toggleHover: "#90A4D4",
	SVGcolor: "#fff",
	isLight: false,
};

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
		font-family: 'Space Mono', sans-serif;
        background-color: ${({ theme }) => theme.bodyBackground};
		height: 100vh;
		height: 100dvh;
		overflow-x: hidden;

		@media screen and (min-width: 1440px) {
			display: flex;
			justify-content: center;
			align-items: center;

		}
    }
    * {
        margin: 0;
		padding: 0;
		box-sizing: border-box;
        color: ${({ theme }) => theme.textColor};
    }
	:root {
		--rem: 10;
	}

`;

const Theme = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme ? lightTheme : darkTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
