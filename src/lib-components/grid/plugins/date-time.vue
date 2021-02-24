<template>
    <div class="date-time">
        {{ row[field] ? dateTimeString : '' }}
    </div>
</template>

<script lang="ts">
// vue
import { computed } from 'vue';

export default {
    props: ['row', 'field', 'exported'],
    // eslint-disable-next-line
    setup(props: any) {
        // computed
        const dateTimeString = computed(() => {
            const dateTime = new Date(props.row[props.field]);
            let dateTimeString = '';

            dateTimeString +=
                ('000' + dateTime.getDate()).slice(-2) +
                '/' +
                ('000' + (dateTime.getMonth() + 1)).slice(-2) +
                '/' +
                dateTime.getFullYear() +
                ' at ' +
                ('000' + dateTime.getHours()).slice(-2) +
                ':' +
                ('000' + dateTime.getMinutes()).slice(-2);

            return dateTimeString;
        });

        return {
            props,
            dateTimeString,
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
    --icon-size: 25px;
    object-fit: scale-down;
    margin-right: 8px;
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
