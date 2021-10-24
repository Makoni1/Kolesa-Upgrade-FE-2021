<template>
    <div class="main__tabs category">
        <button
        v-for="tab in tabs" :key="tab.value"
        :class="{ 'category__item--active': tab.value === activeTab }"
        @click="sortTabs(tab)"
        data-id="all" type="button"
        class="js__category-button category__item">
        {{tab.name}}
        </button>
    </div>
</template>

<script>
import clothes from '../clothes';
import accessories from '../accessories';

const allGoods = clothes.concat(accessories).sort((good) => (good.isNew ? -1 : 1));
const newClothes = clothes.sort((good) => (good.isNew ? -1 : 1));
const newAccessories = accessories.sort((good) => (good.isNew ? -1 : 1));

export default {
    name: 'Tabs',
    data() {
        return {
            isShowModal: false,
            allGoods,
            tabs: [
            { name: 'Все товары', id: 1, value: 'allGoods' },
            { name: 'Одежда', id: 2, value: 'clothes' },
            { name: 'Аксессуары', id: 3, value: 'accessories' },
            ],
            activeTab: 'allGoods',
            sortedProducts: [],
        };
    },
    computed: {
        filterProducts() {
        if (this.sortedProducts.length) {
            return this.sortedProducts;
        }
        return this.allGoods;
        },
    },
    methods: {
        sortTabs(tab) {
            this.activeTab = tab.value;
            if (tab.value === 'clothes') {
                this.sortedProducts = newClothes;
                return;
            }
            if (tab.value === 'accessories') {
                this.sortedProducts = newAccessories;
                return;
            }
            this.sortedProducts = allGoods;
        },
    }
}
</script>
