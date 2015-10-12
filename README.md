# Ember-Sky-Labels

Fun, Compact & Accessible Forms

[Try out a live demo](http://thoughtbot.github.io/sky-labels/)

## Why SkyLabels?

* Customizable through CSS. Changes animations, styles, etc.
* Accessible (uses a label element).
* Doesn't require that you change your layout. The labels slide above all other
  content.
* Easy to read the labels even when the input is focused.

## Getting Started

First, make sure you're using `ember-cli-sass`:

```bash
$ ember install ember-cli-sass
```

Next, install the addon:

```bash
$ ember install ember-sky-labels
```

Finally, wrap `<input>` and `<textarea>` tags with the `{{sky-label}}` component:

```hbs
{{#sky-label text="Username"}}
  {{input type="text" value=username}}
{{/sky-label}}

{{#sky-label text="Password"}}
  {{input type="password" value=password}}
{{/sky-label}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
