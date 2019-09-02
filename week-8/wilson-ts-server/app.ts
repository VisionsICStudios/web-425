/*
============================================
; Title:  app.ts (WK 8)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 30 August 2019
; Description: Server-Side Communications
; with Node.js and Express
;===========================================
*/

import * as express from "express";

const app = express();

interface Athlete {
    id: number,
    firstName: string,
    lastName: string
}

const athletes: Athlete[] = [
    { id: 1, firstName: "Jesse", lastName: "Owens"},
    { id: 2, firstName: "Babe", lastName: "Ruth"},
    { id: 3, firstName: "Wayne", lastName: "Gretzky"},
    { id: 4, firstName: "Michael", lastName: "Jordan"},
    { id: 5, firstName: "Tom", lastName: "Brady"},
];

function getAthletes(): Athlete[] {
    return athletes;
}

app.get('/', (req, res) => {
    res.send('The famous Athletes can be found at the URL http://localhost:3000/api/athletes');
});

app.get('/api/athletes', (req, res) => {
    res.json(getAthletes());
});

function getAthleteById(athleteId: number): Athlete {
    return athletes.find(a => a.id == athleteId);
}

app.get('/api/athlete/:id', (req, res) => {
    res.json(getAthleteById(req.params.id));
});

const server = app.listen(3000, "localhost", () => {
    console.log("App Listening on port 3000");
});
