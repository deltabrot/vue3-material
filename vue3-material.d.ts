import { DefineComponent, Plugin } from 'vue';

declare const Vue3Material: Exclude<Plugin['install'], undefined>;
export default Vue3Material;

export const Vue3MaterialSample: DefineComponent<{}, {}, any>;
