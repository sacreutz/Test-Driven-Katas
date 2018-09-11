### Crazy Caps

Define a function, `crazyCaps`, that accepts a string as an argument.
`crazyCaps` should return a string in which every other character is
capitalized. The first letter should be lower-cased.

```javascript
crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
```
const crazyCaps = ('string') =>  for (let i = 0; i < string.length; i++)
    if (i % 2 === 1) return string[i].toUpperCase; 


crazyCaps(hello);  