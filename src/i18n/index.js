import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    pageHome: {
      watch: "Watch portfolio"
    },
    pageMenu: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About me",
      contact: "Contact",
      website: "Website"
    },
    pageAbout: {
      title: "Hello",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua non.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    pageContact: {
      title: "Contact me",
      phone: "Phone",
      email: "Email"
    },
    pageSite: {
      title: "Website",
      development: "Site author",
      video: "Video",
      developer: "Alexander Stanislavsky",
      videomaker: "Konstantin Fedorenko"
    }
  },
  pl: {
    pageHome: {
      watch: "zobacz portfolio"
    },
    pageMenu: {
      home: "Główna",
      portfolio: "Portfolio",
      about: "O mnie",
      contact: "Skontaktuj się z nami",
      website: "Strona internetowa"
    },
    pageAbout: {
      title: "Cześć",
      description:
        "Z drugiej strony nowy model działalności organizacyjnej pozwala wykonywać ważne zadania w celu opracowania nowych propozycji. Podobnie ustalona struktura organizacji pozwala wykonywać ważne zadania w zakresie rozwoju modelu rozwoju."
    },
    pageContact: {
      title: "Skontaktuj się z nami",
      phone: "Numer telefonu",
      email: "E-mail"
    },
    pageSite: {
      title: "Strona internetowa",
      development: "Autor strony",
      video: "Przetwarzanie wideo",
      developer: "Alexander Stanislavsky",
      videomaker: "Konstantin Fedorenko"
    }
  },
  ru: {
    pageHome: {
      watch: "смотреть портфолио"
    },
    pageMenu: {
      home: "Домашняя страница",
      portfolio: "Портфолио",
      about: "Обо мне",
      contact: "Контакты",
      website: "Вебсайт"
    },
    pageAbout: {
      title: "Обо мне",
      description:
        "С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений. Равным образом сложившаяся структура организации позволяет выполнять важные задания по разработке модели развития."
    },
    pageContact: {
      title: "Свяжитесь со мной",
      phone: "Телефон",
      email: "E-mail"
    },
    pageSite: {
      title: "Вебсайт",
      development: "Автор сайта",
      video: "Видео обработка",
      developer: "Станиславский Александр",
      videomaker: "Константин Федоренко"
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

export default i18n;
