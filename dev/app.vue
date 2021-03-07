<template>
    <vm-theme :mode="isDarkMode ? 'dark' : 'light'">
        <vm-app-bar class="doc-app-bar">
            <div class="logo">vue3-material</div>
            <vm-switch label="Dark mode" v-model="isDarkMode"></vm-switch>
        </vm-app-bar>
        <div class="main">
            <router-view></router-view>
        </div>
    </vm-theme>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';

// components
import ComponentPage from './component-page.vue';

export default defineComponent({
    name: 'ServeDev',
    components: {
        ComponentPage,
    },
    setup() {
        const isDarkMode = ref(false);

        return {
            isDarkMode,
        };
    },
});
</script>

<style>
#app {
    height: 100%;
}

.app-bar.doc-app-bar {
    position: sticky !important;
    top: 0;
    padding: 10px 20px;
    /* background: rgba(98, 0, 238);
    color: #fff; */
    background: rgb(15, 112, 216);
    color: rgb(255, 255, 255);
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.logo {
    font-size: 1.4rem;
}

.main {
    display: flex;
    width: 100%;
    background: rgba(var(--default-color), 0.01);
}

.component-content {
    margin-bottom: 50px;
}

.code-block {
    background: rgba(var(--default-color), 0.03);
    border-radius: 6px;
    padding: 16px;
    margin: 0;
    font-size: 1.1rem;
}
</style>
