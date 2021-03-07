<template>
    <div id="app-theme" class="theme" :class="props.mode + '-theme'" ref="theme">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        mode: {
            type: String,
            default: 'light',
        },
    },
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
    box-sizing: border-box;
}

html {
    display: flex;
    width: 100%;
    min-height: 100%;
}

body {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    margin: 0;
}

#app {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
}

.theme {
    --default-margin: 5px;
    width: 100%;
    height: 100%;
    flex: 1;
    font-family: 'Roboto', sans-serif;
    background: rgb(var(--default-background));
    color: rgb(var(--default-color));

    --baseline-color: 0, 0, 0;
    --umbra-opacity: 0.2;
    --penumbra-opacity: 0.14;
    --ambient-opacity: 0.12;

    --umbra-map-0: 0px 0px 0px 0px;
    --umbra-map-1: 0px 2px 1px -1px;
    --umbra-map-2: 0px 3px 1px -2px;
    --umbra-map-3: 0px 3px 3px -2px;
    --umbra-map-4: 0px 2px 4px -1px;
    --umbra-map-5: 0px 3px 5px -1px;
    --umbra-map-6: 0px 3px 5px -1px;
    --umbra-map-7: 0px 4px 5px -2px;
    --umbra-map-8: 0px 5px 5px -3px;
    --umbra-map-9: 0px 5px 6px -3px;
    --umbra-map-10: 0px 6px 6px -3px;
    --umbra-map-11: 0px 6px 7px -4px;
    --umbra-map-12: 0px 7px 8px -4px;
    --umbra-map-13: 0px 7px 8px -4px;
    --umbra-map-14: 0px 7px 9px -4px;
    --umbra-map-15: 0px 8px 9px -5px;
    --umbra-map-16: 0px 8px 10px -5px;
    --umbra-map-17: 0px 8px 11px -5px;
    --umbra-map-18: 0px 9px 11px -5px;
    --umbra-map-19: 0px 9px 12px -6px;
    --umbra-map-20: 0px 10px 13px -6px;
    --umbra-map-21: 0px 10px 13px -6px;
    --umbra-map-22: 0px 10px 14px -6px;
    --umbra-map-23: 0px 11px 14px -7px;
    --umbra-map-24: 0px 11px 15px -7px;
    --penumbra-map-0: 0px 0px 0px 0px;
    --penumbra-map-1: 0px 1px 1px 0px;
    --penumbra-map-2: 0px 2px 2px 0px;
    --penumbra-map-3: 0px 3px 4px 0px;
    --penumbra-map-4: 0px 4px 5px 0px;
    --penumbra-map-5: 0px 5px 8px 0px;
    --penumbra-map-6: 0px 6px 10px 0px;
    --penumbra-map-7: 0px 7px 10px 1px;
    --penumbra-map-8: 0px 8px 10px 1px;
    --penumbra-map-9: 0px 9px 12px 1px;
    --penumbra-map-10: 0px 10px 14px 1px;
    --penumbra-map-11: 0px 11px 15px 1px;
    --penumbra-map-12: 0px 12px 17px 2px;
    --penumbra-map-13: 0px 13px 19px 2px;
    --penumbra-map-14: 0px 14px 21px 2px;
    --penumbra-map-15: 0px 15px 22px 2px;
    --penumbra-map-16: 0px 16px 24px 2px;
    --penumbra-map-17: 0px 17px 26px 2px;
    --penumbra-map-18: 0px 18px 28px 2px;
    --penumbra-map-19: 0px 19px 29px 2px;
    --penumbra-map-20: 0px 20px 31px 3px;
    --penumbra-map-21: 0px 21px 33px 3px;
    --penumbra-map-22: 0px 22px 35px 3px;
    --penumbra-map-23: 0px 23px 36px 3px;
    --penumbra-map-24: 0px 24px 38px 3px;
    --ambient-map-0: 0px 0px 0px 0px;
    --ambient-map-1: 0px 1px 3px 0px;
    --ambient-map-2: 0px 1px 5px 0px;
    --ambient-map-3: 0px 1px 8px 0px;
    --ambient-map-4: 0px 1px 10px 0px;
    --ambient-map-5: 0px 1px 14px 0px;
    --ambient-map-6: 0px 1px 18px 0px;
    --ambient-map-7: 0px 2px 16px 1px;
    --ambient-map-8: 0px 3px 14px 2px;
    --ambient-map-9: 0px 3px 16px 2px;
    --ambient-map-10: 0px 4px 18px 3px;
    --ambient-map-11: 0px 4px 20px 3px;
    --ambient-map-12: 0px 5px 22px 4px;
    --ambient-map-13: 0px 5px 24px 4px;
    --ambient-map-14: 0px 5px 26px 4px;
    --ambient-map-15: 0px 6px 28px 5px;
    --ambient-map-16: 0px 6px 30px 5px;
    --ambient-map-17: 0px 6px 32px 5px;
    --ambient-map-18: 0px 7px 34px 6px;
    --ambient-map-19: 0px 7px 36px 6px;
    --ambient-map-20: 0px 8px 38px 7px;
    --ambient-map-21: 0px 8px 40px 7px;
    --ambient-map-22: 0px 8px 42px 7px;
    --ambient-map-23: 0px 9px 44px 8px;
    --ambient-map-24: 0px 9px 46px 8px;
    --elevation-0:
        var(--umbra-map-0) rgba(var(--baseline-color) var(--umbra-opacity)),
        var(--penumbra-map-0) rgba(var(--baseline-color) var(--penumbra-opacity)),
        var(--ambient-map-0) rgba(var(--baseline-color) var(--ambient-opacity))
    ;
    --elevation-1:
        var(--umbra-map-1) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-1) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-1) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-2:
        var(--umbra-map-2) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-2) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-2) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-3:
        var(--umbra-map-3) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-3) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-3) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-4:
        var(--umbra-map-4) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-4) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-4) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-5:
        var(--umbra-map-5) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-5) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-5) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-6:
        var(--umbra-map-6) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-6) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-6) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-7:
        var(--umbra-map-7) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-7) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-7) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-8:
        var(--umbra-map-8) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-8) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-8) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-9:
        var(--umbra-map-9) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-9) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-9) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-10:
        var(--umbra-map-10) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-10) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-10) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-11:
        var(--umbra-map-11) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-11) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-11) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-12:
        var(--umbra-map-12) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-12) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-12) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-13:
        var(--umbra-map-13) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-13) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-13) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-14:
        var(--umbra-map-14) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-14) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-14) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-15:
        var(--umbra-map-15) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-15) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-15) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-16:
        var(--umbra-map-16) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-16) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-16) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-17:
        var(--umbra-map-17) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-17) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-17) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-18:
        var(--umbra-map-18) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-18) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-18) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-19:
        var(--umbra-map-19) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-19) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-19) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-20:
        var(--umbra-map-20) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-20) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-20) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-21:
        var(--umbra-map-21) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-21) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-21) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-22:
        var(--umbra-map-22) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-22) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-22) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-23:
        var(--umbra-map-23) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-23) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-23) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
    --elevation-24:
        var(--umbra-map-24) rgba(var(--baseline-color), var(--umbra-opacity)),
        var(--penumbra-map-24) rgba(var(--baseline-color), var(--penumbra-opacity)),
        var(--ambient-map-24) rgba(var(--baseline-color), var(--ambient-opacity))
    ;
}

.light-theme {
    --default-surface: 255, 255, 255;
    --default-background: 250, 250, 250;
    --default-color: 0, 0, 0;
}

.dark-theme {
    --default-surface: 24, 24, 24;
    --default-background: 24, 24, 24;
    --default-color: 255, 255, 255;
    --overlay-color: 255, 255, 255;
    --elevation-opacity-0: 0;
    --elevation-opacity-1: 0.05;
    --elevation-opacity-2: 0.07;
    --elevation-opacity-3: 0.08;
    --elevation-opacity-4: 0.09;
    --elevation-opacity-5: 0.10;
    --elevation-opacity-6: 0.11;
    --elevation-opacity-7: 0.115;
    --elevation-opacity-8: 0.12;
    --elevation-opacity-9: 0.125;
    --elevation-opacity-10: 0.13;
    --elevation-opacity-11: 0.135;
    --elevation-opacity-12: 0.14;
    --elevation-opacity-13: 0.1425;
    --elevation-opacity-14: 0.145;
    --elevation-opacity-15: 0.1475;
    --elevation-opacity-16: 0.15;
    --elevation-opacity-17: 0.15125;
    --elevation-opacity-18: 0.1525;
    --elevation-opacity-19: 0.15375;
    --elevation-opacity-20: 0.155;
    --elevation-opacity-21: 0.15675;
    --elevation-opacity-22: 0.1575;
    --elevation-opacity-23: 0.15875;
    --elevation-opacity-24: 0.16;
}

.elevation-background-0,
.elevation-background-1,
.elevation-background-2,
.elevation-background-3,
.elevation-background-4,
.elevation-background-5,
.elevation-background-6,
.elevation-background-7,
.elevation-background-8,
.elevation-background-9,
.elevation-background-10,
.elevation-background-11,
.elevation-background-12,
.elevation-background-13,
.elevation-background-14,
.elevation-background-15,
.elevation-background-16,
.elevation-background-17,
.elevation-background-18,
.elevation-background-19,
.elevation-background-20,
.elevation-background-21,
.elevation-background-22,
.elevation-background-23,
.elevation-background-24 {
    position: relative;
    background: rgb(var(--default-surface));
}

.elevation-background-0::before,
.elevation-background-1::before,
.elevation-background-2::before,
.elevation-background-3::before,
.elevation-background-4::before,
.elevation-background-5::before,
.elevation-background-6::before,
.elevation-background-7::before,
.elevation-background-8::before,
.elevation-background-9::before,
.elevation-background-10::before,
.elevation-background-11::before,
.elevation-background-12::before,
.elevation-background-13::before,
.elevation-background-14::before,
.elevation-background-15::before,
.elevation-background-16::before,
.elevation-background-17::before,
.elevation-background-18::before,
.elevation-background-19::before,
.elevation-background-20::before,
.elevation-background-21::before,
.elevation-background-22::before,
.elevation-background-23::before,
.elevation-background-24::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.elevation-background-0::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-0));
}

.elevation-background-1::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-1));
}

.elevation-background-2::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-2));
}

.elevation-background-3::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-3));
}

.elevation-background-4::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-4));
}

.elevation-background-5::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-5));
}

.elevation-background-6::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-6));
}

.elevation-background-7::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-7));
}

.elevation-background-8::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-8));
}

.elevation-background-9::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-9));
}

.elevation-background-10::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-10));
}

.elevation-background-11::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-11));
}

.elevation-background-12::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-12));
}

.elevation-background-13::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-13));
}

.elevation-background-14::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-14));
}

.elevation-background-15::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-15));
}

.elevation-background-16::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-16));
}

.elevation-background-17::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-17));
}

.elevation-background-18::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-18));
}

.elevation-background-19::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-19));
}

.elevation-background-20::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-20));
}

.elevation-background-21::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-21));
}

.elevation-background-22::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-22));
}

.elevation-background-23::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-23));
}

.elevation-background-24::before {
    background: rgba(var(--overlay-color), var(--elevation-opacity-24));
}

.elevation-0 {
    box-shadow: var(--elevation-0);
}

.elevation-1 {
    box-shadow: var(--elevation-1);
}

.elevation-2 {
    box-shadow: var(--elevation-2);
}

.elevation-3 {
    box-shadow: var(--elevation-3);
}

.elevation-4 {
    box-shadow: var(--elevation-4);
}

.elevation-5 {
    box-shadow: var(--elevation-5);
}

.elevation-6 {
    box-shadow: var(--elevation-6);
}

.elevation-7 {
    box-shadow: var(--elevation-7);
}

.elevation-8 {
    box-shadow: var(--elevation-8);
}

.elevation-9 {
    box-shadow: var(--elevation-9);
}

.elevation-10 {
    box-shadow: var(--elevation-10);
}

.elevation-11 {
    box-shadow: var(--elevation-11);
}

.elevation-12 {
    box-shadow: var(--elevation-12);
}

.elevation-13 {
    box-shadow: var(--elevation-13);
}

.elevation-14 {
    box-shadow: var(--elevation-14);
}

.elevation-15 {
    box-shadow: var(--elevation-15);
}

.elevation-16 {
    box-shadow: var(--elevation-16);
}

.elevation-17 {
    box-shadow: var(--elevation-17);
}

.elevation-18 {
    box-shadow: var(--elevation-18);
}

.elevation-19 {
    box-shadow: var(--elevation-19);
}

.elevation-20 {
    box-shadow: var(--elevation-20);
}

.elevation-21 {
    box-shadow: var(--elevation-21);
}

.elevation-22 {
    box-shadow: var(--elevation-22);
}

.elevation-23 {
    box-shadow: var(--elevation-23);
}

.elevation-24 {
    box-shadow: var(--elevation-24);
}
</style>
