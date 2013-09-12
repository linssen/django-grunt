Grunt generated icons
==============================================================================
Generates data-uris from PNGs or SVGs and puts them in a separate CSS file
for inclusion. SCSS is then compiled with them inline.

Also runs the grunt command at `manage.py runserver` to ensure all is up to
date.

Install
------------------------------------------------------------------------------
    $ npm install
    $ pip install -r requirements.pip

That will compile etc. and you will hopefully then see the icons in
`index.html`.

Example
------------------------------------------------------------------------------
The current code compiles thus:

    .icon-flickr {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAALVJREFUWMPtldEJhDAQRNUKtqR0ZEqzA1OCHZgOtAPdwB7cHdFNBsUPd2BAgvMyKhubxmQymUy/InbPHtmLeJQ1upvj2DN7O/As92iCOO4k8G+nbF7NIaVx7gno4LVDHF8R+thnCsCcAARDpgDMWYHgkikAcTpwXNuLxr5NBSYgOBWuqZxUYACCQ+FaESeNQqz4bvFkDGHOowfRdzgqjUuPYphDcjgEGatVrj3wM7qCYzKZXqAdBQ/hw29WuYMAAAAASUVORK5CYII=");
      background-repeat: no-repeat;
    }

    .icon-github {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU5JREFUWMPtVlERgzAMRQISkFAHw8FwMBwMB+BgdbBKwAE4GA7AAThg5S7cui5pywblbkfu3k/7SB5tmiQIDjvsZYnEKNFK3CXYir5j8NlCjAQjCdhUcZOIfggcgQ/dr8DINUJUheQSFYDizfs5EXhGjQkYPePDOo/Bu6VXsDbQKyg8CiiwbO09Cuj111XtkISVWiTGnTDFDviOArjv7EdfA7XZQM0OidqugxGlOLXUGHRRrNzoQvghJwGN9jGDLtY6dkiKP53GgAnQFxNDl3Q5GROfYyW5tjQJaxNZwI+xJOQ7CiiwRd1KZa90EGDi67EY1opjJKk6gGsSUvyMasnphk9QtYch2d+SkW0QPLP9ZKiImNrldcUidLMNI9Rg0sPHZ4kTUZax8jtxLzCK96ZBxOREEJVrKQZ46l+P9wzuT8DxNZYGVgM32yiX/syeRvnXwT3C2UIAAAAASUVORK5CYII=");
      background-repeat: no-repeat;
    }

    li {
      width: 32px;
      height: 32px;
      display: block;
      text-indent: -99em;
      overflow: hidden;
    }
