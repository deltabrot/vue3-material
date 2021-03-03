<template>
    <div
        class="navigation-drawer"
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
    setup(props: any) {
        return {
            props,
        };
    },
});
</script>

<style scoped>
.navigation-drawer {
    position: sticky;
    top: 4rem;
    height: calc(100vh - 4rem);
    padding: 20px 32px;
    overflow-y: auto;
}
</style>
