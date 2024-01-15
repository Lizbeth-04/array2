'use strict'
let Familia=["Madre", "Padre","Hijo","Hija"];
alert(Familia)
let nuevosmienbros =Familia.concat("Abuelito","Abuelita");
alert(nuevosmienbros)
nuevosmienbros.forEach(Familia => alert(Familia));
let lugarHijo =nuevosmienbros.indexOf("Abuelita")
alert(lugarHijo);
let subFamilia =nuevosmienbros.slice()
alert(nuevosmienbros)
let miembro = nuevosmienbros.find(Familia=> Familia === "Madre");
alert( miembro);
let miembrosConE = nuevosmienbros.filter(Familia => Familia.includes('i'));
alert(miembrosConE);
let familiaModificada = nuevosmienbros.map(Familia => Familia.toUpperCase());
alert(nuevosmienbros)
let orden=familiaModificada .sort();
alert(orden);