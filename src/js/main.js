import '../scss/style.scss';
import clothes from './clothes';
import accessories from './accessories';

let currentCategory = '';

const categoryButtons = document.querySelectorAll('.js__category-button');
const modal = document.querySelector('.js__modal');
const all = clothes.concat(accessories);

const sortEachCategory = (allCategories) => {
    allCategories.forEach((category) => {
        category.sort((a, b) => (a.isNew === false && b.isNew === true ? 1 : -1));
    });
};

sortEachCategory([all, clothes, accessories]);

const makeProductCard = (title, img, price, isNew, id) => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.classList.add('js__card');
    card.setAttribute('data-id', id);
    card.innerHTML += `
        <div data-id="${id}" class="product__item card">
        <div class="card__image-wrap">
            <img src="${img}" width="330" height="330" alt="">
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

    return card;
};

// Функция для создания узла с контейнром для модалки
const renderModal = (title, img, price, details) => {
    const modalContainer = document.createElement('div');

    modalContainer.classList.add('modal-window-wrap');
    modalContainer.classList.add('js__modal-window-wrap');
    modalContainer.innerHTML += `
        <div class="modal-wrapper">
            <button class="modal-wrapper__btn js__close-button"></button>
            <div class="images">
                <img class="images_element" src="${img}" alt="футболка" width="330" height="330">
                <div class="images__items">
                <img class="images__item" src="src/images/type1.png">
                <img class="images__item active" src="src/images/type2.png">
                <img class="images__item" src="src/images/type3.png">
                </div>
            </div>
            <div class="modal-wrapper__desc">
                <h3 class="modal-wrapper__title">${title}</h3>
                <div class="modal-wrapper__blocks scores">
                    <div class="scores__left">
                    <div class="scores__left-title">
                        ${price}
                    </div>
                    <button class="scores__btn" type="button">
                        Заказать
                    </button>
                    </div>
                    <div class="scores__right">
                        <div class="scores-content">
                            <p class="scores__title">Твой баланс:</p>
                            <p class="scores__text">50 баллов</p>
                        </div>
                        <div class="scores__bag">
                            <img class="bag" src="src/images/bag.svg">
                        </div>
                    </div>
                </div>
                <div class="modal__colors">
                    <div class="colors__title">
                        Цвета:
                    </div>
                    <div class="modal-wrapper__blocks colors">
                        <div class="colors__items">
                            <input type="radio" class="colors__item" id="radio-1" name="colors">
                            <label for="radio-1" class="colors__label colors__blue">Синий</label>

                            <input type="radio" class="colors__item" id="radio-2" name="colors">
                            <label for="radio-2" class="colors__label colors__beige">Бежевый</label>

                            <input type="radio" class="colors__item" id="radio-3" name="colors">
                            <label for="radio-3" class="colors__label colors__grey">Серый</label>
                        </div>
                    </div>
                </div>
                <div class="modal-wrapper__blocks size">
                    <h5 class="size__title">Размер:</h5>
                    <div class="size__items">
                        <input type="radio" class="size__input" id="size-1" name="size">
                        <label for="size-1" class="size__label">S</label>

                        <input type="radio" class="size__input" id="size-2" name="size">
                        <label for="size-2" class="size__label">M</label>

                        <input type="radio" class="size__input" id="size-3" name="size">
                        <label for="size-3" class="size__label">L</label>
                    </div>
                </div>
                <div class="modal-wrapper__blocks">
                    <h5 class="modal-wrapper__details">Детали:</h5>
                    <p> ${details}</p>
                </div>
                <div class="modal-wrapper__blocks">
                    <h5 class="modal-wrapper__question">Как выбрать размер:</h5>
                    <p>Написать дяде Рику для уточнения.</p>
                </div>
            </div>
        </div>`;

    return modalContainer;
};

// Эта функция обновляет контент внутри модалки
const updateModal = (id) => {
    const {
        img, title, price, details,
    } = all.filter(elem => elem.id === parseInt(id, 10))[0]; // Используя массив всех товаров, находим нужный нам товар при помощи фильтра

    document.querySelector('.js__close-button')
        .addEventListener('click', () => {
            modal.style.display = 'none';
        });

    const containerNode = document.querySelector('.js__modal-window-wrap'); // Находим узел контейнера для последующего удаления

    modal.removeChild(containerNode); // Удаляем контейнер, чтобы установить новый с обновленными данными

    modal.appendChild(renderModal(title, img, price, details)); // Рендерим новый контейнер и аппендим его в модалку

    // Данная часть кода обновляет eventListener для кнопки закрытия. Без нее, при смене категории, eventListener перестает работать
    document.querySelector('.js__close-button')
        .addEventListener('click', () => {
            modal.style.display = 'none';
        });
};

// Функция для отрисовки целой категории товаров
const renderCategory = (category) => {
    const catalog = document.querySelector('.js__catalog');

    catalog.classList.add('main__product');

    while (catalog.firstChild) {
        if (catalog.lastChild.dataset) {
            catalog.lastChild.addEventListener('click', () => {
                updateModal(catalog.lastChild.dataset.id);

                modal.style.display = 'block';
            });
        }

        catalog.removeChild(catalog.lastChild); // Удаляем все элементы до тех пор, пока не останется чайлдов у каталога
    }

    category.forEach((card) => {
        const {
            img, title, price, isNew, id,
        } = card;
        const cardHtml = makeProductCard(title, img, price, isNew, id); // Создаем для каждого свою html-карточку и закидываем в каталог

        catalog.appendChild(cardHtml);
    });
};

sortEachCategory([all, clothes, accessories]); // В самом начале сортирую все категории
renderCategory(all); // Затем рендериться категория "Все товары" по умолчанию

// В зависимости от нажатой кнопки, рендериться опредленная категория
categoryButtons
    .forEach((button) => {
        button
            .addEventListener('click', (event) => {
                const btn = event.target;
                const categoryKey = btn.dataset.key;

                if (categoryKey !== currentCategory) { // Проверка: выбрана новая или старая категория
                    if (categoryKey === 'clothes') {
                        renderCategory(clothes);
                        currentCategory = 'clothes';
                    } else if (categoryKey === 'accessories') {
                        renderCategory(accessories);
                        currentCategory = 'all';
                    } else if (categoryKey === 'all') {
                        renderCategory(all);
                        currentCategory = 'all';
                    }
                }

                // Здесь  обновляются eventListener'ы для каждой карточки после ре-рендера
                document.querySelectorAll('.js__card')
                    .forEach((card) => {
                        const { id } = card.dataset;

                        card.addEventListener('click', () => {
                            updateModal(id);
                            modal.style.display = 'block';
                        });
                    });
            });
    });

// Данный код позволяет открывать модалку кликом по самой карточке
document.querySelectorAll('.js__card')
    .forEach((card) => {
        const { id } = card.dataset;

        card.addEventListener('click', () => {
            updateModal(id);

            modal.style.display = 'block';
        });
    });

// Данный код позволяет закрывать модалку кликом по крестику
document.querySelector('.modal-main-wrap')
    .addEventListener('click', () => {
        modal.style.display = 'none';
    });

document.querySelectorAll('.js__category-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('category__item--active')) {
                document.querySelector('.category__item--active').classList.remove('category__item--active');
                button.classList.add('category__item--active');
            }

            const categoryKey = button.getAttribute('data-type');

            if (categoryKey === 'all') {
                renderCategory(all);
            } else if (categoryKey === 'accessories') {
                renderCategory(accessories);
            } else if (categoryKey === 'clothes') {
                renderCategory(clothes);
            }
        });
    });

document.querySelector('.js__category-button').click();
