<template>
    <div
        class="card"
        :class="[
            `elevation-${props.elevation}`,
            `elevation-background-${props.elevation}`,
        ]"
        :style="cssProperties"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, computed } from 'vue';

export default defineComponent({
    props: {
        elevation: {
            type: Number,
            default: 2,
        },
        borderRadius: {
            type: Number,
            default: 5,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // computed
        const cssProperties = computed(() => {
            return (
                `--card-border-radius: ${props.borderRadius}px;`
            );
        });

        return {
            props,
            cssProperties,
        };
    },
});
</script>

<style scoped>
.card {
    position: relative;
    border-radius: var(--card-border-radius);
    overflow: hidden;
    transition: box-shadow 0.2s;
}
</style>
