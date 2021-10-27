<template>
    <div class="header__right">
        <button class="header__user" type="button">
            <img
            class="header__user-image"
            src="@/assets/images/user-img.png"
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
import axios from "../axios.js";

export default {
    name: 'HeaderProfile',
    data() {
        return {
            name: "",
            scores: 0,
        };
    },
    props: {
        userInfo: Object,
    },
    created() {
        axios.get("templates/7ZW3y5GAuIge/data").then((response) => {
            this.name = response.data.name;
            this.scores = response.data.score;

            this.$emit("updateUserInfo",  {name: this.name, score: this.scores});
        });
    },
};
</script>
