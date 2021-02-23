<template>
    <div class="color" :style="`background: ${props.row[props.field]}`">
        {{ props.row[props.field] }}
    </div>
</template>

<script lang="ts">
export default {
    props: ['row', 'field', 'exported'],
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
};
</script>

<style scoped>
.color {
    display: flex;
    padding: 5px 10px;
    border-radius: 50px;
}
</style>
