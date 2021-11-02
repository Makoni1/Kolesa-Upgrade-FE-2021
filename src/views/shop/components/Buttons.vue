<template>
    <div class="main__questions questions">
        <button type="button" class="questions__get-scores questions__item_take">
            Получить баллы
        </button>
        <router-link
            to="/shop/how-to-get-scores"
            class="questions__get-scores questions__item_how"
            type="button"
        >
            Как получить баллы
        </router-link>
        <button type="button" class="questions__get-scores questions__item_gift">
            Подарить баллы
        </button>
    </div>
</template>

<script>
export default {
  name: 'Buttons',
};
</script>
