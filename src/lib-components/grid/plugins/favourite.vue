<template>
    <div class="boolean">
        <div class="boolean-icon-wrapper">
            <div class="boolean-icon failed-icon" v-if="row[field]">
                <i class="fas fa-heart"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: ['row', 'field', 'exported'],
    // eslint-disable-next-line
    setup(props: any) {
        return {
            props,
        };
    },
};
</script>

<style scoped>
.boolean {
    --light-green: #48cf6d;
    --light-red: #f55353;
    display: flex;
    justify-content: center;
    align-items: center;
}

.boolean-icon-wrapper {
    --icon-size: 30px;
    object-fit: scale-down;
}

.boolean-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
    min-width: var(--icon-size);
    min-height: var(--icon-size);
    max-width: var(--icon-size);
    max-height: var(--icon-size);
    border-radius: 50%;
}

.boolean-icon .fas::before {
    vertical-align: middle;
}

.success-icon {
    background: var(--light-green);
    color: #fff;
    font-size: 1.2rem;
}

.failed-icon {
    background: var(--light-red);
    color: #fff;
    font-size: 1.2rem;
}
</style>
