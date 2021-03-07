<template>
    <div
        class="card-content"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
});
</script>

<style scoped>
.card-content {
    padding: 15px 20px;
}
</style>
