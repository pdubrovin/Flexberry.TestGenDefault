import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-gen-default-country', 'Unit | Serializer | new-platform-test-gen-default-country', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-test-gen-default-country',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
