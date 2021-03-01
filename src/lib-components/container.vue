<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
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
.container {
    display: flex;
    justify-content: center;
    padding: 0 calc(var(--default-margin) * 4);
}

.content {
    flex: 1;
    max-width: 1200px;
    width: 100%;
}
</style>
