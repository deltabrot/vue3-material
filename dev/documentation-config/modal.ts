export default {
    componentName: 'Button',
    componentDescription:
        'A regular button which can be used to trigger actions or as a router-link.',
    componentUsage: '<vm-button></vm-button>',
    propInfo: [
        {
            name: 'type',
            type: "'contained' | 'outlined' | 'text'",
            description: 'The type of button to render.',
            default: 'contained',
        },
        {
            name: 'isSubmit',
            type: 'boolean',
            description:
                'Whether to treat the button as a submit button for a form.',
            default: 'false',
        },
        {
            name: 'background',
            type: 'string',
            description: 'The primary color of the button.',
            default: 'rgb(98, 0, 238)',
        },
        {
            name: 'color',
            type: 'string',
            description: 'The color of text on the button.',
            default: '#ffffff',
        },
        {
            name: 'elevation',
            type: 'number',
            description: 'Set the elevation level of the button.',
            default: '2',
        },
        {
            name: 'preventUppercase',
            type: 'boolean',
            description: 'Prevent automatic uppercasing of text.',
            default: 'false',
        },
    ],
    examples: [
        {
            title: 'Contained button',
            description: 'A simple button with solid background color.',
            innerHtml: `    Button`,
            component: 'vm-button',
            props: {},
        },
        {
            title: 'Contained button (modified color)',
            description:
                'A simple button with modified solid background color.',
            innerHtml: `    Button`,
            component: 'vm-button',
            props: { background: '#a00' },
        },
        {
            title: 'Outlined button',
            description: 'A simple button with a single pixel border.',
            innerHtml: `    Button`,
            component: 'vm-button',
            props: { type: 'outlined' },
        },
        {
            title: 'Text button',
            description: 'A simple button with no background or border.',
            innerHtml: `    Button`,
            component: 'vm-button',
            props: { type: 'text' },
        },
        {
            title: 'NEW TEST',
            description: 'A simple button with a single pixel border.',
            innerHtml: `    Button`,
            component: 'vm-button',
            props: { background: '#f0f', elevation: 5 },
        },
    ],
};
