class: center, middle
background-image: url(img/background.png)

### Meine Eindrücke von und Erfahrungen mit
# ES6

---
background-image: url(img/background_martin.png)

.right-column[
# _Hi_ - eine kurze Vorstellung

- Martin Möllenbeck - @moellenbeck
- Gründer der 5Minds (http://www.5minds.de)
- Professioneller Entwickler (~25 Jahren)
  - Backend-/Messaging-Systeme
  - High-Performance Webseiten (u.a. Livetiming DTM)
  - JavaScript, Elixir, Python, C#/F#
]

---
background-image: url(img/background.png)

.right-column[
# ES6 Erfahrung

- seid 2014 in Projekten
- (fast) immer  (nur) auf dem Server
- Zuerst mit Traceur
- Seid Node.js 4.x auf dem Server ohne Transpiler
]

---
class: center, middle
background-image: url(img/background.png)

# Von _var_ nach _let_ + _const_

---
background-image: url(img/background.png)

.right-column[
Mit _var_ mussten wir Dinge wie IIFE lernen:

```JavaScript
/* Crockford empfiehlt */
(function(){
  /* Code, der keine Zeiteffekte hervorruft */
}());     

# oder

/* Dies funktioniert auch */
(function(){
  /* Code, der keine Zeiteffekte hervorruft*/
})();     
```
]

---
background-image: url(img/background.png)

.right-column[
Mit _let_ gibt es Blockscope Variablen

```JavaScript
{
   let myVar = 1;  
}

console.log(myVar);   /* raise - ReferenceError: myVar is not defined */
```
]

---
background-image: url(img/background.png)

.right-column[
Mit _var_ keinen Hinweis auf doppelte Deklaration

```JavaScript
var myVar = 1;

/* ganz viel code - sollten man nicht machen, aber ... */

var myVar = 2; /* sollte eigentlich eine neue Variable sein. */
               /* Es gibt keinen Syntaxfehler, Programm funktioniert */
               /* vielleicht. */
```
]

---
background-image: url(img/background.png)

.right-column[
Mit _const_ gibt es vom Compiler einen Hinweis auf einen Syntaxfehler.

```JavaScript
const myVar = 1;

/* ganz viel code - sollten man nicht machen, aber ... */

const myVar = 2; /* SyntaxError: Identifier 'myVar' has already */
                 /* been declared */
```
]

---
background-image: url(img/background_achtung.png)

.right-column[
# Aber:
```JavaScript
const myVar = [1, 2];

myVar.push(3);
```

Es ist halt nur die Variable _myVar_ konstant.
Array ist ein Referenztyp und das Array bleibt das gleiche Objekt!
]

---
class: center, middle
background-image: url(img/background.png)

# \_this, that, self oder what?
#### arrow-Function oder () => {}

---
background-image: url(img/background.png)

.right-column[
Bei der Verwendung von callback Funktionen, den _this_-Kontext sichern!

```JavaScript
function doSomething() {
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
Mit arrow-Function ist es (für mich) viel einfacher geworden:

```JavaScript
function doSomething() {
  document.addEventListener('click', () => {
    this... /* ist was es sein sollte ;-) */
  });
}
```
]

---
background-image: url(img/background_achtung.png)

.right-column[
# Aber:

- kein implizites _arguments_.
- kein _super_.
- kann nicht als Konstruktor verwendet werden.

]

---
class: center, middle
background-image: url(img/background.png)

# Texte zusammenbauen ...
#### \`Template ${strings}\` endlich ;-).

---
background-image: url(img/background.png)

.right-column[
Strings verketten war immer schon eine sehr __übersichtliche__ Angelegenheit.
```JavaScript
var firstVar = 1 + ' Eintrag wurde am ' + tag + '. Tag ' +
   'der Woche erstellt.';

var secondVar = 'Neque porro quisquam est qui \n' +
   'dolorem ipsum quia dolor sit amet, consectetur, \n' +
   'adipisci velit...';
```
]

---
background-image: url(img/background.png)

.right-column[
Mit Template-String ist es viel übersichtlicher:

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

# Async ohne callbacks?
#### Was geht mit Promises oder co-Routinen?

---
class: center, middle
background-image: url(img/background.png)

# Prototype, Vererbung?
#### Klassen in JavaScript.

---
class: center, middle
background-image: url(img/background.png)

# Prototype, Vererbung?
#### Klassen in JavaScript.

---
class: center, middle
background-image: url(img/background.png)

# Was kommt nach CommonJS, AMD?
#### Sind Module die Lösung.

---
class: middle
background-image: url(img/background_mehr-erfahren.png)

.right-column[
  # Wo kann ich erfahren ...

  - Dr. Axel Rauschmayer
    - EXPLORING ES6 (http://exploringjs.com)
    - Blog (http://www.2ality.com)
  - Nicholas C. Zakas
    - Understanding ECMAScript 6 (https://github.com/nzakas/understandinges6)
]

---
class: center, middle
background-image: url(img/background.png)

# Danke ;-)
##### Auch an:
###### Ryan Dahl (für Node.js) & Dr. Axel Rauschmayer (für Speaking JavaScript) & Ole Ole Petter Bang (für [Remark](http://remarkjs.com))
