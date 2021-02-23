<template>
    {{ row[field].map((x) => x.slice(3)).join(', ') }}
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
