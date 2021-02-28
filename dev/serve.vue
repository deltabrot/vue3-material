<template>
    <div id="app">
        <vm-theme>
            <vm-container>
                <vm-page-header>
                    Example
                </vm-page-header>

                <vm-action-button icon="fal fa-cog">Hello</vm-action-button>
                <vm-button>Hello</vm-button>
            </vm-container>
        </vm-theme>
        <vm-theme mode="dark">
            <vm-container>
                <vm-page-header>
                    Example
                </vm-page-header>

                <vm-action-button icon="fal fa-cog">Hello</vm-action-button>
                <vm-button>Hello</vm-button>
            </vm-container>
        </vm-theme>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue3MaterialSample } from '@/entry.esm';

export default defineComponent({
    name: 'ServeDev',
    //  Vue3MaterialSample,
    // }
});
</script>
