<template>
  <form class="header__form" @submit="noReloading">
    <input
      type="search"
      class="header__input" 
      placeholder="Поиск"
      v-model="searchValue"
      @change="searchData"
    />
    <button class="header__search" type="button">
      <img
        class="header__img"
        src="@/assets/images/search-big.svg"
        alt="Поиск"
      />
    </button>
  </form>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    searchData() {
      this.$emit("searchData", this.searchValue);
    },
    noReloading(e) {
      e.preventDefault();
    },
  }
};
</script>
