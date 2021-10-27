<template>
    <div class="product__item card">
        <div class="card__image-wrap">
            <img :src="item.mainImage" alt="" :id="item.id"/>
            <span v-if="item.isNew" class="card__badge">New</span>
        </div>
        <div class="card__info">
            <div class="card__price">
                {{item.price}} баллов
            </div>
            <div class="card__title">
                {{item.title}}
            </div>
            <div class="card__misc">
                <!-- {{
                    getFormatedText(item.sizes)
                }} -->
            </div>
            <button class="card__button" 
                type="button"
                :data-id="item.id"
                @click="openCard(item)"
            >
                Заказать
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        item: Object,
    },
    methods: {
        openCard(item) {
            console.log(item);
            this.$emit('openCard', this.item);
        },
    },
};
</script>


