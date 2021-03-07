<template>
    <vm-page-header style="font-size: 1.8rem;">
        Examples
    </vm-page-header>
    <div class="example" v-for="(example, i) in props.examples" :key="i">
        <vm-divider v-if="i !== 0"></vm-divider>
        <div class="example-title">{{ example.title }}</div>
        <div class="example-description">{{ example.description }}</div>
        <div class="example-result-title">Implementation</div>
        <pre
            class="code-block"
        ><code>&lt;{{example.component}}{{attributes(example.props)}}&gt;{{ example.innerHtml ? '\n' + example.innerHtml + '\n' : '' }}&lt;/{{example.component}}&gt;</code></pre>
        <div class="example-result-title">Interactive result</div>
        <div class="example-result">
            <component :is="example.component" v-bind="example.props">{{
                example.innerHtml
            }}</component>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        examples: {
            type: Array,
            default: [],
        },
    },
    setup(props: any) {
        const attributes = (props: any) => {
            const keys = Object.keys(props);
            const values = Object.values(props);

            let attrs = '';
            for (let i = 0; i < keys.length; i++) {
                attrs += `
    ${typeof values[i] === 'string' ? '' : ':'}${keys[i]}="${values[i]}"`;
            }
            if (attrs) {
                attrs += '\n';
            }
            return attrs;
        };

        return {
            props,
            attributes,
        };
    },
});
</script>

<style scoped>
.example-title {
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 15px;
}

.example-description {
}

.example-result-title {
    font-weight: 500;
    padding-bottom: 5px;
    padding-top: 30px;
}

.example-result {
    background: rgba(var(--default-color), 0.03);
    border: 1px solid rgba(var(--default-color), 0.1);
    padding: 32px 16px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    flex: 1;
}
</style>
