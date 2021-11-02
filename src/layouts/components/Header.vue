<template>
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
          <HeaderProfile></HeaderProfile>
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
</template>

<script>
import HeaderProfile from './HeaderProfile.vue';
import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
    HeaderProfile,
  },
};
</script>
