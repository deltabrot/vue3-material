<template>
    <teleport to="#app-theme">
        <div class="modal">
            <vm-card
                class="modal-pane"
                :class="{ 'modal-visible': isVisible }"
                :elevation="8"
            >
                <div class="modal-content">
                    <slot></slot>
                </div>
            </vm-card>
            <div
                class="modal-background"
                :class="{ 'modal-background-visible': isVisible }"
                @click="hide()"
            ></div>
        </div>
    </teleport>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';

// components
import VmActionButton from './action-button.vue';
import VmCard from './card.vue';

export default defineComponent({
    components: {
        VmActionButton,
        VmCard,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        isPreventClose: {
            type: Boolean,
            default: false,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // properties
        const isVisible = ref(false);

        // methods
        const show = () => {
            isVisible.value = true;
        };

        const hide = () => {
            if (!props.isPreventClose) {
                isVisible.value = false;
            }
        };

        return {
            props,
            isVisible,
            show,
            hide,
        };
    },
});
</script>
<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    pointer-events: none;
}

.modal-content {
    height: 100%;
    overflow-y: auto;
}

.modal-pane {
    position: relative;
    z-index: 1000;
    overflow: hidden;
    border-radius: 3px;
    width: 600px;
    max-width: 600px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    transform: scale(0.8);
    transition: transform 0.2s, opacity 0.2s;
}

.modal-background {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: opacity 0.2s;
}

.modal-visible {
    transform: scale(1);
}

.modal-background-visible,
.modal-visible {
    opacity: 1;
    pointer-events: all;
    transition: transform 0.2s, opacity 0.2s;
}
</style>
