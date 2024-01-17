import {Router} from "express";
import {CountryController} from "./countries/controller";
import {CountryRoutes} from "./countries/routes";

export class AppRoutes{
    static get routes():Router{
        const router = Router();

        router.use('/api/countries',CountryRoutes.routes )
        return router
    }
}