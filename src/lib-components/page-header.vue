<template>
    <div class="page-header">
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
.page-header {
    font-weight: 500;
    font-size: 1.8rem;
    margin-top: calc(var(--default-margin) * 4);
    margin-bottom: calc(var(--default-margin) * 6);
}
</style>
