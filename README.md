# json-tag

*Template literal tag function that escapes arguments as JSON values*

jsonlit uses `JSON.stringify()` to escape the template literal's arguments.

#### Usage:

```ts
import { jsonLit } from 'jsonlit'

jsonLit`string:  ${ 'double quote "' }`
jsonLit`number:  ${ 1337 }`
jsonLit`boolean: ${ true } & ${ false }`
jsonLit`null:    ${ null }`
jsonLit`array:   ${ ['double quote "', null, 1337] }`
jsonLit`object:  ${ { doubleQuote: '"', doubleNumber: 1.337e+3 } }`
```

You will get the following strings:
```
string:  "double quote \""
number:  1337
boolean: true & false
null:    null
array:   ["double quote \"",null,1337]
object:  {"doubleQuote":"\"","doubleNumber":1337}
```

It works as follows, this:

```javascript
jsonLit`text ${value}`
```

Is essentialy this:

```javascript
`text ${JSON.stringify(value)}`
```
