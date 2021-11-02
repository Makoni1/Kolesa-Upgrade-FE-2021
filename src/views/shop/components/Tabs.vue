<template>
    <div class="main__tabs category">
        <button
            v-for="(tab, index) in tabs"
            class="category__item"
            :class="{ 'category__item--active': activeTab === tab.value}"
            :key="index"
            @click="sortTabs(tab)"
        >
        {{tab.name}}
        </button>
    </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: Array,
    activeTab: String,
  },
  methods: {
    sortTabs(tab) {
      this.$emit('sortTabs', tab);
    },
  },
};
</script>
