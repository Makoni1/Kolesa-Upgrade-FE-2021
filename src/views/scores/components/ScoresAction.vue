<template>
  <div class="grid__item action">
    <div class="action__wrapper">
      <div class="action__image-container">
        <img :src="require(`@/assets/images/${action.iconName}.svg`)" alt="" />
      </div>
      <div class="action__content">
        <h3 class="action__title">{{ action.heading }}</h3>
        <div class="action__reward" v-if="action.reward">
          <p>
            {{ action.reward }} баллов
            {{ action.perMonth ? 'ежемесячно' : '' }}
          </p>
        </div>
        <p class="action__description">
          {{ action.descr }}
        </p>
        <button class="action__btn">Отправить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoresAction',
  props: {
    action: Object,
  },
};
</script>
