exports.config = {
	capabilities: [
		{
			maxInstances: 1,
			browserName: 'chrome',
			acceptInsecureCerts: true,
		},
	],
	services: ['selenium-standalone'],
}
