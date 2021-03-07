<template>
    <div
        class="app-bar"
        :class="[
            `elevation-${props.elevation}`,
            `elevation-background-${props.elevation}`,
        ]"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        elevation: {
            type: Number,
            default: 2,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
});
</script>

<style scoped>
.app-bar {
    min-height: 4rem;
    display: flex;
    width: 100%;
}
</style>
