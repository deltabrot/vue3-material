export default {
    componentName: 'Card',
    componentDescription:
        'A card.',
    componentUsage: '<vm-card></vm-card>',
    propInfo: [
        {
            name: 'type',
            type: "'contained' | 'outlined' | 'text'",
            description: 'The type of card to render.',
            default: 'contained',
        },
        {
            name: 'isSubmit',
            type: 'boolean',
            description:
                'Whether to treat the card as a submit card for a form.',
            default: 'false',
        },
        {
            name: 'background',
            type: 'string',
            description: 'The primary color of the card.',
            default: 'rgb(98, 0, 238)',
        },
        {
            name: 'color',
            type: 'string',
            description: 'The color of text on the card.',
            default: '#ffffff',
        },
        {
            name: 'elevation',
            type: 'number',
            description: 'Set the elevation level of the card.',
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
            title: 'Contained card',
            description: 'A simple card with solid background color.',
            innerHtml: `    Button`,
            component: 'vm-card',
            props: {},
        },
        {
            title: 'Contained card (modified color)',
            description:
                'A simple card with modified solid background color.',
            innerHtml: `    Button`,
            component: 'vm-card',
            props: { background: '#a00' },
        },
        {
            title: 'Outlined card',
            description: 'A simple card with a single pixel border.',
            innerHtml: `    Button`,
            component: 'vm-card',
            props: { type: 'outlined' },
        },
        {
            title: 'Text card',
            description: 'A simple card with no background or border.',
            innerHtml: `    Button`,
            component: 'vm-card',
            props: { type: 'text' },
        },
    ],
};
