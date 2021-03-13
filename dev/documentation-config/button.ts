export default {
    componentName: 'Button',
    componentDescription:
        'A regular button which can be used to trigger actions or as a router-link. The text color of a contained button is determined by the lightness of the chosen primary color.',
    componentUsage: '<vm-button></vm-button>',
    propInfo: [
        {
            name: 'type',
            type: 'string',
            description: 'The type attribute of the button.',
            default: 'button',
        },
        {
            name: 'variant',
            type: '\'contained\' | \'outlined\' | \'text\'',
            description: 'The variant of button to render.',
            default: 'contained',
        },
        {
            name: 'routerPath',
            type: 'string',
            description: 'If this value is set, the button will become a router-link and will direct the router to this path.',
            default: '',
        },
        {
            name: 'primaryColor',
            type: 'string',
            description: 'The primary color of the button.',
            default: 'rgb(98, 0, 238)',
        },
        {
            name: 'accentColor',
            type: 'string',
            description: 'The accent color of the button.',
            default: 'rgb(255, 255, 255)',
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
            title: 'Contained button',
            description: 'A simple button with solid background color.',
            innerHtml: `    BUTTON`,
            component: 'vm-button',
            props: {},
        },
        {
            title: 'Contained button (modified color)',
            description:
                'A simple button with modified solid background color.',
            innerHtml: `    BUTTON`,
            component: 'vm-button',
            props: { primaryColor: 'rgb(170, 0, 0)' },
        },
        {
            title: 'Outlined button',
            description: 'A simple button with a single pixel border.',
            innerHtml: `    BUTTON`,
            component: 'vm-button',
            props: { variant: 'outlined' },
        },
        {
            title: 'Text button',
            description: 'A simple button with no background or border.',
            innerHtml: `    BUTTON`,
            component: 'vm-button',
            props: { variant: 'text' },
        },
        {
            title: 'Contained button (modified text color)',
            description:
                'A simple button with modified solid background color, illustrates the text color changing automatically based on the primary color.',
            innerHtml: `    BUTTON`,
            component: 'vm-button',
            props: { primaryColor: 'rgb(86, 232, 220)', accentColor: 'rgb(0, 0, 0)' },
        },
        {
            title: 'Floating action button',
            description:
                'A simple floating action button.',
            innerHtml: ``,
            component: 'vm-action-button',
            props: { label: 'TEST'},
        },
    ],
};
