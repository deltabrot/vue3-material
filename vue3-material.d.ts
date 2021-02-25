import { DefineComponent, Plugin } from 'vue';

declare const Vue3Material: Exclude<Plugin['install'], undefined>;
export default Vue3Material;

export const VmActionButton: DefineComponent<{}, {}, any>;
export const VmAppBar: DefineComponent<{}, {}, any>;
export const VmButton: DefineComponent<{}, {}, any>;
export const VmContainer: DefineComponent<{}, {}, any>;
export const VmDropdown: DefineComponent<{}, {}, any>;
export const VmGrid: DefineComponent<{}, {}, any>;
export const VmLoadingSpinner: DefineComponent<{}, {}, any>;
export const VmModal: DefineComponent<{}, {}, any>;
export const VmNavigationDrawer: DefineComponent<{}, {}, any>;
export const VmNumberField: DefineComponent<{}, {}, any>;
export const VmPageHeader: DefineComponent<{}, {}, any>;
export const VmPaperContent: DefineComponent<{}, {}, any>;
export const VmPaperHeader: DefineComponent<{}, {}, any>;
export const VmPaper: DefineComponent<{}, {}, any>;
export const VmSwitch: DefineComponent<{}, {}, any>;
export const VmTextField: DefineComponent<{}, {}, any>;
