import Image from "next/image";
import SIMBARA from "@/public/SIMBARA XIII.png";
import Link from "next/link";

function MenuIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className="fill-flamingo">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"></path>{" "}
			</g>
		</svg>
	);
}

export default function Navbar() {
	return (
		<nav className="w-full bg-night h-[60px] md:h-[80px] px-4 md:px-36 flex justify-between items-center fixed z-50 border-b-4 py-2 border-bcyan drop-shadow-glow">
			<Link href="/" className="h-full w-auto aspect-square">
				<Image src={SIMBARA} alt="simbara" height="400" width="400" />
			</Link>
			<div className="h-full p-2 md:p-3 rounded-md w-auto aspect-square hover:bg-base-100">
				<div className="drawer drawer-end">
					<input id="my-drawer" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer" className="hover:cursor-pointer ">
							<MenuIcon />
						</label>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"></label>
						<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl">
							{/* Sidebar content here */}
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/registrasi">Registrasi</Link>
							</li>
							<li>
								<Link href="/tentang-kami">Tentang Kami</Link>
							</li>
							<li>
								<Link href="/peraturan">Peraturan</Link>
							</li>
							<li>
								<Link href="/snk">Syarat & Ketentuan</Link>
							</li>
							<p className="absolute bottom-2 right-4 text-bcyan text-sm">
								Ghaisan Media{" "}
							</p>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
