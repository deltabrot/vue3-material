<template>
    <div class="date-picker" :class="'date-picker-' + props.variant">
        <input
            class="date-picker-input"
            type="date"
            ref="datePicker"
            :value="modelValue"
            @input="updateValue"
        />
        <div class="date-picker-left"></div>
        <div
            class="date-picker-notch date-picker-notch-filled"
        >
            <div
                class="date-picker-label"
                :class="{ 'date-picker-label-filled': isInputFilled }"
            >
                {{ props.label }}
            </div>
        </div>
        <div class="date-picker-right"></div>
    </div>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: [String, Number],
        },
        variant: {
            type: String,
            validator: (prop: string) => ['filled', 'outlined'].includes(prop),
            default: 'filled',
        },
        label: {
            type: String,
            default: 'Default',
        },
    },
    // eslint-disable-next-line
    setup(props: any, context: any) {
        // refs
        const datePicker = ref<null | HTMLInputElement>(null);

        // methods
        const updateValue = (e: InputEvent) => {
            const val = (e.target as HTMLInputElement).value;
            context.emit('update:modelValue', val);
        };

        return {
            props,
            datePicker,
            updateValue,
        };
    },
});
</script>

<style scoped>
.date-picker {
    --font-size: 1rem;
    --label-padding: 6px;
    --horizontal-padding: 16px;
    --border: 1px solid rgba(var(--default-color), 0.42);
    --height: calc(
        var(--font-size) + (var(--padding-top) + var(--padding-bottom)) + 2px
    );
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.date-picker-filled {
    --padding-top: 24px;
    --padding-bottom: calc(38px - var(--padding-top));
    transition: background 0.2s;
}

.date-picker-filled:hover {
    --padding-bottom: calc(38px - var(--padding-top));
}

.date-picker-outlined {
    --padding-top: 18px;
    --padding-bottom: 18px;
}

.date-picker-outlined:hover .date-picker-left,
.date-picker-outlined:hover .date-picker-notch,
.date-picker-outlined:hover .date-picker-right {
    --border: 1px solid rgba(var(--default-color), 0.87);
}

.date-picker-filled .date-picker-left,
.date-picker-filled .date-picker-notch,
.date-picker-filled .date-picker-right {
    background: rgba(var(--default-color), 0.03);
}

.date-picker-filled:hover .date-picker-left,
.date-picker-filled:hover .date-picker-notch,
.date-picker-filled:hover .date-picker-right {
    background: rgba(var(--default-color), 0.06);
    --border: 1px solid rgba(var(--default-color), 0.87);
}

.date-picker-left,
.date-picker-notch,
.date-picker-right {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}

.date-picker-left,
.date-picker-right {
    min-height: var(--height);
    max-height: var(--height);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
}

.date-picker-notch {
    min-height: var(--height);
    max-height: var(--height);
    padding-top: 18px;
    padding-bottom: 18px;
}

.date-picker-left {
    border-bottom: var(--border);
    padding-left: calc(var(--horizontal-padding) - var(--label-padding));
    border-top-left-radius: 4px;
}

.date-picker-outlined .date-picker-left {
    border: var(--border);
    border-right: none;
    border-bottom-left-radius: 4px;
}

.date-picker-notch {
    display: flex;
    align-items: center;
    border-bottom: var(--border);
}

.date-picker-outlined .date-picker-notch {
    border-top: var(--border);
}

.date-picker-right {
    border-bottom: var(--border);
    width: 100%;
    border-top-right-radius: 4px;
}

.date-picker-outlined .date-picker-right {
    border: var(--border);
    border-left: none;
    border-bottom-right-radius: 4px;
}

.date-picker input {
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

.date-picker-label {
    flex: 1;
    padding: 0 6px;
    color: rgba(var(--default-color), 0.6);
    transition-duration: 0.2s;
    white-space: nowrap;
    font-size: var(--font-size);
}

.date-picker-notch,
.date-picker-outlined .date-picker-notch-filled {
    border-top: none;
}

.date-picker-filled .date-picker-notch .date-picker-label,
.date-picker-filled .date-picker-label-filled {
    transform: translateY(calc((-1 / 4) * var(--height)));
    font-size: 0.8rem;
}

.date-picker-outlined .date-picker-notch .date-picker-label,
.date-picker-outlined .date-picker-label-filled {
    transform: translateY(calc((-1 / 2) * var(--height)));
    font-size: 0.8rem;
}

.date-picker-filled input:focus ~ .date-picker-left,
.date-picker-filled input:focus ~ .date-picker-notch,
.date-picker-filled input:focus ~ .date-picker-right {
    background: rgba(var(--default-color), 0.1);
}

input:focus ~ .date-picker-left,
input:focus ~ .date-picker-notch,
input:focus ~ .date-picker-right {
    border-color: #4c77d6;
}

input:focus ~ .date-picker-notch .date-picker-label {
    color: #4c77d6;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgb(var(--default-color));
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
}
</style>
