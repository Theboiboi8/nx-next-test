import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import {ColorModeScript, extendTheme, type ThemeConfig} from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config })

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: <>{initialProps.styles}</>
		};
	}

	render() {
		return (
			<Html>
				<Head>{CssBaseline.flush()}</Head>
				<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;