import express, {Application} from 'express';
import userRoutes from './routes/usuario'
import cors from 'cors'

import db  from './database/connection'

class Server {

    private app: Application;
    private port: string;
    private apiPaths ={
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Metodos de inicio
        this.dbConnection(),
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log("Database en linea")
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        //Cors
        this.app.use( cors());

        //Leer body
        this.app.use( express.json());

        //Carpeta publica
        this.app.use( express.static('public'))
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo http://localhost:"+this.port);
        });
    }
}

export default Server;