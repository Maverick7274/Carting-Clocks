import { Button, Heading, Separator, Strong, Text } from "@radix-ui/themes";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div>
			<div className="dark:bg-bg-900 min-h-screen">
				<div>
					<div>
						<div className="flex justify-center items-center h-screen">
							<div className="sm:dark:bg-bg-700 bg-none border border-blue-200 p-8 rounded-lg md:w-5/12 w-full flex md:justify-between justify-center items-center md:gap-7 gap-0">
								<div className="w-full flex flex-col justify-center items-center">
									<Heading className="text-3xl font-bold mb-4 dark:text-white text-center">
										Register
									</Heading>
									<form className="w-full">
										<Form.Root>
											<Form.Field
												className="grid mb-[10px]"
												name="email"
											>
												<div className="flex items-baseline justify-between">
													<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
														Email
													</Form.Label>
													<Form.Message
														className="text-[13px] text-white opacity-[0.8]"
														match="valueMissing"
													>
														Please enter your email
													</Form.Message>
													<Form.Message
														className="text-[13px] text-white opacity-[0.8]"
														match="typeMismatch"
													>
														Please provide a valid
														email
													</Form.Message>
												</div>
												<Form.Control asChild>
													<input
														className="box-border w-full bg-blue-100 shadow-orange-500 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-orange-50 focus:shadow- selection:color-white selection:bg-blackA6"
														type="email"
														required
													/>
												</Form.Control>
											</Form.Field>

											<Form.Submit asChild>
												<button className="box-border w-full dark:text-white hover:text-orange-100 shadow-orange-500 hover:bg-heading inline-flex h-[35px] items-center justify-center rounded-[4px] bg-primary px-[15px] font-medium leading-none focus:outline focus:outline-orange-500 focus:outline-none mt-[10px]">
													<Text>Submit</Text>
												</button>
											</Form.Submit>
										</Form.Root>
									</form>

									<div className="flex items-center justify-center my-5">
										<Text className="dark:text-white">
											<Strong>OR</Strong>
										</Text>
									</div>

									<div className="w-full">
										<Button
											variant="outline"
											className="w-full hover:cursor-pointer"
										>
											<Text>Sign Up with </Text>{" "}
											<img
												className="h-6 w-6"
												src="https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg"
											></img>
											<Text>Auth0</Text>
										</Button>
									</div>
									<Separator
										size="4"
										color="white"
										className="my-7"
									/>
									<div className="text-center">
										<Text className="dark:text-white">
											Alreadt have an account?{" "}
											<Strong>
												<Link
													to="/login"
													className="text-links"
												>
													Login
												</Link>
											</Strong>
										</Text>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
