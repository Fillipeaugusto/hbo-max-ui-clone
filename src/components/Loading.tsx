/* eslint-disable @next/next/no-img-element */
export function Loading() {
	return (
		<div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#7626b7] via-[#3b0198] to-[#3164c3]">
			<img src="/images/logo.svg" alt="" className="animate-pulse" />
		</div>
	);
}
