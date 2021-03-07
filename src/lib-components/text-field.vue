<template>
    <div class="text-field" :class="'text-field-' + props.variant">
        <input
            class="text-field-input"
            :type="isPassword ? 'password' : 'text'"
            ref="textField"
            :value="modelValue"
            @input="updateValue"
            v-if="modelValue !== undefined"
        />
        <input
            class="text-field-input"
            :type="isPassword ? 'password' : 'text2'"
            ref="textField"
            @input="updateValue"
            v-if="modelValue === undefined"
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: String,
        },
        variant: {
            type: String,
            default: 'filled',
        },
        label: {
            type: String,
            default: 'Default',
        },
        isPassword: {
            type: Boolean,
            default: false,
        },
    },
    // eslint-disable-next-line
    setup(props: any, context: any) {
        // refs
        const textField = ref<null | HTMLInputElement>(null);

        // computed
        const isInputFilled = ref(false);

        // methods
        const updateValue = (e: InputEvent) => {
            if (textField.value) {
                isInputFilled.value = textField.value.value.length > 0;
            }

            if (props.modelValue !== undefined) {
                const val = (e.target as HTMLInputElement).value;
                context.emit('update:modelValue', val);
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
    --font-size: 1rem;
    --label-padding: 6px;
    --horizontal-padding: 16px;
    --border: 1px solid rgba(var(--default-color), 0.42);
    --height: calc(var(--font-size) + (var(--padding-top) + var(--padding-bottom)) + 2px);
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.text-field-filled {
    --padding-top: 24px;
    --padding-bottom: calc(38px - var(--padding-top));
    transition: background 0.2s;
}

.text-field-filled:hover {
    --padding-bottom: calc(38px - var(--padding-top));
}

.text-field-outlined {
    --padding-top: 18px;
    --padding-bottom: 18px;
}

.text-field-outlined:hover .text-field-left,
.text-field-outlined:hover .text-field-notch,
.text-field-outlined:hover .text-field-right {
    --border: 1px solid rgba(var(--default-color), 0.87);
}

.text-field-filled .text-field-left,
.text-field-filled .text-field-notch,
.text-field-filled .text-field-right {
    background: rgba(var(--default-color), 0.03);
}

.text-field-filled:hover .text-field-left,
.text-field-filled:hover .text-field-notch,
.text-field-filled:hover .text-field-right {
    background: rgba(var(--default-color), 0.06);
    --border: 1px solid rgba(var(--default-color), 0.87);
}

.text-field-left,
.text-field-notch,
.text-field-right {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}

.text-field-left,
.text-field-right {
    min-height: var(--height);
    max-height: var(--height);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
}

.text-field-notch {
    min-height: var(--height);
    max-height: var(--height);
    padding-top: 18px;
    padding-bottom: 18px;
}

.text-field-left {
    border-bottom: var(--border);
    padding-left: calc(var(--horizontal-padding) - var(--label-padding));
    border-top-left-radius: 4px;
}

.text-field-outlined .text-field-left {
    border: var(--border);
    border-right: none;
    border-bottom-left-radius: 4px;
}

.text-field-notch {
    display: flex;
    align-items: center;
    border-bottom: var(--border);
}

.text-field-outlined .text-field-notch {
    border-top: var(--border);
}

.text-field-right {
    border-bottom: var(--border);
    width: 100%;
    border-top-right-radius: 4px;
}

.text-field-outlined .text-field-right {
    border: var(--border);
    border-left: none;
    border-bottom-right-radius: 4px;
}

.text-field input {
    flex: 1;
    position: absolute;
    padding: 0 var(--horizontal-padding);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
    outline: none;
    border: none;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0);
    color: var(--default-color);
    font-size: var(--font-size);
    width: 100%;
}

.text-field-label {
    flex: 1;
    padding: 0 6px;
    color: rgba(var(--default-color), 0.6);
    transition-duration: 0.2s;
    white-space: nowrap;
    font-size: var(--font-size);
}

.text-field-outlined input:focus ~ .text-field-notch,
.text-field-outlined .text-field-notch-filled {
    border-top: none;
}

.text-field-filled input:focus ~ .text-field-notch .text-field-label,
.text-field-filled .text-field-label-filled {
    transform: translateY(calc((-1 / 4) * var(--height)));
    font-size: 0.8rem;
}

.text-field-outlined input:focus ~ .text-field-notch .text-field-label,
.text-field-outlined .text-field-label-filled {
    transform: translateY(calc((-1 / 2) * var(--height)));
    font-size: 0.8rem;
}

.text-field-filled input:focus ~ .text-field-left,
.text-field-filled input:focus ~ .text-field-notch,
.text-field-filled input:focus ~ .text-field-right {
    background: rgba(var(--default-color), 0.1);
}

input:focus ~ .text-field-left,
input:focus ~ .text-field-notch,
input:focus ~ .text-field-right {
    border-color: #2c60d1;
}

input:focus ~ .text-field-notch .text-field-label {
    color: #2c60d1;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgb(var(--default-color));
}
</style>
