<template>
    <div class="divider" :style="cssProperties"></div>
</template>

<script lang="ts">
// vue
import { defineComponent, computed } from 'vue';

export default defineComponent({
    props: {
        spacing: {
            type: Number,
            default: 50,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // computed
        const cssProperties = computed(() => {
            return (
                `--spacing: ${props.spacing}px;`
            );
        });

        return {
            cssProperties,
        };
    },
});
</script>

<style scoped>
.divider {
    width: 100%;
    padding-bottom: var(--spacing);
    margin-bottom: var(--spacing);
    border-bottom: 1px solid rgba(var(--default-color), 0.1);
}
</style>
