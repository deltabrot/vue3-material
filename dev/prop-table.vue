<template>
    <vm-page-header style="font-size: 1.8rem;">
        Props
    </vm-page-header>
    <div class="props-table-wrapper">
        <table class="props-table">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th style="width: 100%">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pi, i) in props.propInfo" :key="i">
                    <td>
                        <code>{{ pi.name }}</code>
                    </td>
                    <td>
                        <code>{{ pi.type }}</code>
                    </td>
                    <td>
                        <code>{{ pi.default }}</code>
                    </td>
                    <td style="white-space: normal">{{ pi.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        propInfo: {
            type: Array,
            default: [],
        },
    },
    setup(props: any) {
        return {
            props,
        };
    },
});
</script>

<style scoped>
.props-table-wrapper {
    border-radius: 6px;
    border: 1px solid rgba(var(--default-color), 0.1);
    overflow-x: auto;
}

.props-table {
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    min-width: 0;
}

.props-table code {
    background: rgba(var(--default-color), 0.05);
    padding: 5px 10px;
    border-radius: 5px;
}

.props-table th,
.props-table td {
    white-space: nowrap;
    padding: 15px 20px;
    border-right: 1px solid rgba(var(--default-color), 0.1);
    border-bottom: 1px solid rgba(var(--default-color), 0.1);
}

.props-table tr:last-child td {
    border-bottom: none;
}

.props-table tr th:last-child,
.props-table tr td:last-child {
    border-right: none;
}

.props-table th {
    text-align: left;
    font-weight: 500;
}
</style>
