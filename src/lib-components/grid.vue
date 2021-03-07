<template>
    <div class="grid-container" :class="{ 'grid-border': isGridBorder }">
        <div class="grid-wrapper">
            <table
                class="grid"
                :class="{ 'is-selectable': props.isSelectable }"
            >
                <thead>
                    <tr>
                        <th v-if="isSelectable" style="width: 1px"></th>
                        <th v-for="(headerConfig, i) in config" :key="i">
                            {{ headerConfig.title }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="loading-row" v-if="isLoading">
                        <td colspan="10000">
                            <div class="row jc-center">
                                <vm-loading-spinner :scale="0.8">
                                </vm-loading-spinner>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="rowData.length === 0 && !isLoading">
                        <td class="center-text" colspan="10000">
                            No data available
                        </td>
                    </tr>
                    <tr
                        :class="{
                            selected: selectedRowIds.indexOf(row.id) !== -1,
                        }"
                        v-for="(row, i) in getFilteredRows()"
                        :key="i"
                    >
                        <td v-if="isSelectable">
                            <input
                                type="checkbox"
                                :checked="
                                    selectedRowIds.find((x) => x === row.id)
                                "
                                @change="selectRowById(row.id)"
                            />
                        </td>
                        <td
                            v-for="(headerConfig, i) in config"
                            :class="{ 'fit-width': headerConfig.fitWidth }"
                            :key="i"
                        >
                            <div v-if="!headerConfig.cellRenderer">
                                {{ row[headerConfig.field] }}
                            </div>
                            <component
                                v-if="headerConfig.cellRenderer"
                                :is="headerConfig.cellRenderer.component"
                                :row="row"
                                :field="headerConfig.field"
                                :exported="headerConfig.cellRenderer.exported"
                            >
                            </component>
                        </td>
                    </tr>
                    <tr class="empty-row" v-for="i in emptyRows" :key="i">
                        <td>.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination">
            <div
                class="pagination-wrapper"
                :class="{ 'pagination-hidden': isLoading }"
            >
                <div class="row-counter"></div>
                <div class="page-controls">
                    <div class="current-page">
                        {{ rowData.length ? startRowIndex + 1 : 0 }}-{{
                            endRowIndex + 1
                        }}
                        of {{ rowData.length }}
                    </div>
                    <div class="page-control-button" @click="goToFirstPage">
                        <i class="far fa-chevron-double-left"></i>
                    </div>
                    <div
                        class="page-control-button"
                        @click="decrementCurrentPage"
                    >
                        <i class="far fa-chevron-left"></i>
                    </div>
                    <div
                        class="page-control-button"
                        @click="incrementCurrentPage"
                    >
                        <i class="far fa-chevron-right"></i>
                    </div>
                    <div class="page-control-button" @click="goToLastPage">
                        <i class="far fa-chevron-double-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, computed } from 'vue';

// components
import VmLoadingSpinner from './loading-spinner.vue';

export default defineComponent({
    components: {
        VmLoadingSpinner,
    },
    props: {
        config: {
            type: Object,
        },
        rowData: {
            type: Array,
            default: () => {
                return [];
            },
        },
        editCallback: {
            type: Function,
        },
        deleteCallback: {
            type: Function,
        },
        isSelectable: {
            type: Boolean,
            default: false,
        },
        isGridBorder: {
            type: Boolean,
            default: true,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        maxRows: {
            type: Number,
            default: 10,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // properties
        const selectedRowIds = ref<number[]>([]);
        const currentPage = ref(1);
        const rowsPerPage = computed(() => {
            return props.maxRows ? props.maxRows : 10;
        });

        // computed
        const totalPages = computed(() => {
            return Math.ceil(props.rowData.length / rowsPerPage.value);
        });

        const startRowIndex = computed(() => {
            return Math.ceil((currentPage.value - 1) * rowsPerPage.value);
        });

        const endRowIndex = computed(() => {
            let endRow = Math.ceil(currentPage.value * rowsPerPage.value - 1);
            if (endRow > props.rowData.length) {
                endRow = props.rowData.length - 1;
            }
            return endRow;
        });

        const emptyRows = computed(() => {
            if (props.isLoading) {
                return 0;
            }
            let assign = 0;
            if (
                currentPage.value === totalPages.value &&
                props.rowData.length % rowsPerPage.value !== 0
            ) {
                assign =
                    rowsPerPage.value -
                    Math.floor(props.rowData.length % rowsPerPage.value);
            }
            return assign;
        });

        // methods
        const selectRowById = (id: number) => {
            if (props.isSelectable) {
                const index = selectedRowIds.value.indexOf(id);
                if (index !== -1) {
                    selectedRowIds.value.splice(index, 1);
                } else {
                    selectedRowIds.value.push(id);
                }
            }
        };

        const getSelectedIds = (): number[] => {
            return selectedRowIds.value;
        };

        // eslint-disable-next-line
        const getFilteredRows = (): any[] => {
            if (props.isLoading) {
                return [];
            }
            const tmpRows = [...props.rowData];
            return tmpRows.splice(startRowIndex.value, rowsPerPage.value);
        };

        const setCurrentPage = (pageIndex: number) => {
            if (pageIndex > 0 && pageIndex <= totalPages.value) {
                currentPage.value = pageIndex;
            }
        };

        const incrementCurrentPage = (): void => {
            setCurrentPage(currentPage.value + 1);
        };

        const decrementCurrentPage = (): void => {
            setCurrentPage(currentPage.value - 1);
        };

        const goToLastPage = (): void => {
            setCurrentPage(totalPages.value);
        };

        const goToFirstPage = (): void => {
            setCurrentPage(1);
        };

        const deselectAll = (): void => {
            selectedRowIds.value = [];
        };

        return {
            props,
            selectRowById,
            selectedRowIds,
            getSelectedIds,
            rowsPerPage,
            currentPage,
            totalPages,
            startRowIndex,
            endRowIndex,
            emptyRows,
            getFilteredRows,
            incrementCurrentPage,
            decrementCurrentPage,
            goToLastPage,
            goToFirstPage,
            deselectAll,
        };
    },
});
</script>

<style scoped>
.grid-container {
    --grid-border-color: rgba(var(--default-color), 0.3);
    overflow: hidden;
    font-size: 0.9rem;
    flex: 1;
}

.grid-wrapper {
    overflow-x: auto;
}

.grid {
    border-collapse: collapse;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
}

.grid thead tr {
    color: rgb(var(--default-color));
    text-align: left;
    border-bottom: 1px solid var(--grid-border-color);
}

.grid thead tr th {
    font-weight: 600;
}

.grid th {
    white-space: nowrap;
    padding: 0 16px;
    height: 50px;
}

.grid td {
    height: 46px;
    white-space: nowrap;
}

.grid td {
    padding: 0 16px;
}

.grid tbody tr {
    border-bottom: 1px solid rgba(var(--default-color), 0.1);
    transition-duration: 0.1s;
}

.grid tbody tr:last-child {
    border-bottom: none;
}

.grid tbody tr:hover {
    background: rgba(255, 255, 255, 0.02);
    transition-duration: 0.1s;
}

.grid.is-selectable tbody tr.selected {
    background: #d5eaf8;
}

.grid tbody tr.empty-row {
    visibility: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

.grid tbody tr.empty-row:last-child {
    border-bottom: none;
}

.grid tbody tr td.fit-width {
    width: 1px;
    white-space: nowrap;
}

.pagination-hidden {
    visibility: hidden;
    pointer-events: none;
    user-select: none;
}

.pagination {
    padding: 10px 10px;
    color: rgb(var(--default-color));
    border-top: 1px solid var(--grid-border-color);
}

.pagination-wrapper {
    display: flex;
    justify-content: space-between;
}

.pagination > .pagination-wrapper > .page-controls {
    display: flex;
}

.pagination > .pagination-wrapper > .page-controls > .current-page {
    padding: 0 10px;
}

.pagination > .pagination-wrapper > .page-controls > .page-control-button {
    color: rgb(var(--default-color), 0.4);
    padding: 0 3px;
    margin: 0 10px;
    cursor: pointer;
    transition-duration: 0.1s;
}

.pagination
    > .pagination-wrapper
    > .page-controls
    > .page-control-button:hover {
    color: rgb(var(--default-color), 0.2);
    transition-duration: 0.1s;
}

.grid tbody tr.loading-row {
    border-bottom: none;
}

.grid tbody tr.loading-row td {
    padding: 10px 0;
}
</style>
