// import adapter from '@sveltejs/adapter-netlify';
// // import adapter from '@sveltejs/adapter-node';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;


import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};

export default config;
