# Superscript in GitBook

Superscript is not possible using markdown, This plugin adds a tag for GitBook to easily use superscripts.

### How to use it?

Configure the plugin in your `book.json`:

```js
{
    "plugins": ["superscript"]
}
```

Then in your markdown/asciidoc content:

```md
Hello world. {% sup %}superscript text!{% endsup %}

And with a link. {% sup href="https://www.google.fr" %}4{% endsup %}

And with markdown. {% sup %}**4**{% endsup %}
```
