import {randomSupervillain} from 'supervillains';
import { randomSuperhero } from 'superheroes';

console.log(`"${randomSupervillain()}" is a supervillain.`);
//=> 'Mud Pack'

// display random superheros
console.log(`"${randomSuperhero()}" is a superhero.`);


/*
    What you'll notice after running 'node index.js' || 'nodemon index.js' , you will get a warning indicating that you have module that your curring code module depend on and could be changed at any time by their various authors
*/