<template>
    <vm-theme :mode="isDarkMode ? 'dark' : 'light'">
        <vm-app-bar style="padding: 10px 20px; background: rgba(98, 0, 238); color: #fff">
            <vm-switch label="Dark mode" v-model="isDarkMode"></vm-switch>
        </vm-app-bar>
        <vm-container>
            <vm-page-header>
                Buttons
            </vm-page-header>

            <vm-card style="padding: 10px 20px; flex-direction: column">
                <div>
                    <vm-button>
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#a00">
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#aa0">
                        Button
                    </vm-button>
                </div>
                <div class="mt-2">
                    <vm-button type="outlined">
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#a00" type="outlined">
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#aa0" type="outlined">
                        Button
                    </vm-button>
                </div>
                <div class="mt-2">
                    <vm-button type="text">
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#a00" type="text">
                        Button
                    </vm-button>
                    <vm-button class="ml-2" background="#aa0" type="text">
                        Button
                    </vm-button>
                </div>
            </vm-card>
        </vm-container>
    </vm-theme>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ServeDev',
    setup() {
        const isDarkMode = ref(false);

        return {
            isDarkMode,
        };
    },
});
</script>

<style scoped>
#app {
    height: 100%;
}

.mt-2 {
    margin-top: 40px;
}

.ml-2 {
    margin-left: 40px;
}
</style>
