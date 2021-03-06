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
	images: {
		domains: ['firebasestorage.googleapis.com', 'img.icons8.com'],
	},
};
