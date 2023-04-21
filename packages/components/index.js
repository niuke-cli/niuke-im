// components/index.js
import components from './src';

export * from './src';


export default {
	// @ts-ignore
	install: app => components.forEach(c => app.use(c)),
};
