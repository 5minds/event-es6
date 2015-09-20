class: center, middle
background-image: url(background-intro.png)

# JavaScript heute
### (oder ES6 und ES7  in einem Schnellüberblick)

---
class: center, middle
background-image: url(background.png)

# Einführung in ECMA Script 2015
### (alias ES 6)

---
class: middle
background-image: url(background.png)

# Variablen (Block bindings)

- Bisher gibt es nur:
  - var  function scoped
- Neu:
  - let: block scoped
  - const: wie der Name sagt ;-)
- Daher ... nie mehr var!!

---
class: middle
background-image: url(background.png)

# Demo zu Variablen (block bindings):

```JavaScript
function f() {
  var y = 'outer';
  {
    let x;
    {
      // Okay, block scoped
      const x = 'bar';
      // Fehler, const
      x = 'foo';
      y = 'inner';
    }
    // Fehler, bereits deklariert
    let x = 'inner';
  }
  console.log(y); //y==='inner'
}
```

---
class: middle
background-image: url(background.png)

# Auflösen bzw. Zuweisen (Destructuring)
- Mehrfach Zuweisung in einer Zeile.
- Einfaches Tauschen von 2 (oder mehr) Variablen

---
class: middle
background-image: url(background.png)

# Demo zu Auflösen bzw. Zuweisen (Destructuring):
```JavaScript
let [a, b] = [1, 2];		

a = 'foo';
b = 'bar';

[a, b] = [b, a];

console.log(a); // a === 'bar'
console.log(b); // b === 'foo
```

---
class: middle
background-image: url(background.png)

# String und reguläre Ausdrücke

- Besseres Unicode
  - auch für Regexp (/u)
- Mehr Methoden für String
  - startsWith
  - endsWith
  - includes
- Template String

---
class: middle
background-image: url(background.png)

# Demo zu den neuen String-Funktionen:

```JavaScript
console.log("\u0061");      // "a"		
console.log("\u20BB7");     // "₻7"

console.log(msg.startsWith("Hello"));  // true
console.log(msg.endsWith("!")); // true
console.log(msg.includes("o")); // true

let name = "Martin"
console.log(`Hello ${name}`); // Hello Martin
```
