<template>
    <div class="filter">
        <div class="filter-count">
            <div class="filter-count__name">Количество пересадок</div>
            <div class="filter-count__controls">
                <Checkbox
                        :label="'Без пересадок'"
                        :name="'stops0'"
                />
                <Checkbox
                        :label="'1 пересадка'"
                        :name="'stops1'"
                />
                <Checkbox
                        :label="'2 пересадки'"
                        :name="'stops2'"
                />
                <Checkbox
                        :label="'3 пересадки'"
                        :name="'stops3'"
                />
            </div>
        </div>
        <div class="filter-company">
            <div class="filter-company__name">Компания</div>
            <Radiogroup
                    :data="radio"
                    :name="'company'"
            />
        </div>
    </div>
</template>

<script setup>
import Checkbox from "@/components/controls/Checkbox.vue"
import Radiogroup from "@/components/controls/Radiogroup.vue"

const radio = [
    {
        label: 'Все',
        value: 1
    },
    {
        label: 'S7 Airlines',
        value: 2
    },
    {
        label: 'XiamenAir',
        value: 2
    }
];
</script>

<style scoped>

</style>