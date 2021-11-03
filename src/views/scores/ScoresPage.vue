<template>
  <div class="score">
    <div class="score__howto howto">
      <ul class="howto__list">
        <li class="howto__list-item">
          <router-link class="howto__link" to="/shop">
            Kolesa Shop
          </router-link>
        </li>
        <li class="howto__list-item">
          <router-link class="howto__link" to="/shop/how-to-get-scores">
            Как получить баллы
          </router-link>
        </li>
      </ul>
    </div>
    <h2 class="score__title">Как получить баллы</h2>
    <div class="score__grid grid">
      <ScoresAction
        v-for="(action, index) in actions"
        :key="index"
        :action="action"
      ></ScoresAction>
    </div>
  </div>
</template>

<script>
import ScoresAction from './components/ScoresAction.vue';

export default {
  name: 'ScoresPage',
  components: {
    ScoresAction,
  },
  data() {
    return {
      actions: [
        {
          iconName: 'conference',
          heading: 'Выступление на конференциях',
          reward: '90',
          descr:
            'Стань спикером на международной конференции по своему направлению',
        },
        {
          iconName: 'microphone',
          heading: 'Выступление на meetup',
          reward: '60',
          descr:
            'Стань спикером в Колёсах и на meetup других компаний.'
            + ' Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          iconName: 'article',
          heading: 'Статья на habr/vc.ru/rusbase',
          reward: '60',
          descr:
            'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          iconName: 'meeting',
          heading: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          reward: '60',
          descr:
            'Поделись профессиональными знаниями с коллегами.'
            + ' Важно обучить не менее 6 человек',
        },
        {
          iconName: 'game',
          heading: 'Организация мероприятия',
          reward: '60',
          descr:
            'Организуй турнир по командным играм в офисе.'
            + ' ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          iconName: 'mentor',
          heading: 'Стань ментором в проекте «Kolesa Academy»',
          reward: '90',
          perMonth: true,
          descr:
            'Стань ментором академиков, поделись своими знаниями'
            + ' и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          iconName: 'hr',
          heading: 'Помощь HR team',
          reward: '50',
          descr: 'Помоги организовать мероприятие',
        },
        {
          iconName: 'microphone',
          heading: 'Выступление на Demoday',
          reward: '30',
          descr: 'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          iconName: 'other',
          heading: 'Другое',
          descr: 'Получай баллы, если уже что-то сделано',
        },
      ],
    };
  },
};
</script>
