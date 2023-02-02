/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			backgroundImage: {
				hero:
					'linear-gradient(4.71239rad, rgb(252, 0, 196) 12%, rgb(255, 140, 230) 90%)',
			},
		},
	},
	plugins: [],
};
