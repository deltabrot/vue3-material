<template>
    <button
        class="btn-ripple"
        @mousedown="createRipple"
        :type="type"
        ref="btnRipple"
    >
        <div class="btn-overlay"></div>
        <slot></slot>
    </button>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'button',
        },
        background: {
            type: String,
            default: '#3ca354',
        },
        color: {
            type: String,
            default: '#ffffff',
        },
        elevation: {
            type: Number,
            default: 1,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const btnRipple = ref<null | HTMLElement>(null);

        // lifecycle hooks
        onMounted(() => {
            btnRipple.value?.style.setProperty(
                '--background',
                props.background,
            );

            const elevationShadowColor = props.elevation * 0.5;
            btnRipple.value?.style.setProperty(
                '--elevation-shadow',
                `0 2px 4px rgba(0, 0, 0, ${elevationShadowColor})`,
            );
            btnRipple.value?.style.setProperty('--color', props.color);
        });

        // methods
        const createRipple = (event: PointerEvent) => {
            const button = event.currentTarget as HTMLElement;

            if (button) {
                const circle = document.createElement('span');
                const diameter = Math.max(
                    button.clientWidth,
                    button.clientHeight,
                );
                const radius = diameter / 2;

                circle.style.width = circle.style.height = `${diameter}px`;

                const buttonElement = button.getBoundingClientRect();
                circle.style.left = `
                    ${event.clientX - buttonElement.left - radius}px
                `;
                circle.style.top = `
                    ${event.clientY - buttonElement.top - radius}px
                `;
                circle.classList.add('ripple');

                const ripple = button.getElementsByClassName('ripple')[0];
                if (ripple) {
                    ripple.remove();
                }

                button.appendChild(circle);
            }
        };

        return {
            props,
            createRipple,
            btnRipple,
        };
    },
});
</script>

<style scoped>
.btn-ripple {
    user-select: none;
    display: inline-flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: var(--color);
    background: var(--background);
    padding: 10px 16px;
    font-size: 0.88rem;
    outline: 0;
    border: 0;
    border-radius: 4px;
    box-shadow: var(--elevation-shadow);
    cursor: pointer;
    white-space: nowrap;
}

.btn-ripple:hover .btn-overlay {
    background: rgba(255, 255, 255, 0.05);
}

.btn-ripple:focus .btn-overlay {
    background: rgba(255, 255, 255, 0.1);
}

.btn-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0);
    transition-duration: 0.1s;
}
</style>

<style>
span.ripple {
    display: flex;
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>
