import { Clubs, Matches, Club, Match } from './types';


const clubs: Clubs = require('../data/clubs.json');
const resultados: Matches = require('../data/resultados.json');

/**
 * It takes a string as an argument and returns a Club object
 * @param {string} code - The code of the club you want to get.
 * @returns the club object.
 */
export function getClub(code:string): string {
  const club = clubs.clubs.find(c => c.code === code);
  if (!club) {
    throw new Error(`No se encontró el club con código ${code}`);
  }
  return club.name;
}


/**
 * It takes two strings as parameters, and returns a Match object
 * @param {string} eq1 - The name of the first team
 * @param {string} eq2 - string
 * @returns the match object that matches the team1 and team2 parameters.
 */
export function getResultado(eq1:string,eq2:string): Match {
  const match = resultados.matches.find(match => {
    return match.team1 === eq1 && match.team2 === eq2
  })
  if (!match) {
    throw new Error(`No se encontró el resultado del equipo ${eq1} contra el equipo ${eq2}`);
  }
      
  return match;
}