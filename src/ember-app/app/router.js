import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-test-gen-default-author-l');
  this.route('new-platform-test-gen-default-author-e',
  { path: 'new-platform-test-gen-default-author-e/:id' });
  this.route('new-platform-test-gen-default-author-e.new',
  { path: 'new-platform-test-gen-default-author-e/new' });
  this.route('new-platform-test-gen-default-book-l');
  this.route('new-platform-test-gen-default-book-e',
  { path: 'new-platform-test-gen-default-book-e/:id' });
  this.route('new-platform-test-gen-default-book-e.new',
  { path: 'new-platform-test-gen-default-book-e/new' });
  this.route('new-platform-test-gen-default-country-l');
  this.route('new-platform-test-gen-default-country-e',
  { path: 'new-platform-test-gen-default-country-e/:id' });
  this.route('new-platform-test-gen-default-country-e.new',
  { path: 'new-platform-test-gen-default-country-e/new' });
  this.route('new-platform-test-gen-default-language-l');
  this.route('new-platform-test-gen-default-language-e',
  { path: 'new-platform-test-gen-default-language-e/:id' });
  this.route('new-platform-test-gen-default-language-e.new',
  { path: 'new-platform-test-gen-default-language-e/new' });
});

export default Router;
