import React from "react";
import {Popover, PopoverTrigger, Button, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverBody,Box,PopoverFooter, Portal} from "@chakra-ui/react";

export const ItemHoverPopover = ({ children, header, body, footer, placement }) => {
	const initRef = React.useRef()

	return (
		<Popover trigger="hover" closeOnBlur={false} placement={placement}>
			{({ isOpen, onClose }) => (
				<>
					<PopoverTrigger>
						{children}
					</PopoverTrigger>
					<Portal>
						<PopoverContent>
							<PopoverHeader>{header}</PopoverHeader>
							<PopoverCloseButton />
							<PopoverBody>
								{body}
							</PopoverBody>
							<PopoverFooter>{footer}</PopoverFooter>
						</PopoverContent>
					</Portal>
				</>
			)}
		</Popover>
	)
}