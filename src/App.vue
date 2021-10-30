<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__left">
            <button class="header__burger-btn">
              <img
                class="burger__img"
                src="@/assets/images/burger.svg"
                alt="menu"
              />
            </button>
            <a class="header__logo" href="#">
              <img
                class="header__logo-img"
                src="@/assets/images/header_logo.svg"
                alt="Kolesa Logo"
              />
            </a>
          <Search @searchData="setSearchValue"></Search>
          </div>
          <HeaderProfile
            :userInfo="{ name: username, score: score }"
            @updateUserInfo="setUser"
            @sendUserInfo="sendUserInfo"
            :user="user"
          ></HeaderProfile>
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
                src="@/assets/images/search-icon.svg"
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
    <Modal 
      :data="modalData" 
      :user="user"
      :is-open="isShowModal" 
      @closeModal="closeModal"
      @order="setScore"
    ></Modal>
  </div>
</template>

<script>
import axios from './axios';
import Modal from './components/Modal.vue';
import Tabs from './components/Tabs.vue';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import Buttons from './components/Buttons.vue';
import Footer from './components/Footer.vue';
import HeaderProfile from './components/HeaderProfile.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Tabs,
    Card,
    Buttons,
    Footer,
    Navbar,
    HeaderProfile,
    Search,
  },
  data() {
    return {
      clothes:[],
      accessories:[],
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
      user : {},
      cards: [
        { id: 1, title: 'Одежда A', description: 'lorem'},
        { id: 2, title: 'Одежда Б', description: 'Abay'},
        { id: 3, title: 'Одежда С', description: 'Hello'},
      ],
      activeTab: 'all',
      activeLink: 'shop',
      isShowModal: false,
      searchValue: "",
      modalData: {},
      username: "",
      score: 0,
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
  sortedClothes() {
    return this.clothes
      .slice()
      .sort((item) => (item.isNew ? -1 : 1));
  },
  filterCategories() {
    if (this.activeTab === 'all') {
      return this.sortedProducts;
    }
    if (this.activeTab === 'clothes') {
      return this.sortedClothes;
    }
    return this.accessories;
  },
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
    setUser(user) {
      this.username = user.name;
      this.score = user.score;
    },
    setScore(price) { 
      this.user.score -= price;
      alert("Заказ оформлен");
    },
    sendUserInfo(userInfo) {
      this.user = userInfo;
    },
    setSearchValue(searchValue) {
      this.searchValue = searchValue; 
    },
  },
  created() {
    Promise.all([
      axios.get("templates/-_RLsEGjof6i/data"),
      axios.get("templates/q3OPxRyEcPvP/data"),
    ]).then((response) => {
        this.clothes = response[0].data;
        this.accessories = response[1].data;
    }).catch((error) => {
        console.log(error);
    })
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
