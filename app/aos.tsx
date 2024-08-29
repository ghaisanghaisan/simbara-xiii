"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-quad",
			duration: 750,
			offset: 250,
			once: true,
		});
	}, []);

	return null;
};
