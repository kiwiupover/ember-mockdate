import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate';

module('Acceptance | mockdate', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    freezeDateAt('1970-08-29');
  });

  hooks.afterEach(function () {
    unfreezeDate();
  });

  test('It mocks the date', async function (assert) {
    await visit('/');

    assert.dom('[data-test-formatted-year]').hasText('1970');
  });
});
