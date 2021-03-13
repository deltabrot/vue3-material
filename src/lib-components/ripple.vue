<template>
    <div
        class="ripple-effect"
        :style="cssProperties"
        @mousedown="createRipple"
        ref="rippleEffect"
    ></div>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    props: {
        rippleColor: {
            type: String,
            default: 'rgb(255, 255, 255)',
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const rippleEffect = ref<null | HTMLElement>(null);

        // computed
        const cssProperties = computed(() => {
            return `--ripple-color: ${props.rippleColor};`;
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

                if (rippleEffect.value) {
                    const ripple = button.getElementsByClassName('ripple')[0];
                    if (ripple) {
                        ripple.remove();
                    }
                }

                button.appendChild(circle);
            }
        };

        return {
            props,
            createRipple,
            rippleEffect,
            cssProperties,
        };
    },
});
</script>

<style scoped>
/* ripple */
.ripple-effect {
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    text-decoration: none;
    flex: 1;
    width: 100%;
    height: 100%;
    transition: background 100ms, box-shadow 300ms;
}

.content {
    z-index: 10;
    pointer-events: none;
}
</style>

<style>
span.ripple {
    --visible-opacity: 0.2;
    pointer-events: none;
    display: flex;
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0 0 5px 5px var(--ripple-color);
    animation: ripple 450ms ease-in;
    transform: scale(4);
    transition: background-color 0.2s;
    opacity: 0.2;
}

.ripple-effect:active:hover span.ripple {
    background-color: var(--ripple-color) !important;
}

@keyframes ripple {
    0% {
        background-color: var(--ripple-color);
        transform: scale(0);
    }
    66% {
        background-color: var(--ripple-color);
        transform: scale(4);
    }
    100% {
        background-color: rgba(255, 255, 255, 0);
    }
}
</style>
