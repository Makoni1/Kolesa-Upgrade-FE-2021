<template>
    <div class="header__right">
        <button class="header__user" type="button">
            <img
                :src="userInfo.avatarUrl"
                class="header__user-image"
                alt="User-image"
            />
            <div class="header__user-descr">
            <h3 class="header__username">{{ userInfo.name }}</h3>
            <p class="header__userscores">{{ userInfo.score }} баллов</p>
            </div>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderProfile',
  computed: mapState({
    userInfo: 'userInfo',
  }),
  created() {
    this.$store.dispatch('fetchUserInfo');
  },
};
</script>
