import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformTestGenDefaultAuthorLForm from './forms/new-platform-test-gen-default-author-l';
import NewPlatformTestGenDefaultBookLForm from './forms/new-platform-test-gen-default-book-l';
import NewPlatformTestGenDefaultCountryLForm from './forms/new-platform-test-gen-default-country-l';
import NewPlatformTestGenDefaultLanguageLForm from './forms/new-platform-test-gen-default-language-l';
import NewPlatformTestGenDefaultAuthorEForm from './forms/new-platform-test-gen-default-author-e';
import NewPlatformTestGenDefaultBookEForm from './forms/new-platform-test-gen-default-book-e';
import NewPlatformTestGenDefaultCountryEForm from './forms/new-platform-test-gen-default-country-e';
import NewPlatformTestGenDefaultLanguageEForm from './forms/new-platform-test-gen-default-language-e';
import NewPlatformTestGenDefaultAuthorModel from './models/new-platform-test-gen-default-author';
import NewPlatformTestGenDefaultBookModel from './models/new-platform-test-gen-default-book';
import NewPlatformTestGenDefaultCountryModel from './models/new-platform-test-gen-default-country';
import NewPlatformTestGenDefaultLanguageModel from './models/new-platform-test-gen-default-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-test-gen-default-author': NewPlatformTestGenDefaultAuthorModel,
    'new-platform-test-gen-default-book': NewPlatformTestGenDefaultBookModel,
    'new-platform-test-gen-default-country': NewPlatformTestGenDefaultCountryModel,
    'new-platform-test-gen-default-language': NewPlatformTestGenDefaultLanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-test-gen-default-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-test-gen-default-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-test-gen-default-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-test-gen-default-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-test-gen-default-author-l': NewPlatformTestGenDefaultAuthorLForm,
    'new-platform-test-gen-default-book-l': NewPlatformTestGenDefaultBookLForm,
    'new-platform-test-gen-default-country-l': NewPlatformTestGenDefaultCountryLForm,
    'new-platform-test-gen-default-language-l': NewPlatformTestGenDefaultLanguageLForm,
    'new-platform-test-gen-default-author-e': NewPlatformTestGenDefaultAuthorEForm,
    'new-platform-test-gen-default-book-e': NewPlatformTestGenDefaultBookEForm,
    'new-platform-test-gen-default-country-e': NewPlatformTestGenDefaultCountryEForm,
    'new-platform-test-gen-default-language-e': NewPlatformTestGenDefaultLanguageEForm
  },

});

export default translations;
