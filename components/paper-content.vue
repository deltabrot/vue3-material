<template>
    <div class="paper-content">
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
.paper-content {
    padding: 12px 16px;
}
</style>
