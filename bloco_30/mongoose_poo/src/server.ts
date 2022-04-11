import express, { Router } from 'express';
import connection from './models/connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(port = 3000) {
    connection();
    return this.app.listen(port, () => console.log('Ouvindo na porta 3000'));
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;