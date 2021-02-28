<template>
    <div class="switch-container">
        <label class="switch">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                @input="updateValue"
            />
            <span class="slider"></span>
        </label>
        <label class="label" v-if="props.label">
            {{ props.label }}
        </label>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        id: {
            type: Number,
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
        },
    },
    // eslint-disable-next-line
    setup(props: any, context: any) {
        // methods
        // eslint-disable-next-line
        const updateValue = (e: any) => {
            context.emit('update:modelValue', e.target.checked);
        };

        return {
            props,
            updateValue,
        };
    },
};
</script>

<style scoped>
.switch-container {
    display: flex;
    align-items: center;
}

.switch {
    --width: 45px;
    --switch-width: 18px;
    --height: 24px;
    --border-radius: 100px;
    --switch-border-radius: 50%;
    --inner-padding: 3px;

    width: var(--width);
    min-width: var(--width);
    height: var(--height);
    cursor: pointer;
    background-color: #999;
    border-radius: var(--border-radius);
    position: relative;
    display: inline-block;
}

.switch input {
    display: none;
}

.slider {
    position: absolute;
    border-radius: inherit;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
}

.slider:before {
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: var(--switch-border-radius);
    content: '';
    height: calc(var(--height) - (2 * var(--inner-padding)));
    width: var(--switch-width);
    left: var(--inner-padding);
    bottom: var(--inner-padding);
    background-color: #555;
    transition: 0.3s;
}

input:checked + .slider {
    background: #3ca354;
    border-radius: inherit;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    transform: translateX(
        calc(var(--width) - var(--switch-width) - (2 * var(--inner-padding)))
    );
}

.label {
    margin-left: var(--default-margin);
}
</style>
