<template>
    <div class="actions">
        <vm-action-button
            v-for="(action, i) in props.exported.actions"
            :key="i"
            :class="{ 'ml-1': i !== 0 }"
            :icon="action.icon"
            background="rgba(0,0,0,0)"
            :elevation="0"
            :isSmall="true"
            @click="action.callback(props.row)"
        >
        </vm-action-button>
    </div>
</template>

<script lang="ts">
// components
import VmActionButton from '../../action-button.vue';

export default {
    components: {
        VmActionButton,
    },
    props: ['exported', 'row', 'field'],
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
};
</script>

<style scoped>
.update-delete {
    display: flex;
}
</style>
