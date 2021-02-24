<template>
    <div class="paper-header">
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
.paper-header {
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.04);
}
</style>
