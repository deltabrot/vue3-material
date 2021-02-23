<template>
    <div class="navigation-drawer">
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
.navigation-drawer {
    background: #212121;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
