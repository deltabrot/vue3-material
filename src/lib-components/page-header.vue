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
    font-size: 1.8rem;
    border-bottom: 1px solid rgba(var(--default-color), 0.15);
    margin-top: calc(var(--default-margin) * 4);
    margin-bottom: calc(var(--default-margin) * 4);
    padding-bottom: calc(var(--default-margin) * 1);
}
</style>
