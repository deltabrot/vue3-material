export default {
    componentName: 'Text Field',
    componentDescription: 'A text field for retrieving user input.',
    componentUsage: '<vm-text-field></vm-text-field>',
    propInfo: [
        {
            name: 'v-model',
            type: 'boolean',
            description: 'A ref() object to bind the text-field to.',
            default: 'N/A',
        },
        {
            name: 'label',
            type: 'string',
            description: 'A label to associate with the text field.',
            default: 'Default',
        },
        {
            name: 'isPassword',
            type: 'boolean',
            description: 'When true, will hide the input.',
            default: 'false',
        },
    ],
    examples: [
        {
            title: 'Text field',
            description: 'A text-field which can be toggled on/off.',
            innerHtml: ``,
            component: 'vm-text-field',
            props: {},
        },
        {
            title: 'Text field with custom label',
            description: 'A text-field which can be toggled on/off.',
            innerHtml: ``,
            component: 'vm-text-field',
            props: { label: 'Custom field name' },
        },
        {
            title: 'Outlined text field with custom label',
            description: 'A text-field which can be toggled on/off.',
            innerHtml: ``,
            component: 'vm-text-field',
            props: { label: 'Custom field name', variety: 'outlined' },
        },
    ],
};
