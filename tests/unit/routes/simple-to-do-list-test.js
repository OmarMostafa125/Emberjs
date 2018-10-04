import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | simpleToDoList', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:simple-to-do-list');
    assert.ok(route);
  });
});
