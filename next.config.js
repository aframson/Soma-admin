module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/merchant',
				permanent: false,
			},
			// {
			// 	source: '/auth/email-verify',
			// 	destination: '/verify',
			// 	permanent: false,
			// },
		];
	},
};
