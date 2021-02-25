# vue3-material

<p align="center">
    <a href="https://www.npmjs.com/package/vue3-material">
        <img src="https://img.shields.io/npm/v/vue3-material.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/vue3-material">
        <img src="https://img.shields.io/npm/dt/vue3-material.svg" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/vue3-material">
        <img src="https://img.shields.io/bundlephobia/min/vue3-material.svg" alt="Bundle Size">
    </a>
    <a href="https://www.npmjs.com/package/vue3-material">
        <img src="https://img.shields.io/npm/l/vue3-material.svg" alt="License">
    </a>
</p>

vue3-material is a library of UI components specifically made with Vue.js 3 in mind, which adhere to the <a href="https://material.io/design">Google Material Design</a> specification.

## Installation and Usage

Install vue3-material using npm or yarn:

``` bash
npm install vue3-material --save
yarn add vue3-material
```

Import or require vue3-material in your code:

``` javascript
import { createApp } from 'vue';
import App from './app.vue';
import Vue3Material from 'vue3-material';

createApp(App)
    .use(Vue3Material)
    .mount('#app');
```

Or import individual components:

``` javascript
import { defineComponent } from 'vue';
import { VmButton, VmContainer } from 'vue3-material';

export default defineComponent({
    components: {
        VmButton,
        VmContainer,
    }
});
```

Then use in your template:

``` html
<template>
    <vm-container>
        <vm-button>It works!</vm-button>
    </vm-container>
</template>
```

## Contributing

This project is in development, so all contributions are welcomed.

## License

MIT
