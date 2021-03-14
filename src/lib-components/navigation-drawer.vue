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
    padding: 20px 32px;
    overflow-y: auto;
    transition: box-shadow 0.2s;
}

.navigation-drawer:before {
    transition: background 0.2s;
}
</style>
