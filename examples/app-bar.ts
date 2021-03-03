export default {
    componentName: 'App Bar',
    componentDescription:
        'An app bar to be displayed at the top of the screen.',
    componentUsage: '<vm-app-bar></vm-app-bar>',
    propInfo: [
        {
            name: 'color',
            type: 'string',
            description: 'The color of the app bar.',
            default: '#ffffff',
        },
        {
            name: 'elevation',
            type: 'number',
            description: 'Set the elevation level of the button.',
            default: '2',
        },
    ],
    examples: [
        {
            title: 'App bar',
            description: 'A basic app bar to be used at the top of the screen with styling to make the text black.',
            innerHtml: `    vue3-material`,
            component: 'vm-app-bar',
            props: { style: 'color: #000;' },
        },
        {
            title: 'App bar (with fixed color)',
            description:
                'An app bar to be used at the top of the screen with a set color and some additional styling.',
            innerHtml: `    vue3-material`,
            component: 'vm-app-bar',
            props: {
                color: 'rgb(15, 112, 216)',
                style: 'color: #fff; align-items: center; padding: 0 20px; font-size: 1.4rem;',
            },
        },
    ],
};
