<template>
    <div class="app-bar">
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
.app-bar {
    display: flex;
    background: #212121;
    overflow: hidden;
}
</style>
