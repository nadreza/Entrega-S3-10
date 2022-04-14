function positions(firstPlace, secondPlace, lastPlace) {
   let podio = [firstPlace, secondPlace, lastPlace];

   if (lastPlace === 'Daniel') {
       podio = [firstPlace, lastPlace, secondPlace];
   } else if (secondPlace === 'Daniel') {
       podio = [secondPlace, firstPlace, lastPlace];
   } else {
       podio = [firstPlace, secondPlace, lastPlace];
   };

   return podio;
};


console.log(positions('Matheus', 'Tiago', 'Daniel'));
