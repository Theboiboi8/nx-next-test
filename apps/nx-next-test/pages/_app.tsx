import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from "next/script";
import './styles.css';
import {ChakraProvider} from "@chakra-ui/react";

function CustomApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to nx-next-test!</title>
			</Head>

			<Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
			<Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

			<main className="app">
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</main>
		</>
	);
}

export default CustomApp;
