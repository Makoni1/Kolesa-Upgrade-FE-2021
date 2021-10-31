<template>
    <aside class="sidebar">
        <nav class="menu">
            <ul class="menu__list list">
            <li class="list__item" v-for="(link, index) in navLinks" :key="index">
                <a 
                    class="list__link"
                    :class="{ 'list__link--active': activeLink === link.value }"
                    href="#" 
                    @click="setActiveLink(link)"
                    >{{ link.name }}
                </a>
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
        activeLink: String,
    },
    methods: {
        setActiveLink(link) {
            this.$emit('setActiveLink', link);
        },
    },
};
</script>
