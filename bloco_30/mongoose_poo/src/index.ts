import RecordsController from "./controllers/RecordsController";
import { IRecord } from "./interfaces";
import CustomRouter from "./Routes/Router";
import App from "./server";

const server = new App();

const recordsController = new RecordsController();

const recordsRouter = new CustomRouter<IRecord>();
recordsRouter.addRoute(recordsController);

server.addRouter(recordsRouter.router);

server.startServer();