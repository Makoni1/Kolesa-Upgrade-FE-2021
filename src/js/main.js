import '../scss/style.scss';
import clothes from './clothes';
import accessories from './accessories';

const goodslist = [...clothes, ...accessories];
const makeProductCard = (title, image, price, isNew, id) => `<div data-id="${id}" class="product__item card">
    <div class="card__image-wrap">
        <img src="${image}" width="330" height="330" alt="">
        ${isNew ? '<span class="card__badge">New</span>' : ''}
    </div>
    <div class="card__info">
        <div class="card__price">
            ${price} баллов
        </div>
        <div class="card__title">
            ${title}
        </div>
        <div class="card__misc">
            Размеры S/M/L
        </div>
        <button data-id=${id} class="card__button">
            Заказать
        </button>
    </div>
</div>`;

const renderGoods = (list) => {
    const wrapper = document.createElement('div');
    const sortedList = list.sort(good => (good.isNew ? -1 : 1));

    wrapper.className = 'main__product';
    sortedList.forEach((card) => {
        const {
            title, price, isNew, img, id,
        } = card;
        const cardHtml = makeProductCard(title, img, price, isNew, id);

        wrapper.innerHTML += cardHtml;

        document.querySelector('.js__catalog').innerHTML = wrapper.outerHTML;
    });
};

document.querySelectorAll('.js__category-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('category__item--active')) {
                document.querySelector('.category__item--active').classList.remove('category__item--active');
                button.classList.add('category__item--active');
            }

            const categoryKey = button.getAttribute('data-type');

            if (categoryKey === 'all') {
                renderGoods(goodslist);
            } else if (categoryKey === 'accessories') {
                renderGoods(accessories);
            } else if (categoryKey === 'clothes') {
                renderGoods(clothes);
            }
        });
    });

document.querySelector('.js__category-button').click();

function openModal(id) {
    let info;

    goodslist.forEach((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
            info = item;
        }
    });
    document.querySelector('.scores__left-title').textContent = info.price;
    document.querySelector('.modal-wrapper__title').textContent = info.title;
    document.querySelector('.images_element').src = info.img;
    document.querySelector('.modal-main-wrap').classList.add('modal-main-wrap--active');
}

document.querySelectorAll('[data-id]').forEach((item) => {
    item.addEventListener('click', () => {
        openModal(item.dataset.id);
    });
});

function closeModal() {
    document.querySelector('.modal-main-wrap').classList.remove('modal-main-wrap--active');
}

document.querySelector('.modal-wrapper__btn').addEventListener('click', () => {
    closeModal();
});
