import '../scss/style.scss';

const clothes = [
    {
        id:    0,
        title: 'Классная футболка',
        price: 5500,
        isNew: true,
        img:   '/src/images/photo_tovara.jpg',

        details: 'Черная удобная футболка',
    },
    {
        id:    1,
        title: 'Черная юбка',
        price: 7000,
        isNew: true,
        img:   '/src/images/skirt.jpeg',

        details: 'Школьная черная юбка',
    },
    {
        id:    2,
        title: 'Красный купальник',
        price: 8999,
        isNew: false,
        img:   '/src/images/swimsuit.jpeg',

        details: 'Школьная черная юбка',
    },
    {
        id:    3,
        title: 'Зеленое платье',
        price: 6550,
        isNew: false,
        img:   '/src/images/dress.jpeg',

        details: 'Зеленое красивое платье',
    },
    {
        id:    4,
        title: 'Белая Кофта',
        price: 7500,
        isNew: false,
        img:   '/src/images/белая_кофта.jpg',

        details: 'Белая хлопковая кофта',
    },
    {
        id:    5,
        title: 'Черная Кофта',
        price: 7990,
        isNew: false,
        img:   '/src/images/черная_кофта.jpg',

        details: 'Черная хлопковая кофта',
    },
];

const accessories = [
    {
        id:    6,
        title: 'Ожерелье',
        price: 699,
        isNew: true,
        img:   '/src/images/bead.jpeg',

        details: 'Красивое серебренное ожерелье',
    },
    {
        id:    7,
        title: 'Прочный зонтик',
        price: 550,
        isNew: true,
        img:   '/src/images/umbrella.jpeg',

        details: 'Прочный зеленый зонтик',
    },
    {
        id:    8,
        title: 'Серый рюкзак',
        price: 933,
        isNew: false,
        img:   '/src/images/backpack.jpeg',

        details: 'Серый красивый рюкзак',
    },
    {
        id:    9,
        title: 'Кепка',
        price: 998,
        isNew: false,
        img:   '/src/images/cap.jpeg',

        details: 'Супер модная кепка',
    },
    {
        id:    10,
        title: 'Бутылка',
        price: 2000,
        isNew: false,
        img:   '/src/images/бутылка.jpg',

        details: 'Пластиковая Бутылка',
    },
    {
        id:    11,
        title: 'Синий рюкзак',
        price: 3999,
        isNew: false,
        img:   '/src/images/синий_рюкзак.jpg',

        details: 'Синий прочный рюкзак',
    },
];

const goodslist = [...clothes, ...accessories];

// const changedGoodsList = [];

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
        });
    });

document.querySelector('.js__category-button').click();

function openmodal() {
    document.querySelector('.modal-main-wrap').classList.add('modal-main-wrap--active');
}

document.querySelectorAll('[data-id]').forEach((item) => {
    item.addEventListener('click', () => {
        openmodal(item.dataset.id);
    });
});

function closemodal() {
    document.querySelector('.modal-main-wrap').classList.remove('modal-main-wrap--active');
}

document.querySelector('.modal-wrapper__btn').addEventListener('click', () => {
    closemodal();
});

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
    document.querySelector('.mmodal-main-wrap').classList.add('modal-main-wrap--active');
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
