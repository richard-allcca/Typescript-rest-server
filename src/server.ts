import { getClub, getResultado } from './database';

const express = require('express');

export default function server() {
  const app = express();	

  app.get('/resultados/:equipo1/:equipo2',(req:any,res:any)=>{
    try {
      let team1 = getClub(req.params.equipo1);
      let team2 = getClub(req.params.equipo2);
      let match = getResultado(team1,team2);
  console.log(match);
      if (match.score) {
        res.json({
          date: match.date,
          result: `${team1} ${match.score.ft[0]} - ${match.score.ft[1]} ${team2}`
        })
      }else{
        res.json({
          date: match.date,
        })
      }

      res.json({
        match
      })
      
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  })

  return app
} 