module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	// testPathIgnorePatterns: ['backend', 'backendML'],
	moduleNameMapper: {
		axios: 'axios/dist/node/axios.cjs',
	},
};
