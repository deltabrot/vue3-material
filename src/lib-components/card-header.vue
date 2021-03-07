<template>
    <div
        class="card-header"
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
.card-header {
    padding: 15px 20px;
    font-size: 1.2rem;
    font-weight: 500;
}
</style>
