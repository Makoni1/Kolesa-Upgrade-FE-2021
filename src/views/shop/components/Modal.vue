<template>
    <div v-if="isOpen" class="modal-main-wrap js__modal">
      <div @click="closeModal" class="overlay" />
      <div class="modal-window-wrap js__modal-window-wrap">
        <div class="modal-wrapper">
          <button @click="closeModal" class="modal-wrapper__btn js__close-button" />
          <div class="images">
            <img
              class="images_element"
              :src="data.mainImage"
              alt="футболка"
              width="330" height="330"
            />
            <div class="images__items">
              <img class="images__item" src="@/assets/images/type1.png" />
              <img
                class="images__item active"
                src="@/assets/images/type2.png"
              />
              <img class="images__item" src="@/assets/images/type3.png" />
            </div>
          </div>
          <div class="modal-wrapper__desc">
            <h3 class="modal-wrapper__title">
             {{ data.title }}
            </h3>
            <div class="modal-wrapper__blocks scores">
              <div class="scores__left">
                <div class="scores__left-title">{{ data.price }} баллов</div>
                <button class="scores__btn" type="button" @click="order(cost)">Заказать</button>
              </div>
              <p class="info__warning" v-if="isWarningShown">
                Внимание! У Вас недостаточно баллов для покупки!
              </p>
              <div class="scores__right">
                <div class="scores-content">
                  <p class="scores__title">Твой баланс:</p>
                  <p class="scores__text">{{ userData.score }} баллов</p>
                </div>
                <div class="scores__bag">
                  <img class="bag" src="@/assets/images/bag.svg" />
                </div>
              </div>
            </div>
            <div class="modal__colors">
              <div class="colors__title">Цвета:</div>
              <div class="modal-wrapper__blocks colors">
                <div class="colors__items">
                  <input type="radio" class="colors__item" id="radio-1" name="colors"/>
                  <label for="radio-1" class="colors__label colors__blue">Синий</label>

                  <input type="radio" class="colors__item" id="radio-2" name="colors"/>
                  <label for="radio-2" class="colors__label colors__beige">Бежевый</label>

                  <input type="radio" class="colors__item" id="radio-3" name="colors"/>
                  <label for="radio-3" class="colors__label colors__grey">Серый</label>
                </div>
              </div>
            </div>
            <div class="modal-wrapper__blocks size">
              <h5 class="size__title">Размер:</h5>
              <div class="size__items">
                <input type="radio" class="size__input" id="size-1" name="size"/>
                <label for="size-1" class="size__label">S</label>

                <input type="radio" class="size__input" id="size-2" name="size"/>
                <label for="size-2" class="size__label">M</label>

                <input type="radio" class="size__input" id="size-3" name="size"/>
                <label for="size-3" class="size__label">L</label>
              </div>
            </div>
            <div class="modal-wrapper__blocks">
              <h5 class="modal-wrapper__details">Детали:</h5>
              <p>
                {{data.description}}
              </p>
            </div>
            <div class="modal-wrapper__blocks">
              <h5 class="modal-wrapper__question">Как выбрать размер:</h5>
              <p>Написать дяде Рику для уточнения.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Modal',
  props: {
    data: Object,
    isOpen: Boolean,
  },
  computed: mapState({
    userData: 'userData',
  }),
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    // order() {
    //   if (this.userData.score < this.data.price) {
    //     // alert('Недостаточно баллов');
    //     return;
    //   }
    //   this.$store.commit('order', this.data.price);
    //   this.closeModal();
    // },
    order() {
      if (this.userData.score > this.data.price) {
        this.$emit('order', this.data.price);
        this.closeModal();
      } else {
        alert('Недостаточно средств!');
      }
    },
  },
};
</script>
