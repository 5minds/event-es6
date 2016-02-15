class: center, middle
background-image: url(img/background.png)

### Meine Eindrücke und Erfahrungen mit
# ES6 aka ES 2015

---
background-image: url(img/background_martin.png)

.right-column[
# _Hi_ - eine kurze Vorstellung

- Martin Möllenbeck
- Gründer der 5Minds (http://www.5minds.de)
- Professioneller Entwickler (~25 Jahren)
  - Backend-/Messaging-Systeme
  - High-Performance Webseiten (u.a. Livetiming DTM)
  - JavaScript, Elixir, Python, C#/F#
- Twitter, Github, Slack ... -> @moellenbeck
]

---
class:
background-image: url(img/background.png)

.right-column[
# ES6 Erfahrung

- seit 2014 in unterschiedlichen Projekten
- (fast) immer  (nur) auf dem Server
- Zuerst mit Traceur
- Seid Node.js 4.x auf dem Server ohne Transpiler
- Wenn auf dem Client dann Babel
]

---
class: center, middle
background-image: url(img/background.png)

# Gestern  _var_ -> Heute  _let_ & _const_

---
background-image: url(img/background.png)

.right-column[
**Mit _var_ mussten wir Dinge wie IIFE lernen:**

```JavaScript
/* Crockford empfiehlt */
(function(){
  /* Code, der keine Zeiteffekte hervorruft */
}());

/* Dies funktioniert auch */
(function(){
  /* Code, der keine Zeiteffekte hervorruft*/
})();
```
**Nur die Klammern machen den Unterschied**
]

---
class:
background-image: url(img/background.png)

.right-column[
**Mit _let_ gibt es Blockscope Variablen**

```JavaScript
{
   let myVar = 1;
}

/* raise - ReferenceError: myVar is not defined */
console.log(myVar);
```
]

---
class:
background-image: url(img/background.png)

.right-column[
**Mit _var_ keinen Hinweis auf doppelte Deklaration**

```JavaScript
var myVar = 1;

/* ganz viel code - sollten man nicht machen, aber ... */

var myVar = 2; /* sollte eigentlich eine neue Variable sein. */
               /* Es gibt keinen Syntaxfehler, Programm funktioniert */
               /* vielleicht. */
```
]

---
class:
background-image: url(img/background.png)

.right-column[
**Mit _const_ gibt es vom Compiler einen Hinweis auf einen Syntaxfehler.**

```JavaScript
const myVar = 1;

/* ganz viel code - sollten man nicht machen, aber ... */

const myVar = 2; /* SyntaxError: Identifier 'myVar' has already */
                 /* been declared */
```
]

---
class:
background-image: url(img/background_achtung.png)

.right-column[
**Aber...**

```JavaScript
const myVar = [1, 2];

myVar.push(3);
```

Es ist nur die Variable _myVar_ konstant.
Array ist ein Referenztyp und das Array bleibt das gleiche Objekt!
]

---
class: center, middle
background-image: url(img/background.png)

# arrow-Function oder () => {}
## \_this, that, self oder what?

---
background-image: url(img/background.png)

.right-column[
**Bei der Verwendung von callback Funktionen, den _this_-Kontext sichern!**

```JavaScript
function UiComponent() {
  var _this = this;
  var that = this;
  var self = this;
  document.addEventListener('click', function onClickHandler() {
    _this... /* oder */ that... /* oder */ self...
  });

  /* oder */
  document.addEventListener('click', function bindClickHandler() {
    this... /* hier funktioniert this wie gewohnt */
  }.bind(this));
}
```
]

---
background-image: url(img/background.png)

.right-column[
**Mit arrow-Function ist es (für mich) viel einfacher geworden:**

```JavaScript
function doSomething() {
  document.addEventListener('click', () => {
    this... /* ist was erwartet wird ;-) */
  });
}
```
]

---
background-image: url(img/background_achtung.png)

.right-column[
**Aber:**

- kein implizites _arguments_.
- kein _super_.
- kann nicht als Konstruktor verwendet werden.

]

---
class: center, middle
background-image: url(img/background.png)

# \`Template ${strings}\` endlich ;-).

---
background-image: url(img/background.png)

.right-column[
**Strings verketten war...**

```JavaScript
var firstVar = 1 + ' Eintrag wurde am ' + tag + '. Tag ' +
   'der Woche erstellt.';

var secondVar = 'Neque porro quisquam est qui \n' +
   'dolorem ipsum quia dolor sit amet, consectetur, \n' +
   'adipisci velit...';
```
**...bestenfalls umständlich**
]


---
background-image: url(img/background.png)

.right-column[
**Mit Template-String ist es viel übersichtlicher:**

```JavaScript
const firstVar = `1 Eintrag wurde am ${tag}. Tag der Woche erstellt.`;

const secondVar = `Neque porro quisquam est qui
   dolorem ipsum quia dolor sit amet, consectetur,
   adipisci velit...`;
```
]

---
class: center, middle
background-image: url(img/background.png)

# Klassen in JavaScript
## Prototype, Vererbung?

---
background-image: url(img/background.png)

.right-column[
**Vererbung mit Prototypen**

```JavaScript
const util = require('util');
function BaseClass() {
}
function DerivedClass() {
    BaseClass.call(this);
}
util.inherits(BaseClass, DerivedClass);

```
Aus der [API](https://nodejs.org/dist/latest-v5.x/docs/api/util.html#util_util_inherits_constructor_superconstructor):
> As an additional convenience, _superConstructor_ will be
> accessible through the *constructor.super_* property.
]

---
background-image: url(img/background.png)

.right-column[
**Klassen**

```JavaScript
class BaseClass {
  constructor() {
  }
}

class DerivedClass extends BaseClass {
  constructor() {
    super();
  }
}
```
]

---
class: center, middle
background-image: url(img/background.png)

# Was kommt nach CommonJS, AMD?
## Sind Module die Lösung?

---
background-image: url(img/background.png)

.right-column[
**Module mit CommonJS bzw. Node.js**

```JavaScript
// module1.js
exports.myFunction = function() {
  console.log('module1');
}

// module2.js
const module1 = require('./module1');
module1.myFunction();
```
]
---
background-image: url(img/background.png)

.right-column[
**Module mit AMD (Browser)**

```JavaScript
define("Name des Moduls", ["Abhängigkeit1", "Abhängigkeit2"], factory);

define('PieChartModule', ['area', 'graph'],
    function (area, graph) {
        var plotModuleExport = {
           plot: function(width, height, data) {
             return graph.drawPie(area.randomGrid(width, height), data);
           }
        };
        return plotModuleExport;
    };
});
```
]
---
background-image: url(img/background.png)

.right-column[
**Module mit ES6**

```JavaScript
// module1.js
export function myFunction() {
  console.log('module1');
}

// module2.js
import * as module1 from './module1';
module1.myFunction();
```
]
---
class: top
background-image: url(img/background_mehr-erfahren.png)

.right-column[
## Mehr erfahren ...

- Dr. Axel Rauschmayer

    [EXPLORING ES6](http://exploringjs.com)

    [Blog](http://www.2ality.com)

- Nicholas C. Zakas

    [Understanding ECMAScript 6](https://github.com/nzakas/understandinges6)
]

---
class: top
background-image: url(img/background.png)

.right-column[
**Was kommt...**

- Jedes! Jahr eine offizielle Erweiterung von JavaScript.
    Nach dem Motto: _Was fertig ist kommt rein._

- ES 2016

    _Array.includes()_ - wir haben 2016!

- ES 2017

    Async - die nächste Variante: _async_ + _await_
    _Object.values()_ und _Object.entries()_
]

---
class: left
background-image: url(img/background.png)

.right-column[
## Danke ;-)

**Ryan Dahl (für [Node.js](https://www.youtube.com/watch?v=ztspvPYybIY))**

**Dr. Axel Rauschmayer (für [Speaking JavaScript](http://speakingjs.com)) **

**Ole Petter Bang (für [Remark](http://remarkjs.com))**
]
