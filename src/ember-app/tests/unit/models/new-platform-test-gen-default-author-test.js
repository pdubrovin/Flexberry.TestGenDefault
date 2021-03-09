import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-gen-default-author', 'Unit | Model | new-platform-test-gen-default-author', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-test-gen-default-author',
    'model:new-platform-test-gen-default-book',
    'model:new-platform-test-gen-default-country',
    'model:new-platform-test-gen-default-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
