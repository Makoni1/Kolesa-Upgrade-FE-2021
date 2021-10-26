<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__left">
            <button class="header__burger-btn">
              <img
                class="burger__img"
                src="./assets/images/burger.svg"
                alt="menu"
              />
            </button>
            <a class="header__logo" href="#">
              <img
                class="header__logo-img"
                src="./assets/images/header_logo.svg"
                alt="Kolesa Logo"
              />
            </a>
          <search :search-value="search" @setSearch="setSearch"></search>
          </div>
          <div class="header__right">
            <button class="header__user" type="button">
              <img
                class="header__user-image"
                src="./assets/images/user-img.png"
                alt="User-image"
              />
              <div class="header__user-descr">
                <h3 class="header__username">Мортиджан</h3>
                <p class="header__userscores">300 баллов</p>
              </div>
            </button>
          </div>
          <form class="header__right-search">
            <input
              class="header__right-input"
              type="text"
              v-model="search"
              placeholder="Поиск"
            />
            <button class="header__right-btn" type="button">
              <img
                class="header__right-img"
                src="./assets/images/search-icon.svg"
                alt="Поиск"
              />
            </button>
          </form>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <div class="main__wrapper">
          <Navbar
            :nav-links="navLinks"
            :active-link="activeLink"
            @setActiveLink="changeActiveLink"
          ></Navbar>
          <div class="main__box">
            <div class="banner">
              <img class="banner__img-big" src="./assets/images/banner.jpg" alt="Баннер"/>
            </div>
            <Buttons></Buttons>
            <Tabs
              :tabs="tabs"
              :activeTab="activeTab"
              @sortTabs="changesortTabs"
            ></Tabs>
            <div class="main__product">
              <Card
                v-for="(item, index) in filterCategories"
                :key="index"
                :item="item"
                @openCard="openCard"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
    <modal 
      :data="modalData" 
      :is-open="isShowModal" 
      @closeModal="closeModal"
      @order="setScore"
    ></modal>
  </div>
</template>

<script>
import axios from './axios';
import Modal from './components/Modal.vue';
import Tabs from './components/Tabs.vue';
import Card from './components/Card.vue';
import Search from './components/Search.vue';
import Buttons from './components/Buttons.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Modal,
    Tabs,
    Card,
    Search,
    Buttons,
    Footer,
    Navbar
  },
  data() {
    return {
      clothes:[
        {
          id: 0,
          title: 'Классная футболка',
          price: 5500,
          isNew: true,
          img: './assets/images/photo_tovara.jpg',
          details: 'Черная удобная футболка',
        },
        {
          id: 1,
          title: 'Черная юбка',
          price: 7000,
          isNew: true,
          img: './assets/images/skirt.jpeg',
          details: 'Школьная черная юбка',
        },
        {
          id: 2,
          title: 'Красный купальник',
          price: 8999,
          isNew: false,
          img: './assets/images/swimsuit.jpeg',
          details: 'Школьная черная юбка',
        },
        {
          id: 3,
          title: 'Зеленое платье',
          price: 6550,
          isNew: false,
          img: './assets/images/dress.jpeg',
          details: 'Зеленое красивое платье',
        },
        {
          id: 4,
          title: 'Белая Кофта',
          price: 7500,
          isNew: false,
          img: './assets/images/белая_кофта.jpg',
          details: 'Белая хлопковая кофта',
        },
        {
          id: 5,
          title: 'Черная Кофта',
          price: 7990,
          isNew: false,
          img: './assets/images/черная_кофта.jpg',
          details: 'Черная хлопковая кофта',
        },
      ],
      accessories:[
        {
          id: 6,
          title: 'Ожерелье',
          price: 699,
          isNew: true,
          img: './assets/images/bead.jpeg',
          details: 'Красивое серебренное ожерелье',
        },
        {
          id: 7,
          title: 'Прочный зонтик',
          price: 550,
          isNew: true,
          img: './assets/images/umbrella.jpeg',
          details: 'Прочный зеленый зонтик',
        },
        {
          id: 8,
          title: 'Серый рюкзак',
          price: 933,
          isNew: false,
          img: './assets/images/backpack.jpeg',
          details: 'Серый красивый рюкзак',
        },
        {
          id: 9,
          title: 'Шапка',
          price: 998,
          isNew: false,
          img: './assets/images/cap.jpg',
          details: 'Супер модная шапка',
        },
        {
          id: 10,
          title: 'Бутылка',
          price: 2000,
          isNew: false,
          img: './assets/images/бутылка.jpg',
          details: 'Пластиковая Бутылка',
        },
        {
          id: 11,
          title: 'Синий рюкзак',
          price: 3999,
          isNew: false,
          img: './assets/images/синий_рюкзак.jpg',
          details: 'Синий прочный рюкзак',
        },
      ],
      tabs: [
        { name: 'Все товары', 
          value: 'all' 
        },
        { name: 'Одежда', 
          value: 'clothes' 
        },
        { name: 'Аксессуары', 
          value: 'accessories' 
        },
      ],
      navLinks: [
        {
          name: 'Оргсхема',
          value: 'orgscheme',
        },
        {
          name: 'Kolesa Team',
          value: 'kolesa Team',
        },
        {
          name: 'Kolesa Shop',
          value: 'kolesa shop',
        },
        {
          name: 'Картина компании',
          value: 'company overview',
        },
        {
          name: 'Новости',
          value: 'news',
        },
        {
          name: 'Education',
          value: 'education',
        },
        {
          name: 'Guidelines',
          value: 'guidelines',
        },
        {
          name: 'Библиотека',
          value: 'library',
        },
        {
          name: 'FAQ',
          value: 'faq',
        },
      ],
      activeTab: 'all',
      activeLink: 'shop',
      isShowModal: false,
      search: 'Одежда D',
      modalData: {},
      score: 500,
    }; 
  },
  computed: {
  allGoods() {
    return [...this.clothes, ...this.accessories];
  },
  sortedProducts() {
    return this.allGoods
      .slice()
      .sort((item) => (item.isNew ? -1 : 1));
  },
  filterCategories() {
    if (this.activeTab === 'all') {
      return this.sortedProducts;
    }
    if (this.activeTab === 'clothes') {
      return this.clothes;
    }
    return this.accessories;
  },
  },
  watch: {
    score(oldValue, newValue) {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
      this.showCost();
    },
  },
  created() {
    console.log(this.$refs.header);
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then ((response) =>{
        console.log(response)
      });
    // console.log(this.$refs.header);
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
    setScore(cost) { 
      this.closeModal();
      this.score -= cost;
    },
    setSearch(e) {
      this.search = e.target.value;
    },
    showCost() {
      alert(this.score);
    },
    getFormatedText(sizes) {
      return sizes && sizes.length ? `Размер ${String(sizes).replace(',', '')}` : '';
    },
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
