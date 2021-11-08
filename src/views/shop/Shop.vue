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
        @closeModal="closeModal"
        @openCard="openModal"
      ></Card>
    </div>
    <Modal
      v-model="isShowModal"
      :modal-data="modalData"
      :isOpen="isShowModal"
      @closeModal="closeModal"
      @order="setScore"
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
      modalData: {},
    };
  },
  computed: {
    allGoods() {
      return [...this.$store.state.clothes, ...this.$store.state.accessories].sort(
        (a, b) => b.isNew - a.isNew,
      );
    },
    filterCategories() {
      if (this.activeTab === 'accessories') {
        return [...this.$store.state.accessories].sort((item) => (item.isNew ? -1 : 1));
      }
      if (this.activeTab === 'clothes') {
        return [...this.$store.state.clothes].sort((item) => (item.isNew ? -1 : 1));
      }
      return [...this.$store.state.accessories, ...this.$store.state.clothes].sort(
        (a, b) => b.isNew - a.isNew,
      );
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
    openCard() {
      this.openModal();
    },
    openModal(item) {
      this.isShowModal = true;
      this.modalData = item;
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
  },
};
</script>
