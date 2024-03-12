import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    res.send('Sveiki atvyke i API puslapi...');
});

// apiRouter.get('/api......', (req, res) => {
//     res.send('7+5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7-5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7*5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7/5=12');
// });

export { apiRouter };