(function(){
  /* Code, der keine Zeiteffekte hervorruft */
  var myVar2 = 1;
}());

/* raise - ReferenceError: myVar is not defined */
console.log(myVar2);
