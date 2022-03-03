import {Button, useColorMode} from "@chakra-ui/react";

export function ThemeButton() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<header>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</header>
	)
}