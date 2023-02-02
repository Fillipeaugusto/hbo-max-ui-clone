/* eslint-disable @next/next/no-img-element */

import { RxHamburgerMenu } from 'react-icons/rx';
import { GoSearch } from 'react-icons/go';
import { useEffect, useState } from 'react';

export default function Header() {
	const [scroll, setScroll] = useState(false);

	const checkScroll = () => {
		if (window.scrollY > 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScroll);
		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	}, []);
	return (
		<div
			className={`w-full flex items-center transition-all duration-300 justify-between py-4 px-8 md:px-14 ${
				scroll ? 'bg-black/95' : ''
			}  text-white fixed z-10`}
		>
			<div className="flex gap-6 items-center flex-1">
				<RxHamburgerMenu size={24} />
				<a href="" className="hidden md:flex">
					Filmes
				</a>
				<a href="" className="hidden md:flex">
					Séries
				</a>
			</div>
			<div className="flex-1 mr-10">
				<img
					src="/images/logo.svg"
					alt=""
					className="w-full max-w-[100px] md:max-w-[120px]"
				/>
			</div>
			<div className="flex items-center gap-4 md:gap-8 ">
				<a href="">
					<GoSearch size={20} />
				</a>
				<div className="flex gap-1 items-center">
					<div className="px-3 py-1 md:px-4 md:py-2 bg-pink-600/40 rounded-full bg-hero">
						F
					</div>
					<span className="text-lg hidden md:flex">Fillipe</span>
				</div>
			</div>
		</div>
	);
}
