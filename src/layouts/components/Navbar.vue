<template>
  <aside class="sidebar">
    <nav class="menu">
      <ul class="menu__list list">
        <li
          class="list__item"
          v-for="(item, index) in navLinks"
          :key="index"
        >
          <router-link
            class="list__link"
            active-class="list__link--active"
            :to="item.url"
            :exact="item.isExact"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navLinks: Array,
  },
};
</script>
