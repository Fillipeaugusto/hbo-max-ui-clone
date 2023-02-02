import axios from 'axios';
import { useQuery } from 'react-query';

async function getTrendings(page: number) {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/trending/tv/week?api_key=11bb243045e28cc838839997d78a8ac1&language=pt-BR&page=${page}`
	);
	return data;
}

export function useTrendings(page: number) {
	return useQuery('trendings', () => getTrendings(page), {
		staleTime: 60000, // 10 minutes (in milliseconds)
		keepPreviousData: true,
	});
}
async function getPopular(page: number) {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=11bb243045e28cc838839997d78a8ac1&language=pt-BR&page=${page}`
	);
	return data;
}

export function usePopular(page: number) {
	return useQuery('popular', () => getPopular(page), {
		staleTime: 60000, // 10 minutes (in milliseconds)
		keepPreviousData: true,
	});
}

async function GetContent(page: number) {
	const Trendings = await axios
		.get(
			`https://api.themoviedb.org/3/trending/tv/week?api_key=11bb243045e28cc838839997d78a8ac1&language=pt-BR&page=${page}`
		)
		.then((response) => {
			return response.data;
		});

	const Popular = await axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=11bb243045e28cc838839997d78a8ac1&language=pt-BR&page=${page}`
		)
		.then((response) => {
			return response.data;
		});

	const TopRated = await axios
		.get(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=11bb243045e28cc838839997d78a8ac1&language=pt-BR&page=${page}`
		)
		.then((response) => {
			return response.data;
		});

	return { Trendings, Popular, TopRated };
}

export function UseContent(page: number) {
	return useQuery('content', () => GetContent(page), {
		staleTime: 60000, // 10 minutes (in milliseconds)
		keepPreviousData: true,
	});
}
