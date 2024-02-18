import { useState } from "react";
import { Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import NavList from "./Navlist";
import { Avatar } from "@radix-ui/react-avatar";

function Navbar() {
	const links = [
		{
			name: "Services",
			path: "/services",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="fixed top-0 left-0 z-[100] w-full">
			<nav className="flex w-full justify-between items-center px-7 h-14 bg-white dark:bg-bg-900 dark:border-b border-b-blue-700">
				{/* 
          // Desktop Navigation
        */}

				<Link to="/">
					<Text className="text-2xl dark:text-white">
						Carting
						<span className="font-bold text-heading">Clocks</span>
					</Text>
				</Link>

				<div className="md:hidden flex">
					<Button
						className="hover:cursor-pointer"
						onClick={handleOpen}
					>
						{open ? (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						) : (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
									fill="#fff"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						)}
					</Button>
				</div>

				<div className="md:flex justify-between w-full items-center px-5 hidden">
					<div className="flex justify-center items-center">
						<NavList links={links} />
					</div>
					<div>
						<ul className="list-none flex gap-5">
							<>
								<li>
									<Link to="/login">
										<Button
											as="Link"
											variant="outline"
											className="hover:cursor-pointer"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
													fill="currentColor"
													fillRule="evenodd"
													clipRule="evenodd"
												></path>
											</svg>
											Login
										</Button>
									</Link>
								</li>
								<li>
									<Link to="/register">
										<Button className="hover:cursor-pointer">
											Register
										</Button>
									</Link>
								</li>
							</>
						</ul>
					</div>
				</div>
			</nav>

			{/* 
      // Mobile Navigation
 */}
			{open && (
				<div className="dark:bg-bg-900 w-full p-5 md:hidden flex flex-col gap-5">
					<div>
						<ul className="list-none flex flex-col gap-5">
							<NavList links={links} align="row" />
						</ul>
					</div>
					<div className="flex justify-center w-full items-center">
						<ul className="list-none flex gap-5">
							{/* <li>
								 	<Button variant="outline">
								 		Logout
								</Button>
								</li> */}
							<>
								<li>
									<Link to="/login">
										<Button
											as="Link"
											variant="outline"
											className="hover:cursor-pointer"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
													fill="currentColor"
													fillRule="evenodd"
													clipRule="evenodd"
												></path>
											</svg>
											Login
										</Button>
									</Link>
								</li>
								<li>
									<Link to="/register">
										<Button className="hover:cursor-pointer">
											Register
										</Button>
									</Link>
								</li>
							</>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
