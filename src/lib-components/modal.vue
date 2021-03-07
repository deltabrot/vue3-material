<template>
    <teleport to="#app-theme">
        <div class="modal">
            <div class="modal-pane" :class="{ 'modal-visible': isVisible }">
                <div class="modal-header">
                    <div class="modal-title">
                        {{ props.title }}
                    </div>
                    <vm-action-button
                        class="exit"
                        background="rgba(0,0,0,0)"
                        :elevation="0"
                        icon="fal fa-times"
                        :isSmall="true"
                        @click="hide"
                    ></vm-action-button>
                </div>
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
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

export default defineComponent({
    components: {
        VmActionButton,
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

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    background: rgba(255, 255, 255, 0.08);
    font-size: 1.1rem;
    color: #fff;
}

.modal-header .modal-title {
    margin-left: 15px;
}

.modal-header .exit {
    margin-right: 5px;
}

.modal-content {
    padding: 15px 20px;
    height: 100%;
    overflow-y: auto;
}

.modal-pane {
    position: relative;
    z-index: 1000;
    overflow: hidden;
    border-radius: 3px;
    min-width: 400px;
    width: 600px;
    max-width: 600px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    background: #333;
    opacity: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 2;
    transform: scale(0.8);
    transition-duration: 0.2s;
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
    transition-duration: 0.2s;
}

.modal-visible {
    transform: scale(1);
}

.modal-background-visible,
.modal-visible {
    opacity: 1;
    pointer-events: all;
    transition-duration: 0.2s;
}
</style>
