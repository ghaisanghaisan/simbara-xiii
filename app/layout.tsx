import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { AOSInit } from "./aos";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SIMBARA XIII",
	description: "Utopian Visionary Quest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jura.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
