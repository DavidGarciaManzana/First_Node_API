import {Router} from "express";
import {CountryController} from "./controller";

export class CountryRoutes{
    static get routes():Router{
        const router = Router();


        const countryController = new CountryController()
        router.get('/',(req,res) =>countryController.getCountries(req,res) )
        router.get('/:id',(req,res) =>countryController.getCountryById(req,res) )
        router.post('/',(req,res) =>countryController.createCountry(req,res) )
        router.put('/:id',(req,res) =>countryController.updateCountry(req,res) )
        router.delete('/:id',(req,res) =>countryController.deleteCountry(req,res) )
        return router
    }
}