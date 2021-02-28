<template>
    <vm-theme :mode="isDarkMode ? 'dark' : 'light'">
        <vm-app-bar style="padding: 10px 5px">
            <vm-switch label="Dark mode" v-model="isDarkMode"></vm-switch>
        </vm-app-bar>
        <vm-container>
            <vm-page-header>
                Buttons
            </vm-page-header>

            <div>
                <vm-button>
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#808">
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#880">
                    Button
                </vm-button>
            </div>
            <div class="mt-2">
                <vm-button type="outlined">
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#808" type="outlined">
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#880" type="outlined">
                    Button
                </vm-button>
            </div>
            <div class="mt-2">
                <vm-button type="text">
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#808" type="text">
                    Button
                </vm-button>
                <vm-button class="ml-2" background="#880" type="text">
                    Button
                </vm-button>
            </div>
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
