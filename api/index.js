import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    return res.send('Sveiki atvyke i API puslapi. Pasirinkite viena is galimu veiksmu: suma, atimtis, daugyba, dalyba');
});

apiRouter.get('/api/:veiksmas', (req, res) => {
    const mathFunc = req.params.veiksmas;
    if (mathFunc !== 'suma' && mathFunc !== 'atimtis' && mathFunc !== 'daugyba' && mathFunc !== 'dalyba') {
        return res.send('Norima atlikti funkcija yra neatpazinta');
    }
    return res.send('Norint susumuoti, reikia nurodyti 2 skaicius');
});

apiRouter.get('/api/:veiksmas/:pirmas', (req, res) => {
    return res.send('Norint susumuoti, dar truksta vieno skaiciaus');
});

apiRouter.get('/api/:veiksmas/:a/:b', (req, res) => {
    const a = +req.params.a;
    const b = +req.params.b;

    if (isNaN(a)) {
        return res.send(`Pirmas parametras nera tikras skaicius`);
    }
    if (isNaN(b)) {
        return res.send(`Antras parametras nera tikras skaicius`);
    }

    const sum = +(a + b).toFixed(10);
    return res.send(`${a}+${b}=${sum}`);
});


// Reikia priimti varda ir pavarde, ir graziname inicialus.
// /api/abbr/chuck/norris => C.N.
apiRouter.get('/api/abbr/......', (req, res) => {
    return res.send('......');
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas: hh:mm:ss
apiRouter.get('/api/time', (req, res) => {
    return res.send('......');
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get('/api/time-as-text', (req, res) => {
    return res.send('......');
});

export { apiRouter };