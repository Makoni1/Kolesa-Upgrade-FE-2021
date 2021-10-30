<template>
    <div class="product__item card">
        <div class="card__image-wrap">
            <img :src="item.mainImage" alt="" width='330' height='330'/>
            <span v-if="item.isNew" class="card__badge">New</span>
        </div>
        <div class="card__info">
            <div class="card__price">
                {{item.price}} баллов
            </div>
            <div class="card__title">
                {{item.title}}
            </div>
            <div class="card__sizes">
                <span v-if="item.sizes && item.sizes.length"
                    >Размеры
                    <span v-for="(size, index) in item.sizes" :key="index">
                        {{ size }}
                        <span v-if="index !== item.sizes.length - 1">/</span>
                    </span>
                </span>
                <div v-else>no size information</div>
            </div>
            <button class="card__button" 
                type="button"
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
    item: {
        type: Object,
        required: true,
    },
    methods: {
        openCard(item) {
            console.log(item);
            this.$emit('openCard', this.item);
        },
    },
};
</script>


