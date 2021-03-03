<template>
    <vm-page-header style="margin-top: 10px; font-size: 3rem;">
        {{ props.componentName }}
    </vm-page-header>

    <div class="component-content">
        <div class="description">
            {{ props.componentDescription }}
        </div>
    </div>

    <div class="component-content">
        <vm-page-header style="font-size: 1.8rem;">
            Usage
        </vm-page-header>
        <pre
            class="code-block"
        ><code>{{ props.componentUsage }}</code></pre>
    </div>

    <div class="component-content">
        <prop-table :propInfo="props.propInfo"></prop-table>
    </div>

    <examples :examples="props.examples"></examples>
</template>

<script lang="ts">
// vue
import { defineComponent } from 'vue';

// components
import PropTable from './prop-table.vue';
import Examples from './examples.vue';

export default defineComponent({
    components: {
        PropTable,
        Examples,
    },
    props: {
        componentName: {
            type: String,
            default: 'Default',
        },
        componentDescription: {
            type: String,
            default: 'Default description',
        },
        componentUsage: {
            type: String,
            default: 'Default usage',
        },
        propInfo: {
            type: Array,
            default: [],
        },
        examples: {
            type: Array,
            default: [],
        }
    },
    setup(props: any) {
        return {
            props,
        };
    },
});
</script>

<style scoped>
.description {
    font-size: 1.3rem;
}
</style>
