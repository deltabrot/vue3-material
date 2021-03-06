<template>
    <vm-navigation-drawer>
        <router-link
            class="link"
            :class="{
                selected: route.path === `/components/${component.name}`,
                disabled: !component.name,
            }"
            v-for="(component, i) in components"
            :to="`/components/${component.name}`"
        >
            {{ component.title }}
            {{ component.name ? '' : '(Incomplete)' }}
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
            { title: 'Container', name: '' },
            { title: 'Divider', name: '' },
            { title: 'Dropdown', name: '' },
            { title: 'Grid', name: '' },
            { title: 'Loading Spinner', name: '' },
            { title: 'Modal', name: '' },
            { title: 'Navigation Drawer', name: '' },
            { title: 'Page Header', name: '' },
            { title: 'Switch', name: 'switch' },
            { title: 'Text Field', name: 'text-field' },
            { title: 'Theme', name: '' },
        ];

        const updateConfig = () => {
            window.scrollTo(0, 0);
            import(`./documentation-config/${route.params.config}`).then(
                (res: any) => {
                    config.value = res.default;
                },
            );
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
    pointer-events: none;
}

.disabled {
    color: rgba(var(--default-color), 0.2);
    pointer-events: none;
}
</style>
