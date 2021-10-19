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
            <form class="header__form">
              <input
                type="text"
                name="search"
                class="header__input"
                placeholder="Поиск"
              />
              <button class="header__search" type="button">
                <img
                  class="header__img"
                  src="./assets/images/search-big.svg"
                  alt="Поиск"
                />
              </button>
            </form>
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
              <img
                class="banner__img-big"
                src="./assets/images/banner.jpg"
                alt="Баннер"
              />
            </div>
            <div class="main__questions questions">
              <button
                type="button"
                class="questions__get-scores questions__item_take"
              >
                Получить баллы
              </button>
              <button
                type="button"
                class="questions__get-scores questions__item_how"
              >
                Как получить баллы
              </button>
              <button
                type="button"
                class="questions__get-scores questions__item_gift"
              >
                Подарить баллы
              </button>
            </div>
            <div class="main__tabs category">
              <button
                data-type="all"
                type="button"
                class="
                  js__category-button
                  category__item category__item--active
                "
              >
                Все товары
              </button>
              <button
                data-type="clothes"
                type="button"
                class="js__category-button category__item"
              >
                Одежда
              </button>
              <button
                data-type="accessories"
                type="button"
                class="js__category-button category__item"
              >
                Аксессуары
              </button>
            </div>
            <div class="main_product js__catalog">
              <!-- Контейнер для рендеринга карточек товара -->
              <div class="card" v-for="item in clothes" :key="item.id">
                  {{item.src}}
                  <img :src="item.src" alt="" :id="item.id">
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
    <div :class="{show: isShowModal}"
    class="modal-main-wrap js__modal">
      <div class="overlay"></div>
      <div class="modal-window-wrap js__modal-window-wrap">
        <div class="modal-wrapper">
          <button  @click="closeModal" class="modal-wrapper__btn js__close-button"></button>
          <div class="images">
            <img
              class="images_element"
              src="./assets/images/product.jpg"
              alt="футболка"
              width="330"
              height="330"
            />
            <div class="images__items">
              <img class="images__item" src="./assets/images/type1.png" />
              <img
                class="images__item active"
                src="./assets/images/type2.png"
              />
              <img class="images__item" src="./assets/images/type3.png" />
            </div>
          </div>
          <div class="modal-wrapper__desc">
            <h3 class="modal-wrapper__title">
              Футболка "Эволюционируй или сдохни"
            </h3>
            <div class="modal-wrapper__blocks scores">
              <div class="scores__left">
                <div class="scores__left-title">100 баллов</div>
                <button class="scores__btn" type="button">Заказать</button>
              </div>
              <div class="scores__right">
                <div class="scores-content">
                  <p class="scores__title">Твой баланс:</p>
                  <p class="scores__text">50 баллов</p>
                </div>
                <div class="scores__bag">
                  <img class="bag" src="./assets/images/bag.svg" />
                </div>
              </div>
            </div>
            <div class="modal__colors">
              <div class="colors__title">Цвета:</div>
              <div class="modal-wrapper__blocks colors">
                <div class="colors__items">
                  <input
                    type="radio"
                    class="colors__item"
                    id="radio-1"
                    name="colors"
                  />
                  <label for="radio-1" class="colors__label colors__blue"
                    >Синий</label
                  >

                  <input
                    type="radio"
                    class="colors__item"
                    id="radio-2"
                    name="colors"
                  />
                  <label for="radio-2" class="colors__label colors__beige"
                    >Бежевый</label
                  >

                  <input
                    type="radio"
                    class="colors__item"
                    id="radio-3"
                    name="colors"
                  />
                  <label for="radio-3" class="colors__label colors__grey"
                    >Серый</label
                  >
                </div>
              </div>
            </div>
            <div class="modal-wrapper__blocks size">
              <h5 class="size__title">Размер:</h5>
              <div class="size__items">
                <input
                  type="radio"
                  class="size__input"
                  id="size-1"
                  name="size"
                />
                <label for="size-1" class="size__label">S</label>

                <input
                  type="radio"
                  class="size__input"
                  id="size-2"
                  name="size"
                />
                <label for="size-2" class="size__label">M</label>

                <input
                  type="radio"
                  class="size__input"
                  id="size-3"
                  name="size"
                />
                <label for="size-3" class="size__label">L</label>
              </div>
            </div>
            <div class="modal-wrapper__blocks">
              <h5 class="modal-wrapper__details">Детали:</h5>
              <p>
                Брендированная толстовка от Qazaq Republic. Материал: Хлопок
                80%, Вискоза 20%
              </p>
            </div>
            <div class="modal-wrapper__blocks">
              <h5 class="modal-wrapper__question">Как выбрать размер:</h5>
              <p>Написать дяде Рику для уточнения.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clothes: [
        {
          id: 0,
          title: 'Классная футболка',
          price: 5500,
          isNew: true,
          img: '/src/images/photo_tovara.jpg',
          details: 'Черная удобная футболка',
        },
        {
          id: 1,
          title: 'Черная юбка',
          price: 7000,
          isNew: true,
          img: '/src/images/skirt.jpeg',
          details: 'Школьная черная юбка',
        },
        {
          id: 2,
          title: 'Красный купальник',
          price: 8999,
          isNew: false,
          img: '/src/images/swimsuit.jpeg',
          details: 'Школьная черная юбка',
        },
        {
          id: 3,
          title: 'Зеленое платье',
          price: 6550,
          isNew: false,
          img: '/src/images/dress.jpeg',
          details: 'Зеленое красивое платье',
        },
        {
          id: 4,
          title: 'Белая Кофта',
          price: 7500,
          isNew: false,
          img: '/src/images/белая_кофта.jpg',
          details: 'Белая хлопковая кофта',
        },
        {
          id: 5,
          title: 'Черная Кофта',
          price: 7990,
          isNew: false,
          img: '/src/images/черная_кофта.jpg',
          details: 'Черная хлопковая кофта',
        },
      ],
      accessories: [
        {
          id: 6,
          title: 'Ожерелье',
          price: 699,
          isNew: true,
          img: '/src/images/bead.jpeg',
          details: 'Красивое серебренное ожерелье',
        },
        {
          id: 7,
          title: 'Прочный зонтик',
          price: 550,
          isNew: true,
          img: '/src/images/umbrella.jpeg',
          details: 'Прочный зеленый зонтик',
        },
        {
          id: 8,
          title: 'Серый рюкзак',
          price: 933,
          isNew: false,
          img: '/src/images/backpack.jpeg',
          details: 'Серый красивый рюкзак',
        },
        {
          id: 9,
          title: 'Шапка',
          price: 998,
          isNew: false,
          img: '/src/images/cap.jpg',
          details: 'Супер модная шапка',
        },
        {
          id: 10,
          title: 'Бутылка',
          price: 2000,
          isNew: false,
          img: '/src/images/бутылка.jpg',
          details: 'Пластиковая Бутылка',
        },
        {
          id: 11,
          title: 'Синий рюкзак',
          price: 3999,
          isNew: false,
          img: '/src/images/синий_рюкзак.jpg',
          details: 'Синий прочный рюкзак',
        },
      ],
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories];
    },
    isNew() {
      return <span class="new">new</span>;
    },
  },
  methods: {
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/vars.scss";
@import "./styles/reset.scss";
@import "./styles/header.scss";
@import "./styles/sidebar.scss";
@import "./styles/main.scss";
@import "./styles/footer.scss";
@import "./styles/card.scss";
@import "./styles/layouts.scss";
@import "./styles/questions.scss";
@import "./styles/tabs.scss";
@import "./styles/modal-window.scss";
@import "./styles/modal-images.scss";
@import "./styles/modal-color.scss";
@import "./styles/modal-scores.scss";
@import "./styles/modal-sizes.scss";
</style>
