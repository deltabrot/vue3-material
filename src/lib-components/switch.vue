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
    --width: 34px;
    --switch-size: 20px;
    --height: 14px;
    --border-radius: 100px;
    --switch-border-radius: 50%;
    --inner-padding: -1px;

    width: var(--width);
    min-width: var(--width);
    height: var(--height);
    cursor: pointer;
    background-color: #adadad;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    z-index: 1;
}

.slider:before {
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: var(--switch-border-radius);
    content: '';
    width: var(--switch-size);
    height: var(--switch-size);
    left: var(--inner-padding);
    top: calc((var(--height) / 2) - (var(--switch-size) / 2));
    background-color: #fff;
    transition: 0.3s;
    box-shadow: var(--elevation-2);
}

input:checked + .slider {
    background: rgb(177, 127, 247);
    border-radius: inherit;
}

.slider:after {
    --padding: 12px;
    content: '';
    background: rgb(177, 127, 247, 0);
    border-radius: 200px;
    display: flex;
    width: var(--switch-size);
    height: var(--switch-size);
    left: calc(var(--inner-padding) - var(--padding));
    top: calc((var(--height) / 2) - (var(--switch-size) / 2) - var(--padding));
    position: absolute;
    padding: var(--padding);
    pointer-events: none;
    z-index: -1;
    transition: background 0.2s, transform 0.3s;
}

input:hover + .slider:after {
    background: rgb(173, 173, 173, 0.2);
}

input:checked + .slider:after {
    transform: translateX(
        calc(var(--width) - var(--switch-size) - (2 * var(--inner-padding)))
    );
}

input:checked:hover + .slider:after {
    background: rgb(177, 127, 247, 0.2);
}

input:checked ~ .slider:before {
    background: rgb(98, 0, 238);
}

input:focus + .slider {
}

input:checked + .slider:before {
    transform: translateX(
        calc(var(--width) - var(--switch-size) - (2 * var(--inner-padding)))
    );
}

.label {
    margin-left: calc(var(--default-margin) * 3);
}
</style>
