import next from "next";
import express from "express";

const port = process.env.port || 3000;
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    // express setup
    const expressApp = express();

    // declaring routes for our pages
    expressApp.get('/', (req:any, res:any) => {
        return app.render(req, res, '/', req.query)
    })

    // fallback all request to next request handler
    expressApp.all('*', (req:any, res:any) => {
        return handle(req, res)
    })

    expressApp.listen(port, ()=>{
        console.log(`>  Ready on http://localhost:${port}`);
    })
});
