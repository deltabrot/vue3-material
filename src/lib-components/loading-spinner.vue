<template>
    <div class="loading-spinner-container">
        <span class="hidden-dash">-</span>
        <div class="loading-spinner" ref="loadingSpinner">
            <div class="lds-dual-ring"></div>
        </div>
        <span class="hidden-dash">-</span>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    props: {
        scale: {
            type: Number,
            default: 1,
        },
        color: {
            type: String,
            default: 'rgb(145 201 82)',
        },
        ringWidth: {
            type: Number,
            default: 6,
        },
        width: {
            type: Number,
            default: 80,
        },
        height: {
            type: Number,
            default: 80,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const loadingSpinner = ref<null | HTMLElement>(null);

        // lifecycle hooks
        onMounted(() => {
            if (loadingSpinner.value) {
                loadingSpinner.value.style.setProperty(
                    '--spinner-scale',
                    props.scale + '',
                );
                loadingSpinner.value.style.setProperty(
                    '--spinner-color',
                    props.color,
                );
                loadingSpinner.value.style.setProperty(
                    '--ring-width',
                    props.ringWidth * props.scale + 'px',
                );
                loadingSpinner.value.style.setProperty(
                    '--width',
                    props.width * props.scale + 'px',
                );
                loadingSpinner.value.style.setProperty(
                    '--height',
                    props.height * props.scale + 'px',
                );
            }
        });

        return {
            loadingSpinner,
        };
    },
});
</script>

<style scoped>
.loading-spinner-container {
    display: flex;
    align-items: center;
}

.loading-spinner {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--width);
    height: var(--height);
    min-width: var(--width);
    min-height: var(--height);
    overflow: hidden;
}

.lds-dual-ring {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--width);
    height: var(--height);
    min-width: var(--width);
    min-height: var(--height);
}

.lds-dual-ring:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: var(--ring-width) solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
}

.lds-dual-ring:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: var(--ring-width) solid var(--spinner-color);
    border-color: var(--spinner-color) transparent transparent transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    box-sizing: border-box;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.hidden-dash {
    user-select: none;
    color: rgba(0, 0, 0, 0);
}
</style>
