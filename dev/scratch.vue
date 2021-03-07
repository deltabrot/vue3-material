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
        <vm-card style="margin-top: 20px">
            <vm-card-header>
                Grid example
            </vm-card-header>
        </vm-card>
        <vm-card style="margin-top: 20px">
            <vm-grid :rowData="rowData" :config="gridConfig"> </vm-grid>
        </vm-card>
        <vm-card style="margin-top: 20px">
            <vm-card-content>
                <vm-button @click="showModal">
                    Open modal
                </vm-button>
            </vm-card-content>
        </vm-card>
    </vm-container>
    <vm-modal ref="testModal">
        <vm-card-header>
            Title
        </vm-card-header>
        <vm-card-content>
            Example text.
        </vm-card-content>
    </vm-modal>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';
import { VmModal } from '@/entry.esm';

export default defineComponent({
    setup() {
        const x = ref('');
        const testModal = ref<InstanceType<typeof VmModal>>();

        const rowData = [
            { id: 1, name: 'Adam' },
            { id: 2, name: 'Ben' },
            { id: 3, name: 'Charlie' },
            { id: 4, name: 'Daniel' },
        ];

        const gridConfig = [
            {
                title: 'ID',
                field: 'id',
            },
            {
                title: 'Name',
                field: 'name',
            },
        ];

        const showModal = () => {
            testModal.value?.show();
        };

        return {
            x,
            rowData,
            gridConfig,
            testModal,
            showModal,
        };
    },
});
</script>

<style scoped></style>
