import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-test-gen-default-country-l': {
            caption: 'new-platform-test-gen-default-country-l',
            title: 'new-platform-test-gen-default-country-l'
          },
          'new-platform-test-gen-default-book-l': {
            caption: 'new-platform-test-gen-default-book-l',
            title: 'new-platform-test-gen-default-book-l'
          },
          'new-platform-test-gen-default-author-l': {
            caption: 'new-platform-test-gen-default-author-l',
            title: 'new-platform-test-gen-default-author-l'
          },
          'new-platform-test-gen-default-language-l': {
            caption: 'new-platform-test-gen-default-language-l',
            title: 'new-platform-test-gen-default-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
