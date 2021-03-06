export default {
    componentName: 'Switch',
    componentDescription: 'A switch component which replicates checkbox functionality.',
    componentUsage: '<vm-switch></vm-switch>',
    propInfo: [
        {
            name: 'id',
            type: 'string',
            description: 'The id attribute to assign to the input field.',
            default: '',
        },
        {
            name: 'v-model',
            type: 'boolean',
            description: 'A ref() object to bind the switch to.',
            default: 'N/A',
        },
        {
            name: 'label',
            type: 'string',
            description: 'A label to associate with the switch.',
            default: '',
        },
    ],
    examples: [
        {
            title: 'Switch',
            description: 'A switch which can be toggled on/off.',
            innerHtml: ``,
            component: 'vm-switch',
            props: {},
        },
        {
            title: 'Switch with a label',
            description: 'A switch which can be toggled on/off with a label.',
            innerHtml: ``,
            component: 'vm-switch',
            props: { label: 'Example label' },
        },
    ],
};
