<template>
    <vm-navigation-drawer>
        <router-link
            class="link"
            :class="{
                selected: route.path === `/components/${component.name}`,
            }"
            v-for="(component, i) in components"
            :to="`/components/${component.name}`"
        >
            {{ component.title }}
        </router-link>
    </vm-navigation-drawer>
    <vm-container style="flex: 1; margin: 30px 0; min-width: 1px;">
        <component-page
            :componentName="config.componentName"
            :componentDescription="config.componentDescription"
            :componentUsage="config.componentUsage"
            :propInfo="config.propInfo"
            :examples="config.examples"
        ></component-page>
    </vm-container>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// components
import ComponentPage from './component-page.vue';

export default defineComponent({
    components: {
        ComponentPage,
    },
    setup() {
        // hooks
        const route = useRoute();

        // properties
        const config = ref({});
        const components = [
            { title: 'App Bar', name: 'app-bar' },
            { title: 'Button', name: 'button' },
            { title: 'Card', name: 'card' },
            { title: 'Container', name: 'container' },
            { title: 'Divider', name: 'divider' },
            { title: 'Dropdown', name: 'dropdown' },
            { title: 'Grid', name: 'grid' },
            { title: 'Loading Spinner', name: 'loading-spinner' },
            { title: 'Modal', name: 'modal' },
            { title: 'Navigation Drawer', name: 'navigation-drawer' },
            { title: 'Page Header', name: 'page-header' },
            { title: 'Switch', name: 'switch' },
            { title: 'Text Field', name: 'text-field' },
            { title: 'Theme', name: 'theme' },
        ];

        const updateConfig = () => {
            import(`../examples/${route.params.config}`).then((res: any) => {
                config.value = res.default;
            });
        };

        updateConfig();

        // watcher
        watch(
            () => route.params.config,
            () => {
                updateConfig();
            },
        );

        return {
            route,
            config,
            components,
        };
    },
});
</script>

<style scoped>
.link {
    display: flex;
    white-space: nowrap;
    padding: 16px 0;
    color: rgba(var(--default-color), 0.5);
    cursor: pointer;
    transition-duration: 0.1s;
    text-decoration: none;
}

.link:hover {
    color: #007bff;
    transition-duration: 0.1s;
}

.selected {
    color: #007bff;
    font-weight: 500;
}
</style>
