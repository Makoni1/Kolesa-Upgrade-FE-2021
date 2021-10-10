import '../scss/style.scss';

const clothes = [
    {
        id:    0,
        title: 'Классная футболка',
        price: 5500,
        isNew: true,
        img:   '/src/images/photo_tovara.jpg',
        type:  'clothes',
    },
    {
        id:    1,
        title: 'Черная юбка',
        price: 7000,
        isNew: true,
        img:   '/src/images/skirt.jpeg',
        type:  'clothes',
    },
    {
        id:    2,
        title: 'Красный купальник',
        price: 8999,
        isNew: false,
        img:   '/src/images/swimsuit.jpeg',
        type:  'clothes',
    },
    {
        id:    3,
        title: 'Зеленое платье',
        price: 6550,
        isNew: false,
        img:   '/src/images/dress.jpeg',
        type:  'clothes',
    },
    {
        id:    4,
        title: 'Белая Кофта',
        price: 7500,
        isNew: false,
        img:   '/src/images/белая_кофта.jpg',
        type:  'clothes',
    },
    {
        id:    5,
        title: 'Черная Кофта',
        price: 7990,
        isNew: false,
        img:   '/src/images/черная_кофта.jpg',
        type:  'clothes',
    },
];

const accessories = [
    {
        id:    6,
        title: 'Ожерелье',
        price: 699,
        isNew: true,
        img:   '/src/images/bead.jpeg',
    },
    {
        id:    7,
        title: 'Прочный зонтик',
        price: 550,
        isNew: true,
        img:   '/src/images/umbrella.jpeg',
    },
    {
        id:    8,
        title: 'Серый рюкзак',
        price: 933,
        isNew: false,
        img:   '/src/images/backpack.jpeg',
    },
    {
        id:    9,
        title: 'Кепка',
        price: 998,
        isNew: false,
        img:   '/src/images/cap.jpeg',
    },
    {
        id:    10,
        title: 'Бутылка',
        price: 2000,
        isNew: false,
        img:   '/src/images/бутылка.jpg',
    },
    {
        id:    11,
        title: 'Синий рюкзак',
        price: 3999,
        isNew: false,
        img:   '/src/images/синий_рюкзак.jpg',
    },
];

const goodslist = [...clothes, ...accessories];

// const changedGoodsList = [];

const makeProductCard = (title, image, price, isNew, id) => `<div class="product__item card">
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

// renderGoods(goodslist);

document.querySelectorAll('.js__category-button')

    .forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('category__item--active')) {
                // eslint-disable-next-line max-len
                document.querySelectorAll('.js__category-button').forEach(btn => btn.classList.remove('category__item--active'));
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

            const filteredList = goodslist.filter(good => good.type === categoryKey);

            renderGoods(filteredList);
        });
    });
