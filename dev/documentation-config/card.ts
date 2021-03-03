export default {
    componentName: 'Card',
    componentDescription: 'A card component with elevation built in.',
    componentUsage: '<vm-card></vm-card>',
    propInfo: [
        {
            name: 'elevation',
            type: 'number',
            description: 'Set the elevation level of the card.',
            default: '2',
        },
        {
            name: 'borderRadius',
            type: 'number',
            description: 'The border radius of the card component.',
            default: '5',
        },
    ],
    examples: [
        {
            title: 'Basic card',
            description: 'A card with default elevation.',
            innerHtml: `    Content`,
            component: 'vm-card',
            props: {},
        },
        {
            title: 'Styled card',
            description: 'A card with increased elevation and padding.',
            innerHtml: `    Content`,
            component: 'vm-card',
            props: { style: 'padding: 10px 20px;' },
        },
        {
            title: 'Elevated and styled card',
            description: 'A card with increased elevation and padding.',
            innerHtml: `    Content`,
            component: 'vm-card',
            props: { elevation: 8, style: 'padding: 10px 20px;' },
        },
        {
            title: 'Elevated and styled card (increased border-radius)',
            description: 'A card with increased elevation and padding.',
            innerHtml: `    Content`,
            component: 'vm-card',
            props: {
                elevation: 8,
                style: 'padding: 10px 20px;',
                borderRadius: 50,
            },
        },
    ],
};
