module.exports = {
	preset: 'jest-expo',
	setupFiles: ['./jestSetup.js'], // Arquivo de configuração adicional se necessário
	testPathIgnorePatterns: [
	  '/node_modules/',
	  '/android/',
	  '/ios/',
	],
	transformIgnorePatterns: [
	  'node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|@unimodules|unimodules|sentry-expo|native-base)',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	globals: {
	  __DEV__: true,
	},
	moduleNameMapper: {
	  '\\.svg': '<rootDir>/__mocks__/svgMock.js',
	  '\\.png': '<rootDir>/__mocks__/fileMock.js',
	  '\\.jpg': '<rootDir>/__mocks__/fileMock.js',
	},
  };
