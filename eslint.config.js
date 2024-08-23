module.exports = {
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:react-native/all',
	  'prettier',
	],
	plugins: ['react', 'react-native'],
	rules: {
	  // Suas regras personalizadas
	},
	env: {
	  'react-native/react-native': true,
	},
  };
