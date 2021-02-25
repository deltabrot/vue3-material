<template>
    <button
        class="btn-ripple"
        :class="{ small: isSmall }"
        @mousedown="createRipple"
        :type="type"
        ref="btnRipple"
    >
        <div class="btn-overlay"></div>
        <i :class="props.icon"></i>
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
        icon: {
            type: String,
            default: 'fal fa-coffee',
        },
        isSmall: {
            type: Boolean,
            default: false,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const btnRipple = ref<null | HTMLElement>(null);

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

        // lifecycle hooks
        onMounted(() => {
            if (btnRipple.value) {
                btnRipple.value.style.setProperty(
                    '--background',
                    props.background,
                );

                const elevationShadowColor = props.elevation * 0.5;
                btnRipple.value.style.setProperty(
                    '--elevation-shadow',
                    `0 2px 4px rgba(0, 0, 0, ${elevationShadowColor})`,
                );
                btnRipple.value.style.setProperty('--color', props.color);
            }
        });

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
    --size: 45px;
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
    min-height: var(--size);
    max-width: var(--size);
    max-height: var(--size);
    user-select: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: var(--color);
    background: var(--background);
    font-size: 1.6rem;
    outline: 0;
    border: 0;
    border-radius: calc(var(--size) / 2);
    box-shadow: var(--elevation-shadow);
    cursor: pointer;
}

.btn-ripple:hover .btn-overlay {
    background: rgba(255, 255, 255, 0.05);
}

.btn-ripple:focus .btn-overlay {
    background: rgba(255, 255, 255, 0.1);
}

.small {
    --size: 35px;
    font-size: 1.4rem;
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
