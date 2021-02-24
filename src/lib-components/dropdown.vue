<template>
    <div class="dropdown">
        <select
            class="dropdown-field"
            :class="{ 'default-option': !isInputFilled }"
            ref="dropdownField"
            :value="modelValue"
            @input="updateValue"
        >
            <option class="default-option-text" :value="0">{{
                props.placeholder
            }}</option>
            <option
                v-for="(option, i) in sortedOptions"
                :key="i"
                :value="option[props.value]"
            >
                {{ option[props.title] }}
            </option>
        </select>
        <div class="dropdown-left"></div>
        <div class="dropdown-notch">
            <div class="dropdown-label">
                {{ props.label }}
            </div>
        </div>
        <div class="dropdown-right"></div>
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
        },
        label: {
            type: String,
            default: 'Default',
        },
        placeholder: {
            type: String,
            default: 'Select an option',
        },
        options: {
            type: Array,
            default: () => {
                return [];
            },
        },
        value: {
            type: String,
            default: 'id',
        },
        title: {
            type: String,
            default: 'title',
        },
        sort: {
            type: Function,
            default: () => {
                return true;
            },
        },
    },
    // eslint-disable-next-line
    setup(props: any, context: any) {
        // refs
        const dropdownField = ref<null | HTMLElement>(null);

        // computed
        const isInputFilled = computed(() => {
            return props.modelValue > 0;
        });

        const sortedOptions = computed(() => {
            const tmpArray = [...props.options];
            return tmpArray.sort(props.sort);
        });

        // methods
        const updateValue = (e: InputEvent) => {
            const val = parseInt((e.target as HTMLInputElement).value);
            context.emit('update:modelValue', val);
        };

        return {
            props,
            sortedOptions,
            isInputFilled,
            dropdownField,
            updateValue,
        };
    },
});
</script>

<style scoped>
.dropdown {
    --font-size: 1.1rem;
    --label-padding: 6px;
    --horizontal-padding: 16px;
    --vertical-padding: 16px;
    --border: 1px solid rgba(255, 255, 255, 0.3);
    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);
    display: flex;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0);
    position: relative;
    color: #fff;
}

.dropdown-left,
.dropdown-notch,
.dropdown-right {
    min-height: var(--height);
    max-height: var(--height);
    padding: var(--vertical-padding) 0;
}

.dropdown-left {
    padding-left: calc(var(--horizontal-padding) - var(--label-padding));
    border: var(--border);
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.dropdown-notch {
    display: flex;
    align-items: center;
    padding: var(--vertical-padding) 0;
    border-bottom: var(--border);
}

.dropdown-right {
    width: 100%;
    border: var(--border);
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.dropdown-field {
    flex: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 1.1rem;
    border: none;
    padding: 0 calc(var(--horizontal-padding) - 4px);
    background: rgba(255, 255, 255, 0);
    color: #fff;
    margin-right: var(--horizontal-padding);
}

.dropdown-label {
    flex: 1;
    padding: 0 6px;
    color: #aaa;
    transition-duration: 0.2s;
    transform: translateY(calc((-1 / 2) * var(--height)));
    font-size: 0.8rem;
    white-space: nowrap;
}

.dropdown-field option {
    color: #000;
}

.default-option {
    color: #aaa;
}

.dropdown-field option.default-option-text {
    color: #777;
}

.dropdown-field:focus ~ .dropdown-left,
.dropdown-field:focus ~ .dropdown-notch,
.dropdown-field:focus ~ .dropdown-right {
    border-color: #2c60d1;
}

.dropdown-field:focus ~ .dropdown-notch .dropdown-label {
    color: #82a4ed;
}
</style>
