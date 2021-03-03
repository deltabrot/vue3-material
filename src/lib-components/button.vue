<template>
    <button
        class="btn-ripple"
        :class="[
            { 'btn-ripple-uppercase': !props.preventUppercase },
            `btn-${type}`,
        ]"
        :style="cssProperties"
        @mousedown="createRipple"
        :type="isSubmit ? 'submit' : 'button'"
        ref="btnRipple"
    >
        <div class="btn-overlay"></div>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    props: {
        type: {
            type: String,
            validator: (prop: string) =>
                ['contained', 'outlined', 'text'].includes(prop),
            default: 'contained',
        },
        isSubmit: {
            type: Boolean,
            default: false,
        },
        background: {
            type: String,
            default: 'rgb(98, 0, 238)',
        },
        color: {
            type: String,
            default: '#ffffff',
        },
        elevation: {
            type: Number,
            default: 2,
        },
        preventUppercase: {
            type: Boolean,
            default: false,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // refs
        const btnRipple = ref<null | HTMLElement>(null);

        const toRgba = (() => {
            if (props.type === 'contained') {
                return () => {
                    return '255, 255, 255';
                };
            }
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.width = 1;
            canvas.height = 1;

            return (color: string) => {
                if (!context) {
                    return '255, 255, 255';
                }

                context.fillStyle = color;
                context.fillRect(0, 0, 1, 1);

                var data = context.getImageData(0, 0, 1, 1).data;

                return `${data[0]}, ${data[1]}, ${data[2]}`;
            };
        })();

        // computed
        const cssProperties = computed(() => {
            return (
                `--background: ${props.background};` +
                `--color: ${props.color};` +
                `--primary-color: ${toRgba(props.background)};` +
                `--default-elevation: var(--elevation-${props.elevation});` +
                `--focus-elevation: var(--elevation-${props.elevation + 2});` +
                `--active-elevation: var(--elevation-${props.elevation + 6});`
            );
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

                if (btnRipple.value) {
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
            btnRipple,
            cssProperties,
        };
    },
});
</script>

<style scoped>
/* contained */
.btn-contained {
    color: var(--color);
    background: var(--background);
    box-shadow: var(--default-elevation);
    border: 0;
    padding: 10px 16px;
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

.btn-contained:hover .btn-overlay {
    background: rgba(255, 255, 255, 0.05);
}

.btn-contained:focus .btn-overlay {
    background: rgba(255, 255, 255, 0.15);
}

/* outlined and text */
.btn-outlined {
    background: none;
    color: var(--background);
    border: 1px solid var(--background);
    padding: 10px 15px;
}

.btn-text {
    background: none;
    color: var(--background);
    border: 0;
    padding: 10px 16px;
}

.btn-text:hover,
.btn-outlined:hover {
    background: rgba(var(--primary-color), 0.1);
}

.btn-text:focus,
.btn-outlined:focus {
    background: rgba(var(--primary-color), 0.2);
}

/* content */
.content {
    z-index: 10;
}

/* ripple */
.btn-ripple {
    font-family: 'Roboto', sans-serif;
    user-select: none;
    display: inline-flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    font-size: 0.88rem;
    font-weight: 500;
    letter-spacing: 1.25px;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    transition: background 100ms, box-shadow 300ms;
}

.btn-contained:hover,
.btn-contained:focus {
    box-shadow: var(--focus-elevation);
}

.btn-contained:active:hover {
    box-shadow: var(--active-elevation);
}

.btn-ripple-uppercase {
    text-transform: uppercase;
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
    background-color: rgba(var(--primary-color), 0);
    box-shadow: 0 0 5px 5px rgba(var(--primary-color), var(--visible-opacity));
    animation: ripple 450ms ease-in;
    transform: scale(4);
    transition: background-color 0.2s;
}

.btn-ripple:active:hover span.ripple {
    background-color: rgba(
        var(--primary-color),
        var(--visible-opacity)
    ) !important;
}

@keyframes ripple {
    0% {
        background-color: rgba(var(--primary-color), var(--visible-opacity));
        transform: scale(0);
    }
    66% {
        background-color: rgba(var(--primary-color), var(--visible-opacity));
        transform: scale(4);
    }
    100% {
        background-color: rgba(var(--primary-color), 0);
    }
}
</style>
