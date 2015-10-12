import Ember from 'ember';
import layout from '../templates/components/sky-label';

const { run } = Ember;

export default Ember.Component.extend({
  layout: layout,

  classNames: ['sky-label'],
  classNameBindings: [
    'skyLabelFocused',
    'skyLabelHasText',
  ],

  skyLabelHasText: false,
  skyLabelFocused: false,

  didRender() {
    this.$('label:first').prop('for', this.firstInput().prop('id'));

    this.firstInput()
      .on('input', this.checkForText.bind(this))
      .on('focus', this.focus.bind(this))
      .on('blur', this.blur.bind(this));
  },

  willDestroyElement() {
    this.firstInput()
      .off('input', this.checkForText.bind(this))
      .off('focus', this.focus.bind(this))
      .off('blur', this.blur.bind(this));
  },

  checkForText({ currentTarget }) {
    const hasText = currentTarget.value.trim().length > 0;

    run(() => this.set('skyLabelHasText', hasText));
  },

  focus() {
    run(() => this.set('skyLabelFocused', true));
  },

  blur() {
    run(() => this.set('skyLabelFocused', false));
  },

  firstInput() {
    return this.$('input:first, textarea:first');
  }
});
