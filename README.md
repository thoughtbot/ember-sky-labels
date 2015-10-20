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

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

  [CONTRIBUTING]: CONTRIBUTING.md
  [contributors]: https://github.com/thoughtbot/ember-sky-labels/graphs/contributors

## License

ember-sky-labels is Copyright (c) 2015 thoughtbot, inc.
It is free software, and may be redistributed
under the terms specified in the [LICENSE] file.

  [LICENSE]: /LICENSE.md

## About

ember-sky-labels is maintained by [Sean Doyle][seanpdoyle].

![thoughtbot](https://thoughtbot.com/logo.png)

  [seanpdoyle]: https://github.com/seanpdoyle

ember-sky-labels is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

  [community]: https://thoughtbot.com/community?utm_source=github
  [hire]: https://thoughtbot.com/hire-us?utm_source=github
