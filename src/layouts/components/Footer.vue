<template>
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__left">
            <p class="footer__copyright">© Kolesa Group</p>
            <div class="footer__social">
              <a class="footer__social-link" href="https://www.instagram.com/">
                <img
                  class="footer__item-icon"
                  src="@/assets/images/insta.svg"
                  alt="instagram"
                />
              </a>
              <a class="footer__social-link" href="https://www.youtube.com/">
                <img
                  class="footer__item-icon"
                  src="@/assets/images/youtube.svg"
                  alt="youtube"
                />
              </a>
              <a class="footer__social-link" href="https://www.vk.com/">
                <img
                  class="footer__item-icon"
                  src="@/assets/images/vk.svg"
                  alt="vkontakte"
                />
              </a>
            </div>
          </div>
          <div class="footer__right">
            <div class="footer__content">
              <p class="footer__content-item">Есть идеи что улучшить?</p>
              <p class="footer__content-item">
                Не знаешь, с кем решить проблему?
              </p>
            </div>
            <div class="footer__btn">
              <button type="button" class="footer__button">Написать</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
