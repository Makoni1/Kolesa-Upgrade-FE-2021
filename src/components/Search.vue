<template>
  <form class="header__form">
    <input
      type="text"
      class="header__input" 
      :value="searchValue" placeholder="Поиск"
      @input="$emit('setSearch', $event)"
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
  props: {
    searchValue: String,
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>
