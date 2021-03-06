<template>
    <vm-container style="flex: 1; margin: 30px 0; min-width: 1px;">
        <vm-card style="padding: 50px">
            <vm-text-field
                v-model="x"
                label="Test"
            >
            </vm-text-field>
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
