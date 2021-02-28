<template>
    <vm-theme :mode="isDarkMode ? 'dark' : 'light'">
        <vm-container>
            <vm-switch label="Dark mode" v-model="isDarkMode"></vm-switch>
            <vm-page-header>
                Example title
            </vm-page-header>

            <vm-button>Example Button</vm-button>
        </vm-container>
    </vm-theme>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ServeDev',
    setup() {
        const isDarkMode = ref(false);

        return {
            isDarkMode,
        };
    },
});
</script>

<style scoped>
#app {
    height: 100%;
}
</style>
