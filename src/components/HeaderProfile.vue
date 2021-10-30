<template>
    <div class="header__right">
        <button class="header__user" type="button">
            <img
                class="header__user-image"
                :src="user.avatarUrl"
                alt="User-image"
            />
            <div class="header__user-descr">
            <h3 class="header__username">{{ user.name }}</h3>
            <p class="header__userscores">{{ user.score }} баллов</p>
            </div>
        </button>
    </div>
</template>

<script>
import axios from "../axios.js";

export default {
    name: 'HeaderProfile',
    data() {
        return {
          userInfo: {},
        };
    },
    props: {
      user: Object,
    },
    created() {
        axios.get("templates/7ZW3y5GAuIge/data").then((response) => {
            this.userInfo = response.data;
            this.$emit("sendUserInfo", this.userInfo);
        });
    },
};
</script>
