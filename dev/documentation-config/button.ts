export default {
    componentName: 'Button',
    componentDescription:
        'A regular button which can be used to trigger actions or as a router-link. The text color of a contained button is determined by the lightness of the chosen primary color.',
    componentUsage: '<vm-button></vm-button>',
    propInfo: [
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
            name: 'isDisabled',
            type: 'boolean',
            description: 'If true, the button will be disabled.',
            default: 'false',
        },
        {
            name: 'isSubmit',
            type: 'boolean',
            description:
                'Whether to treat the button as a submit button for a form.',
            default: 'false',
        },
        {
            name: 'primaryColor',
            type: 'string',
            description: 'The primary color of the button, must in the form "r, g, b".',
            default: '98, 0, 238',
        },
        {
            name: 'elevation',
            type: 'number',
            description: 'Set the elevation level of the button.',
            default: '2',
        },
        {
            name: 'isAutoTextColor',
            type: 'boolean',
            description: 'Automatically determine text color based on primary color.',
            default: 'false',
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
            props: { primaryColor: '170, 0, 0' },
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
            props: { primaryColor: '86, 232, 220', isAutoTextColor: true },
        },
    ],
};
