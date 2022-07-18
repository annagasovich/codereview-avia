<template>
    <div class="filter-company__controls filter__controls">
        <label class="checkbox-container">{{label}}
            <input type="checkbox" :name="name" :checked="value">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue';
    defineProps({
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped lang="scss">
    @use "@/assets/colors";
    /* Customize the label (the checkbox-container) */
    .checkbox-container {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 35px;
        margin-bottom: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 13px;
        font-weight: 400;
        &:hover{
            .checkmark{
                border: 1px solid colors.$color-primary;
            }
        }
    }

    /* Hide the browser's default checkbox */
    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: transparent;
        border: 1px solid colors.$color-inactive;
        border-radius: 2px;
    }

    .checkbox-container input:checked ~ .checkmark {
        border: 1px solid colors.$color-primary;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
        background-color: transparent;
    }

    /* Style the checkmark/indicator */
    .checkbox-container .checkmark:after {
        left: 8px;
        top: 4px;
        width: 7px;
        height: 12px;
        border: solid colors.$color-primary;
        border-width: 0px 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>