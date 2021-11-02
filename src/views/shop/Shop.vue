<template>
  <div class="main__box">
    <div class="banner">
      <img
        class="banner__img-big"
        src="@/assets/images/banner.jpg"
        alt="Баннер"
      />
    </div>
    <Buttons></Buttons>
    <Tabs
      v-model="tabs"
      :tabs="tabs"
      :activeTab="activeTab"
      @sortTabs="changesortTabs"
    ></Tabs>
    <div class="main__product">
      <Card
        v-for="item in filterCategories"
        :key="item.id"
        :item="item"
        @openCard="openModal"
      ></Card>
    </div>
    <Modal
      :data="data"
      :isOpen="isShowModal"
      @closeModal="closeModal"
      @order="setOrder"
    ></Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';
import Buttons from './components/Buttons.vue';
import Tabs from './components/Tabs.vue';

export default {
  name: 'Shop',
  components: {
    Modal,
    Card,
    Buttons,
    Tabs,
  },
  data() {
    return {
      tabs: [
        { name: 'Все товары', value: 'all' },
        { name: 'Одежда', value: 'clothes' },
        { name: 'Аксессуары', value: 'accessories' },
      ],
      isShowModal: false,
      activeTab: 'all',
      data: {},
    };
  },
  computed: {
    allGoods() {
      return [...this.$store.state.clothes, ...this.$store.state.accessories];
    },
    sortedProducts() {
      return this.allGoods.slice().sort((item) => (item.isNew ? -1 : 1));
    },
    sortedClothes() {
      return this.$store.state.clothes.slice().sort((item) => (item.isNew ? -1 : 1));
    },
    filterCategories() {
      if (this.activeTab === 'all') {
        return this.sortedProducts;
      }
      if (this.activeTab === 'clothes') {
        return this.sortedClothes;
      }
      return this.$store.state.accessories;
    },
  },
  ...mapState({
    clothes: 'clothes',
    accessories: 'accessories',
    searchValue: 'searchValue',
  }),
  mounted() {
    this.$store.dispatch('fetchShopData');
  },
  methods: {
    openCard(item) {
      this.openModal();
      this.modalData = item;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    changesortTabs(tab) {
      this.activeTab = tab.value;
    },
    changeActiveLink(link) {
      this.activeLink = link.value;
    },
    setOrder(cost) {
      this.$store.dispatch('submitOrder', cost);
      alert('Заказ оформлен!');
    },
  },

};
</script>
