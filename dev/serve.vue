<template>
    <div id="app">
        <vm-action-button icon="fal fa-cog">Hello</vm-action-button>
        <vm-button>Hello</vm-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VmButton, VmActionButton } from '@/entry.esm';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue3MaterialSample } from '@/entry.esm';

export default defineComponent({
    name: 'ServeDev',
    components: {
        VmActionButton,
        VmButton,
    },
    //  Vue3MaterialSample,
    // }
});
</script>
