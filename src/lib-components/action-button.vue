<template>
    <button
        class="vm-action-btn"
        :class="{ small: isSmall }"
        :style="cssProperties"
        :type="type"
    >
        <vm-ripple :rippleColor="props.accentColor">
            <div class="btn-overlay"></div>
            <div class="content">
                <i :class="props.icon"></i>
                <div class="label-text" v-if="props.label">{{ props.label }}</div>
            </div>
        </vm-ripple>
    </button>
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
        icon: {
            type: String,
            default: 'fal fa-coffee',
        },
        label: {
            type: String,
            default: '',
        },
        isSmall: {
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
            default: 1,
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        // computed
        const cssProperties = computed(() => {
            let css =
                `--primary-color: ${props.primaryColor};` +
                `--text-color: ${props.accentColor};`;

            if (!props.label) {
                css += `--ab-width: var(--size);` + `--ab-padding: 0;`;
            }

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
.vm-action-btn {
    --size: 45px;
    --ab-padding: 16px;
    width: var(--ab-width);
    height: var(--size);
    min-width: var(--ab-width);
    min-height: var(--size);
    max-width: var(--ab-width);
    max-height: var(--size);
    user-select: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: var(--text-color);
    background: var(--primary-color);
    font-size: 1.6rem;
    outline: 0;
    border: 0;
    border-radius: calc(var(--size) / 2);
    box-shadow: var(--elevation-shadow);
    padding: 0 var(--ab-padding);
    cursor: pointer;
    box-shadow: var(--default-elevation);
    transition: background 100ms, box-shadow 300ms;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    letter-spacing: 1.25px;
}

.label-text {
    font-size: 0.88rem;
}

.vm-action-btn:hover,
.vm-action-btn:focus {
    box-shadow: var(--focus-elevation);
}

.vm-action-btn:active:focus {
    box-shadow: var(--active-elevation);
}

.vm-action-btn:hover .btn-overlay {
    background: rgba(255, 255, 255, 0.05);
}

.vm-action-btn:focus .btn-overlay {
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

.content {
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>
