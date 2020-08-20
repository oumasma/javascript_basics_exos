let numb = prompt ("De quel nombre veux-tu calculer la factorielle ?");

function fact(numb) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (numb === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return numb * fact(numb-1);
}
console.log(`Le resultat est : ${fact(numb)}`);


/*Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
Utilisateur rentre un nombre (par ex 4)
Dans la console le résultat suivant est affiché
"Le résultat est : 24"*/
