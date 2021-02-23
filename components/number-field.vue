<template>
    <div class="text-field">
        <input
            class="text-field-input"
            type="text"
            ref="textField"
            :value="modelValue"
            @input="updateValue"
        />
        <div class="text-field-left"></div>
        <div
            class="text-field-notch"
            :class="{ 'text-field-notch-filled': isInputFilled }"
        >
            <div
                class="text-field-label"
                :class="{ 'text-field-label-filled': isInputFilled }"
            >
                {{ props.label }}
            </div>
        </div>
        <div class="text-field-right"></div>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: Number,
            default: 0,
            required: true,
        },
        label: {
            type: String,
            default: 'Default',
        },
    },
    // eslint-disable-next-line
    setup(props: any, context: any) {
        // refs
        const textField = ref<null | HTMLElement>(null);

        // computed
        const isInputFilled = computed(() => {
            return (props.modelValue + '').length > 0;
        });

        // methods
        const updateValue = (e: InputEvent) => {
            const val = (e.target as HTMLInputElement).value;
            try {
                parseInt(val);
                context.emit('update:modelValue', val);
            } catch (e) {
                window.console.log(e);
            }
        };

        return {
            props,
            isInputFilled,
            textField,
            updateValue,
        };
    },
});
</script>

<style scoped>
.text-field {
    --font-size: 1.1rem;
    --label-padding: 6px;
    --horizontal-padding: 16px;
    --vertical-padding: 16px;
    --border: 1px solid rgba(255, 255, 255, 0.3);
    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.text-field-left,
.text-field-notch,
.text-field-right {
    min-height: var(--height);
    max-height: var(--height);
    padding: var(--vertical-padding) 0;
}

.text-field-left {
    padding-left: calc(var(--horizontal-padding) - var(--label-padding));
    border: var(--border);
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.text-field-notch {
    display: flex;
    align-items: center;
    padding: var(--vertical-padding) 0;
    border-top: var(--border);
    border-bottom: var(--border);
}

.text-field-right {
    width: 100%;
    border: var(--border);
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.text-field input {
    flex: 1;
    position: absolute;
    padding: var(--vertical-padding) var(--horizontal-padding);
    outline: none;
    border: none;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-size: var(--font-size);
    width: 100%;
}

.text-field-label {
    flex: 1;
    padding: 0 6px;
    color: #aaa;
    transition-duration: 0.2s;
    white-space: nowrap;
    font-size: var(--font-size);
}

input:focus ~ .text-field-notch,
.text-field-notch-filled {
    border-top: none;
}

input:focus ~ .text-field-notch .text-field-label,
.text-field-label-filled {
    transform: translateY(calc((-1 / 2) * var(--height)));
    font-size: 0.8rem;
}

input:focus ~ .text-field-left,
input:focus ~ .text-field-notch,
input:focus ~ .text-field-right {
    border-color: #2c60d1;
}

input:focus ~ .text-field-notch .text-field-label {
    color: #82a4ed;
}
</style>
