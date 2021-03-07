<template>
    <vm-container style="flex: 1; margin: 30px 0; min-width: 1px;">
        <vm-card style="padding: 50px; margin-bottom: 20px">
            Value: {{ x }}
        </vm-card>
        <vm-card style="padding: 50px">
            <div style="flex: 1;">
                <vm-text-field v-model="x" label="Value"> </vm-text-field>
                <vm-text-field style="margin-top: 40px" label="Test">
                </vm-text-field>
            </div>
        </vm-card>
        <vm-card style="margin-top: 20px">
            <vm-card-header>
                router-link example
            </vm-card-header>
            <vm-card-content>
                <vm-button routerPath="/components/app-bar">
                    Go to /components/app-bar
                </vm-button>
            </vm-card-content>
        </vm-card>
    </vm-container>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const x = ref('');

        return {
            x,
        };
    },
});
</script>

<style scoped></style>
