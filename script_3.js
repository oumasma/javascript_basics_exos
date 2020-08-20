let numb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let symb = "#"
let space = " "
for (var i = 1; i <= numb; i++) {
	console.log(space.repeat(numb - i) + symb.repeat(i))
}