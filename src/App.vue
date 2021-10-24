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
          <aside class="sidebar">
            <nav class="menu">
              <ul class="menu__list">
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Оргсхема</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Kolesa Team</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link active">Kolesa Shop</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Картина компании</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Новости</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Education</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Guidelines</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">Библиотека</a>
                </li>
                <li class="menu__list-item">
                  <a href="#" class="menu__list-link">FAQ</a>
                </li>
              </ul>
            </nav>
          </aside>
          <div class="main__box">
            <div class="banner">
              <img class="banner__img-big" src="./assets/images/banner.jpg" alt="Баннер"/>
            </div>
            <div class="main__questions questions">
              <button type="button" class="questions__get-scores questions__item_take">
                Получить баллы
              </button>
              <button type="button" class="questions__get-scores questions__item_how">
                Как получить баллы
              </button>
              <button type="button" class="questions__get-scores questions__item_gift">
                Подарить баллы
              </button>
            </div>
            <tabs></tabs>
            <div class="main__product js__catalog">
              <div
                v-for="item in filterProducts" :key="item.id"
                class="product__item card">
                <div class="card__image-wrap">
                  <img :src="item.img" :alt="item.alt" width="330" height="330" />
                  <span v-if="item.isNew" class="card__badge">New</span>
                </div>
                <div class="card__info">
                    <div class="card__price">
                        {{item.price}} баллов
                    </div>
                    <div class="card__title">
                        {{item.title}}
                    </div>
                    <div class="card__misc">
                        Размеры S/M/L
                    </div>
                    <button class="card__button" @click="openCard(item)">
                        Заказать
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__left">
            <p class="footer__copyright">© Kolesa Group</p>
            <div class="footer__social">
              <a class="footer__social-link" href="https://www.instagram.com/">
                <img
                  class="footer__item-icon"
                  src="./assets/images/insta.svg"
                  alt="instagram"
                />
              </a>
              <a class="footer__social-link" href="https://www.youtube.com/">
                <img
                  class="footer__item-icon"
                  src="./assets/images/youtube.svg"
                  alt="youtube"
                />
              </a>
              <a class="footer__social-link" href="https://www.vk.com/">
                <img
                  class="footer__item-icon"
                  src="./assets/images/vk.svg"
                  alt="vkontakte"
                />
              </a>
            </div>
          </div>
          <div class="footer__right">
            <div class="footer__content">
              <p class="footer__content-item">Есть идеи что улучшить?</p>
              <p class="footer__content-item">
                Не знаешь, с кем решить проблему?
              </p>
            </div>
            <div class="footer__btn">
              <button type="button" class="footer__button">Написать</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <modal 
      :data="modalData" 
      :is-open="isShowModal" 
      @closeModal="closeModal"
      @order="setScore"
    ></modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Tabs from './components/Tabs.vue';
import clothes from './clothes';
import accessories from './accessories';
import Search from './components/Search.vue';

const allGoods = clothes.concat(accessories).sort((good) => (good.isNew ? -1 : 1));
const newClothes = clothes.sort((good) => (good.isNew ? -1 : 1));
const newAccessories = accessories.sort((good) => (good.isNew ? -1 : 1));

export default {
  name: 'App',
  components: {
    Modal,
    Tabs,
    Search,
  },
  data() {
    return {
      search: 'Одежда D',
      isShowModal: false,
      sortedProducts: [],
      allGoods,
      tabs: [
      { name: 'Все товары', id: 1, value: 'allGoods' },
      { name: 'Одежда', id: 2, value: 'clothes' },
      { name: 'Аксессуары', id: 3, value: 'accessories' },
      ],
      activeTab: 'allGoods',
      modalData: {},
      score: 500,
      cards: [
        { id: 1, title: 'Одежда A', description: 'lorem'},
        { id: 2, title: 'Одежда Б', description: 'Abay'},
        { id: 3, title: 'Одежда С', description: 'Hello'},

      ],
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
  created() {
    console.log(this.$$refs.header);
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
    openCard(data) {
      this.openModal();
      this.modalData = data;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    setScore(cost) {
      this.closeModal();
      this.score -= cost;
    },
    setSearch(e) {
      this.search = e.target.value;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
