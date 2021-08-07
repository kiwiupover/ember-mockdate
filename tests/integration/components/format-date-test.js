import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate';

module('Integration | Component | format-date', function (hooks) {
  setupRenderingTest(hooks);

  test('freezes new Date', async function (assert) {
    freezeDateAt('1999-12-26');

    await render(hbs`<FormatDate />`);

    assert.dom('[data-test-formatted-year]').hasText('1999');

    unfreezeDate();
  });
});
