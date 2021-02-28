<template>
    <div class="surface" ref="surface">
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    props: {
        elevation: {
            type: Number,
            default: 1,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const surface = ref<null | HTMLElement>(null);

        // lifecycle hooks
        onMounted(() => {
            if (surface.value) {
                let color = 25 + props.elevation * 10;
                if (color < 0 || color > 255) {
                    color = 255;
                }
                surface.value.style.setProperty(
                    '--elevation',
                    `rgb(${color}, ${color}, ${color})`,
                );
            }
        });

        return {
            surface,
        };
    },
});
</script>

<style scoped>
.surface {
    display: flex;
    flex-direction: column;
    background: var(--elevation);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
