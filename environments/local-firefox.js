exports.config = {
	capabilities: [
		{
			maxInstances: 1,
			browserName: 'firefox',
		},
	],
	services: ['firefox-profile'],
}
