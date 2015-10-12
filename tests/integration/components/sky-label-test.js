import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sky-label', 'Integration | Component | sky label', {
  integration: true,
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#sky-label text="the text"}}
      <input type="text">
    {{/sky-label}}
  `);

  assert.equal(
    this.$('label').text().trim(),
    'the text',
    'injects the <label> text'
  );
});

test('label classes', function(assert) {
  this.render(hbs`
    {{#sky-label id="first"}}
      <input id="first-input">
    {{/sky-label}}

    {{#sky-label id="second"}}
      <input id="second-input">
    {{/sky-label}}
  `);

  const first = this.$('#first');
  const firstInput = this.$('#first-input');
  const second = this.$('#second');
  const secondInput = this.$('#second-input');

  firstInput.focus();

  assert.ok(first.hasClass('sky-label-focused'), '1st has focused class');

  secondInput.focus();

  assert.ok(!first.hasClass('sky-label-focused'), '1st removed focused class');
  assert.ok(second.hasClass('sky-label-focused'), '2nd adds focused class');

  secondInput.val('has some text').trigger('input');

  assert.ok(second.hasClass('sky-label-has-text'), '2nd has text class');

  secondInput.val('').trigger('input');

  assert.ok(!second.hasClass('sky-label-has-text'), '2nd removed text class');
});

test('it assigns the `for` attribute of the label', function(assert) {
  this.render(hbs`
    {{#sky-label}}
      <input type="text" id="the-input">
    {{/sky-label}}
  `);

  assert.equal(
    this.$('label').prop('for'),
    'the-input',
    'sets the `for` attribute to the `input` id'
  );

  this.render(hbs`
    {{#sky-label}}
      <textarea id="the-textarea"></textarea>
    {{/sky-label}}
  `);

  assert.equal(
    this.$('label').prop('for'),
    'the-textarea',
    'sets the `for` attribute to the `textarea` id'
  );
});
