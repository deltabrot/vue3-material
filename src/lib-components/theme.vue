<template>
    <div :class="props.mode + '-theme'">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        mode: {
            type: String,
            default: 'light',
        }
    }
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
};
</script>

<style>
body {
    margin: 0;
}
</style>

<style scoped>
.theme {
    background: #121212;
}
</style>
