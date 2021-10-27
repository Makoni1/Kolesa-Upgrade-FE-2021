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
export default {
    name: 'HeaderProfile',
    data() {
        return {
            userInfo: {},
        };
    },
    props: {
        infoUser: Object,
    },
    methods: {
        getUserInfo() {
            fetch('https://api.json-generator.com/templates/7ZW3y5GAuIge/data', {
                headers: {
                    Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    this.userInfo = data;
                    this.$emit('userInfo', this.userInfo);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    created() {
        this.getUserInfo();
    },
};
</script>
