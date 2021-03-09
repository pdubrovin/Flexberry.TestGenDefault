import { test } from 'qunit';

import moduleForAcceptance from 'ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new platform test gen default author l');

test('testing /new-platform-test-gen-default-author-l', function(assert) {
  visit('/new-platform-test-gen-default-author-l');

  andThen(() => {
    checkOlvConfig('[data-test-olv]', null, assert, [
      'refreshButton',
      'createNewButton',
      'colsConfigButton',
    ]);

    const controller = this.application.__container__.lookup('controller:' + currentRouteName());
    const newFormRoute = controller.get('editFormRoute') + '.new';
    goToNewForm('[data-test-olv]', null, assert, newFormRoute);
  });
});
