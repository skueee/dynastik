# All the "libraries" to help the Next app !

Here is the meaning of all of them

## api-handler.ts - Executes the common things that a create endpoint should do

It decodes the base64 SVG and pass it into the generator

### Docs

**generate**

It's the main function.

It takes a Base64 encoded svg, (base64SVGData: string) and a dict formatted like in the createBadge function of generate.ts and returns a svg string.

## generate-url.ts - Creates an URL !

It minifies the svg, encode it, then format a url and returns it as a string

### Docs

**generate_url**

The main function, it takes a url as a string, a svg as a string,  args as a dictionnary and returns a url string.

Args should be like this :
```
{ parameter1:value1, parameter2:value2 }
```
And will result in this :
```
?parameter1=value1&parameter2:value2
```

## generate.ts - The library that generates the stickers !

To run it locally, you can just copy it from this folder and use it anywhere else.

There is (for now) no dependency.

It does not do the requests, just the generation

### Docs

**createBadge**

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
