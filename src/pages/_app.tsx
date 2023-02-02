import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}
