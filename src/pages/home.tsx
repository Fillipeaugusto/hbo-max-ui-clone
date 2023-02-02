/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import Head from 'next/head';
import { FaPlay, FaPlus } from 'react-icons/fa';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useRef, useState } from 'react';
import { api } from '@/lib/axios';
import {
	useTrendings,
	usePopular,
	UseContent,
} from '@/services/hooks/useMovie';

export default function Home() {
	const swiperRef = useRef<SwiperCore>();
	const swiperRefTrending = useRef<SwiperCore>();

	const { data } = UseContent(1);
	console.log(data);
	return (
		<div className="w-full  h-full bg-gradient-to-bl from-[#1f0b2e9e] via-[#180d379e] to-[#1d0d379e] bg-scroll">
			<div id="nav">
				<Header />
			</div>
			<Head>
				<title>HBO Max</title>
			</Head>
			<div className="w-full ">
				<div className="group">
					<Swiper
						slidesPerView={1}
						slidesPerGroup={1}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						pagination={{
							clickable: true,
						}}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						modules={[Navigation, Pagination, Autoplay]}
						className="mySwiper"
					>
						<div className="w-full text-white font-bold text-2xl absolute z-50 top-1/3 hidden group-hover:flex transition-all delay-200">
							<span className="flex gap-4 w-full items-center justify-between">
								<button
									className={`p-2 border-none rounded-full flex items-center justify-center  text-white   ${
										swiperRef.current?.isBeginning && 'opacity-50 '
									}`}
									onClick={() => swiperRef.current?.slidePrev()}
								>
									<MdOutlineKeyboardArrowLeft size={40} />
								</button>

								<button
									className={`p-2 border-none rounded-full  flex items-center justify-center text-white  ${
										swiperRef.current?.isEnd && 'opacity-50 '
									}`}
									onClick={() => swiperRef.current?.slideNext()}
								>
									<MdOutlineKeyboardArrowRight size={40} />
								</button>
							</span>
						</div>
						{data?.TopRated.results?.map((item: any) => {
							return (
								<SwiperSlide key={item.id}>
									<section className="h-[80vh] relative overflow-hidden">
										<img
											src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
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

										<div className="absolute w-full md:pl-10 bottom-[40px] text-white flex flex-col px-4">
											<span className="text-4xl max-w-[400px] md:text-6xl 2xl:text-5xl mb-5 font-bold font-cursive capitalize">
												{/* <img
												src="https://art-gallery-latam.api.hbo.com/images/GYyofRQHeuJ6fiQEAAAEy/logoburnedinleft?v=1152e7272a3afe370ce689433e20317a&size=880x265&compression=low&protection=false&language=pt-br"
												alt=""
												className="max-w-[350px] md:w-full"
											/> */}
												{item.original_name}
											</span>
											<span className="my-5 max-w-[600px] text-md font-normal md:text-xl flex flex-col gap-5">
												{item.overview.length > 250 &&
													item.overview.slice(0, item.overview.length / 2) + '...'}

												{item.overview.length < 250 && item.overview}
												<div className="flex gap-8 items-center">
													<button className="w-14 h-14 border-2 flex items-center justify-center rounded-full hover:border hover:border-violet-600">
														<FaPlay size={18} />
													</button>
													<button className="bg-[#3e3b44b3] px-8 py-4 rounded-md text-lg">
														SAIBA MAIS
													</button>
												</div>
											</span>
										</div>
									</section>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="w-full px-5">
					<div className="mt-10">
						<span className="text-white text-2xl">Maiores sucessos</span>
						<div className="flex group relative gap-3 mt-10">
							<Swiper
								// slidesPerView={2}
								spaceBetween={1}
								// slidesPerGroup={2}
								navigation={true}
								modules={[Navigation]}
								onBeforeInit={(swiper) => {
									swiperRefTrending.current = swiper;
								}}
								breakpoints={{
									'@0.00': {
										slidesPerView: 2,
										slidesPerGroup: 2,
									},
									'@0.10': {
										slidesPerView: 5,
										slidesPerGroup: 5,
									},
									'@0.60': {
										slidesPerView: 4,
										slidesPerGroup: 4,
									},
									'@1.40': {
										slidesPerView: 6,
										slidesPerGroup: 6,
									},
									'@1.50': {
										slidesPerView: 7,
										slidesPerGroup: 7,
									},
								}}
								className="mySwiper"
							>
								<div className="absolute z-50 w-full top-[30%] sm:top-1/2 hidden group-hover:flex">
									<span className="flex gap-4 w-full items-center justify-between ">
										<button
											className={`p-2 border-none rounded-full flex items-center justify-center  text-white  ${
												swiperRefTrending.current?.isBeginning && 'opacity-50 '
											}`}
											onClick={() => swiperRefTrending.current?.slidePrev()}
										>
											<MdOutlineKeyboardArrowLeft size={40} />
										</button>
										<button
											className={`p-2 border-none rounded-full  flex items-center justify-center text-white  ${
												swiperRefTrending.current?.isEnd && 'opacity-50 '
											}`}
											onClick={() => swiperRefTrending.current?.slideNext()}
										>
											<MdOutlineKeyboardArrowRight size={40} />
										</button>
									</span>
								</div>
								{data?.Trendings.results?.map((item: any) => {
									return (
										<SwiperSlide key={item.id} className="my-1 pl-1">
											<div className="w-full group/cardItem relative max-w-[200px] h-[140px] sm:h-[300.5px] sm:max-w-[203.75px] md:max-w-[220.75px] opacity-80 hover:opacity-100 transition-all hover:ring-2 hover:rounded-sm overflow-hidden hover:ring-violet-500  ">
												<img
													src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
													alt=""
													className="w-full h-full object-cover"
												/>
												<button className="w-10 h-10 absolute bottom-2 hidden right-5 group-hover/cardItem:flex transition-all items-center justify-center rounded-full bg-white">
													<FaPlus size={14} />
												</button>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>
				<div className="w-full px-5">
					<div className="mt-10">
						<span className="text-white text-2xl">Os populares</span>
						<div className="flex group relative gap-3 mt-10">
							<Swiper
								// slidesPerView={2}
								spaceBetween={1}
								// slidesPerGroup={2}
								navigation={true}
								modules={[Navigation]}
								onBeforeInit={(swiper) => {
									swiperRefTrending.current = swiper;
								}}
								breakpoints={{
									'@0.00': {
										slidesPerView: 2,
										slidesPerGroup: 2,
									},
									'@0.10': {
										slidesPerView: 5,
										slidesPerGroup: 5,
									},
									'@0.60': {
										slidesPerView: 4,
										slidesPerGroup: 4,
									},
									'@1.40': {
										slidesPerView: 6,
										slidesPerGroup: 6,
									},
									'@1.50': {
										slidesPerView: 7,
										slidesPerGroup: 7,
									},
								}}
								className="mySwiper"
							>
								<div className="absolute z-50 w-full top-[30%] sm:top-1/2 hidden group-hover:flex">
									<span className="flex gap-4 w-full items-center justify-between ">
										<button
											className={`p-2 border-none rounded-full flex items-center justify-center  text-white  ${
												swiperRefTrending.current?.isBeginning && 'opacity-50 '
											}`}
											onClick={() => swiperRefTrending.current?.slidePrev()}
										>
											<MdOutlineKeyboardArrowLeft size={40} />
										</button>
										<button
											className={`p-2 border-none rounded-full  flex items-center justify-center text-white  ${
												swiperRefTrending.current?.isEnd && 'opacity-50 '
											}`}
											onClick={() => swiperRefTrending.current?.slideNext()}
										>
											<MdOutlineKeyboardArrowRight size={40} />
										</button>
									</span>
								</div>
								{data?.Popular.results?.map((item: any) => {
									return (
										<SwiperSlide key={item.id} className="my-1 pl-1">
											<div className="w-full group/cardItem relative max-w-[200px] h-[140px] sm:h-[300.5px] sm:max-w-[203.75px] md:max-w-[220.75px] opacity-80 hover:opacity-100 transition-all hover:ring-2 hover:rounded-sm overflow-hidden hover:ring-violet-500  ">
												<img
													src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
													alt=""
													className="w-full h-full object-cover"
												/>
												<button className="w-10 h-10 absolute bottom-2 hidden right-5 group-hover/cardItem:flex transition-all items-center justify-center rounded-full bg-white">
													<FaPlus size={14} />
												</button>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
