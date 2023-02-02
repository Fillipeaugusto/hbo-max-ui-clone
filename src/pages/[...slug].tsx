/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import Head from 'next/head';
import { FaPlay } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
export default function Movie() {
	return (
		<div className="w-full h-screen bg-gradient-to-bl from-[#1f0b2e] via-[#180d37] to-[#1d0d37] bg-scroll">
			<Header />
			<Head>
				<title>HBO Max</title>
			</Head>
			<section className="h-[90vh] relative overflow-hidden">
				<img
					src="https://www.themoviedb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
					alt=""
					className="w-full h-full object-cover"
				/>

				<div className="css-175oi2r filter">
					<div className="css-175oi2r filter filter1" />
					<div className="css-175oi2r filter filter2" />
					<div className="css-175oi2r filter filter3" />
					<div className="css-175oi2r filter filter4" />
					<div className="css-175oi2r filter filter5" />
				</div>

				<div className="absolute w-full md:pl-10 bottom-[100px] text-white flex flex-col px-4">
					<span className="text-4xl max-w-[400px] md:text-6xl 2xl:text-8xl mb-5 font-bold font-cursive capitalize">
						<img
							src="https://art-gallery-latam.api.hbo.com/images/GYyofRQHeuJ6fiQEAAAEy/logoburnedinleft?v=1152e7272a3afe370ce689433e20317a&size=880x265&compression=low&protection=false&language=pt-br"
							alt=""
							className="max-w-[400px] md:w-full"
						/>
					</span>
					<span className="my-5 max-w-[600px] text-md font-normal md:text-xl flex flex-col gap-5">
						{/* {data.project.description.slice(0, data.project.description.length / 2)} */}
						<div className="flex gap-8 items-center">
							<button className="w-14 h-14 border-2 flex items-center justify-center rounded-full hover:border hover:border-violet-600">
								<FaPlay size={18} />
							</button>
							<button>
								<AiOutlinePlus size={24} />
							</button>
						</div>
						asdasdaosdjaosjdoa ...
					</span>

					<div className="flex gap-5 px-3 sm:px-0">
						<a
							href=""
							title=""
							className="inline-flex gap-2 items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-white transition-all duration-200 border-b-2 hover:border-gray-400  sm:w-auto sm:mt-0  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  border-transparent"
							role="button"
							rel="noreferrer"
						>
							Demo
						</a>

						<a
							href=""
							title=""
							target="_blank"
							className="inline-flex gap-2 items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-white transition-all duration-200 border-2  sm:w-auto sm:mt-0 rounded-xl  focus:ring-2 focus:ring-offset-2   hover:text-white focus:text-white "
							role="button"
							rel="noreferrer"
						>
							Github
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
