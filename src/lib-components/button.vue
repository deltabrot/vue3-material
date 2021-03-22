<template>
    <component
        class="vm-btn"
        :class="[`btn-${props.variant}`, { disabled: isDisabled }]"
        :style="cssProperties"
        :type="props.type"
        :to="routerPath"
        :is="routerPath ? 'router-link' : 'button'"
    >
        <div class="btn-overlay"></div>
        <vm-ripple
            :rippleColor="
                props.variant !== 'contained'
                    ? props.primaryColor
                    : props.accentColor
            "
        >
            <slot></slot>
        </vm-ripple>
    </component>
</template>

<script lang="ts">
// vue
import { defineComponent, computed } from 'vue';

// components
import VmRipple from './ripple.vue';

export default defineComponent({
    components: {
        VmRipple,
    },
    props: {
        type: {
            type: String,
            default: 'button',
        },
        variant: {
            type: String,
            validator: (prop: string) =>
                ['contained', 'outlined', 'text'].includes(prop),
            default: 'contained',
        },
        routerPath: {
            type: String,
            default: '',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        primaryColor: {
            type: String,
            default: 'rgb(98, 0, 238)',
        },
        accentColor: {
            type: String,
            default: 'rgb(255, 255, 255)',
        },
        elevation: {
            type: Number,
            default: 2,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // computed
        const cssProperties = computed(() => {
            let css =
                `--primary-color: ${props.primaryColor};` +
                `--text-color: ${props.accentColor};`;

            if (props.elevation !== null) {
                css +=
                    `--default-elevation: var(--elevation-${props.elevation});` +
                    `--focus-elevation: var(--elevation-${props.elevation +
                        2});` +
                    `--active-elevation: var(--elevation-${props.elevation +
                        6});`;
            }
            return css;
        });

        return {
            props,
            cssProperties,
        };
    },
});
</script>

<style scoped>
/* contained */
.btn-contained {
    color: var(--text-color);
    background: var(--primary-color);
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
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 10px 15px;
}

.btn-text {
    background: none;
    color: var(--primary-color);
    border: 0;
    padding: 10px 16px;
}

.btn-text .btn-overlay,
.btn-outlined .btn-overlay {
    opacity: 0.1;
}

.btn-text:hover .btn-overlay,
.btn-outlined:hover .btn-overlay {
    background: var(--primary-color);
}

.btn-text:focus .btn-overlay,
.btn-outlined:focus .btn-overlay {
    background: var(--primary-color);
    opacity: 0.2;
}

.vm-btn {
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
    text-decoration: none;
    transition: background 100ms, box-shadow 300ms;
}

.btn-contained:hover,
.btn-contained:focus {
    box-shadow: var(--focus-elevation);
}

.btn-contained:active:hover {
    box-shadow: var(--active-elevation);
}

.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
