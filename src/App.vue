<template>
  <div id="app">
    <Header></Header>
    <main class="main">
      <div class="container">
        <div class="main__wrapper">
          <Navbar :nav-links="navLinks"></Navbar>
          <router-view></router-view>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/layouts/components/Header.vue';
import Navbar from '@/layouts/components/Navbar.vue';
import Footer from '@/layouts/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer,
  },
  data() {
    return {
      navLinks: [
        {
          label: 'Оргсхема',
          url: '/',
          isExact: true,
        },
        {
          label: 'Kolesa Team',
          url: '/about',
          isExact: true,
        },
        {
          label: 'Kolesa Shop',
          url: '/shop',
          isExact: false,
        },
        {
          name: 'Картина компании',
          url: '/overview',
          isExact: true,
        },
        {
          name: 'Новости',
          url: '/news',
          isExact: true,
        },
        {
          name: 'Education',
          url: '/education',
          isExact: true,
        },
        {
          name: 'Guidelines',
          url: '/guidelines',
          isExact: true,
        },
        {
          name: 'Библиотека',
          url: '/library',
          isExact: true,
        },
        {
          name: 'FAQ',
          url: '/faq',
          isExact: true,
        },
      ],
      searchValue: '',
    };
  },
  computed: mapState({
    userData: 'userData',
  }),
  methods: {
    setSearchValue(searchValue) {
      this.$store.commit('setSearchValue', searchValue);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
