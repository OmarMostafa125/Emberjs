import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | simpleToDoList_2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:simple-to-do-list-2');
    assert.ok(route);
  });
});
