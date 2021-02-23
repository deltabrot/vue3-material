<template>
    <div class="navbar-right">
        <vm-action-button
            icon="fal fa-bars"
            background="rgba(0,0,0,0)"
            :elevation="0"
            @click="toggleMobileMenu"
        >
            <i class="fal fa-bars"></i>
        </vm-action-button>
    </div>
    <teleport to="body">
        <div class="mobile-menu">
            <div
                class="navbar-mobile-menu-background"
                :style="
                    isMobileMenu
                        ? 'background: rgba(0,0,0,0.5);'
                        : 'pointer-events: none;'
                "
                v-if="!store.state.isMedium"
                @click="toggleMobileMenu"
            ></div>
            <div
                class="navbar-mobile-menu"
                :style="isMobileMenu ? 'right: 0px' : ''"
                v-if="!store.state.isMedium"
            >
                <div class="row-reverse mr-1">
                    <vm-action-button
                        icon="fal fa-times"
                        background="rgba(0,0,0,0)"
                        :elevation="0"
                        @click="toggleMobileMenu"
                    >
                        <i class="fal fa-times" @click="toggleMobileMenu"></i>
                    </vm-action-button>
                </div>
                <div class="mobile-menu-account-link">
                    <slot></slot>
                </div>
                <div class="mobile-menu-links">
                    <div
                        v-for="(link, i) in links"
                        :key="`link-${i}`"
                        class="mobile-menu-link"
                        :class="
                            'mobile-menu-link ' +
                                (isCurrentPath(link.path)
                                    ? 'mobile-menu-link-selected'
                                    : '')
                        "
                        @click="changeRoute(link.path)"
                    >
                        <div
                            class="mobile-menu-link-icon"
                            v-if="link.icon && link.icon !== ''"
                        >
                            <i :class="link.icon"></i>
                        </div>
                        {{ link.title }}
                    </div>
                    <div
                        class="mobile-menu-divider"
                        v-if="altLinks && altLinks.length > 0"
                    ></div>
                    <div
                        v-for="(link, i) in altLinks"
                        :key="`alt-link-${i}`"
                        class="mobile-menu-link"
                        @click="changeRoute(link.path)"
                    >
                        <div
                            class="mobile-menu-link-icon"
                            v-if="link.icon && link.icon !== ''"
                        >
                            <i :class="link.icon"></i>
                        </div>
                        {{ link.title }}
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
// vue
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

// components
import VmActionButton from './action-button.vue';

export class MobileMenuLink {
    public title!: string;
    public icon!: string;
    public path!: string;
}

export default defineComponent({
    components: {
        VmActionButton,
    },
    props: {
        links: Array,
        altLinks: Array,
    },
    // eslint-disable-next-line
    setup(props: any) {
        // hooks
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        // properties
        const isMobileMenu = ref(false);

        // methods
        const toggleMobileMenu = (): void => {
            isMobileMenu.value = !isMobileMenu.value;
        };

        const changeRoute = (path: string): void => {
            toggleMobileMenu();
            router.push({ path: path });
        };

        const isCurrentPath = (path: string): boolean => {
            return route.path.indexOf(path) !== -1;
        };

        return {
            props,
            store,
            isMobileMenu,
            toggleMobileMenu,
            changeRoute,
            isCurrentPath,
        };
    },
});
</script>

<style scoped>
.mobile-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 100;
}

.menu-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
    margin-right: -15px;
    font-size: 1.5em;

    cursor: pointer;
    transition-duration: 0.2s;
}

.menu-icon i {
    color: var(--light-blue);
    transition-duration: 0.2s;
}

.menu-icon:hover i {
    color: #fff;
    transition-duration: 0.2s;
}

.navbar-mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -245px;
    width: 230px;
    padding-top: 20px;
    background: #333;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.navbar-mobile-menu-background {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    transition: 0.3s;
}

.mobile-menu-links {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    overflow-y: auto;
}

.mobile-menu-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 70%;
    margin: 10px auto;
}

.mobile-menu-link {
    display: flex;
    padding: 15px 20px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition-duration: 0.2s;
}

.mobile-menu-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transition-duration: 0.2s;
}

.mobile-menu-link-selected {
    pointer-events: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: default;
}

.mobile-menu-link-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    margin-right: 5px;
    font-size: 1.2em;
    margin-right: 20px;

    cursor: pointer;
    transition-duration: 0.2s;
}

.mobile-menu-link-icon i {
    color: var(--light-blue);
    transition-duration: 0.2s;
}

.mobile-menu-link:hover i {
    color: #fff;
    transition-duration: 0.2s;
}

.mobile-menu-link-selected i {
    color: #fff;
}

.mobile-menu-account-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}

.account-link-centered {
    margin-left: 14px;
}

.mobile-menu-name {
    background: var(--medium-blue);
    padding: 3px 6px;
    border-radius: 5px;
}

.mobile-menu-exit {
    display: flex;
    flex-direction: row-reverse;
    font-size: 1.6em;
    margin-right: 20px;
    margin-bottom: 20px;
}

.mobile-menu-exit i {
    color: var(--light-blue);
    cursor: pointer;
    transition-duration: 0.2s;
}

.mobile-menu-exit i:hover {
    color: #fff;
    transition-duration: 0.2s;
}

.auth-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px;
    padding-bottom: 0;
}

.navbar-right {
    height: 100%;
    display: flex;
    align-items: center;
}

.navbar-links {
    height: 100%;
    display: flex;
    align-items: center;
}

/* Media queries */
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
