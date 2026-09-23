# The library that generates the stickers !

To run it locally, you can just copy it from this folder and use it anywhere else.

There is (for now) no dependency.

It does not do the requests, just the generation

## Docs

### createBadge

createBadge is the main function.
It takes a svg string and an array of dicts and outputs a svg string.

The svg string must have a string to replace (see the main README).

The array must be formatted like this :

```
 [{key:string, replace:string}]
```

Where :

- key holds the key to replace (for example, if it is `{!}cat{!}`, you should input `cat`)
- replace holds the string that it will be replaced with
