<template>
    <div class="item">
        <div class="item-main">
            <div class="item-main__price">
                {{ parseInt(data.price).toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
                }) }}</div>
            <div class="item-main__logo">
                <img :src="`./src/assets/img/company/${data.logo}`" alt="">
            </div>
        </div>
        <div class="item-info">
            <div class="row">
                <div class="column column-33">
                    <div class="item-info__name">{{data.origin}} – {{data.destination}}</div>
                    <div class="item-info__data">
                        {{new Date(data.dateStart).toTimeString().slice(0, 5)}} –
                        {{new Date(data.dateEnd).toTimeString().slice(0, 5)}}
                    </div>
                </div>
                <div class="column column-33">
                    <div class="item-info__name">В пути</div>
                    <div class="item-info__data">
                        {{Math.floor(data.duration/(3600*100))}}ч
                        {{Math.floor(data.duration/(60*100)) - Math.floor(data.duration/(3600*100))*60}}м</div>
                </div>
                <div class="column column-33 centred-column">
                    <div class="item-info__name" v-if="data.stops.length === 0">Без пересадок</div>
                    <div class="item-info__name" v-if="data.stops.length > 0">{{data.stops.length}} {{stopsWord(data.stops.length)}}</div>
                    <div class="item-info__data" v-if="data.stops.length > 0">{{data.stops.join(', ')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {useTicketsStore} from '@/stores/tickets';

defineProps({
    data: {
        type: Object,
        required: true
    }
})

const tickets = useTicketsStore().getTickets();

const stopsWord = (count) => {
    if(count === 1 || (count !== 11 && count%10 === 1)){
        return 'пересадка'
    }
    if((count > 1 && count < 5) || (count > 20 && count%10 > 1 && count%10 < 5)){
        return 'пересадки'
    }
    return 'пересадок';
}
</script>

<script>
    export default {
        name: "Ticket"
    }
</script>

<style scoped>
.row .centred-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>