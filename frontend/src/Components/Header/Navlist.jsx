import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "@radix-ui/themes";

function NavList(props) {
	const { links, align } = props;

	return (
		<ul
			className={`list-none flex ${
				align === "row" ? "flex-col" : "flex-row"
			} gap-5`}
		>
			{links.map((link, index) => {
				return (
					<li key={index}>
						<Link to={link.path}>
							<Button color="orange" variant="ghost" className="hover:cursor-pointer">
								<Text className="cursor-pointer">
									{link.name}
								</Text>
							</Button>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default NavList;
