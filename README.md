#Lister

[![Build Status](https://travis-ci.org/roppa/lister.svg?branch=master)](https://travis-ci.org/roppa/lister)

##Convert a POJO, Array, or JSON object into an html or markdown list

This started as a template helper - taking a nested JSON object and presenting it as an unordered list.

Mr Lister is a function, that takes a value and an optional config object:

```
lister(value[, options])
```

##Example

```
let lister = require('mr-lister');
let myObject = { a: 1, b: 2, c: { aa: 1.1, bb: 2.2, cc: { aaa: 3.3 } } };
process.stdout.write(myObject);
```

Which would print out a nested HTML unordered list, with key/values separated with a colon:

```
 <ul>
   <li>a: 1</li>
   <li>b: 2</li>
   <li>c:
     <ul>
       <li>aa: 1.1</li>
       <li>bb: 2.2</li>
       <li>cc:
         <ul>
           <li>aaa: 3.3</li>
         </ul>
       </li>
     </ul>
   </li>
 </ul>
```

Config example:

```
{
  format: 'ol',
  ulClass: 'my-ul-class'
  liClass: 'my-li-class'
}
```

Format can be ul (default), ol, or md for markdown.

An 'ulClass' can be specified for a class to be added to each ul, ol.

An 'liClass' can be specified for a class to be added to each li.

Classes used with markdown are ignored.

##Testing

Just run ```mocha```.
