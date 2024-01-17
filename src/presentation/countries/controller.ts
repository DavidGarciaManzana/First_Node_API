import {Request,Response} from "express";
let countries = [
    {id:1,country:"Mexico",key:"MX"},
    {id:2,country:"United States",key:"US"},
    {id:3,country:"Canada",key:"CA"}
]
export class CountryController{

    // Dep. Iny.
    constructor() {
    }
    //CRUD READ
    getCountries = (req:Request, res:Response) => {
        return res.json(countries)
    }
    //CRUD READ
    getCountryById = (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        const country = countries.find(country => country.id ===id)
        country ?
            res.json(country) :
            res.status(404).json({error:` country with id: ${id} not found`})

    }
    //CRUD CREATE
    createCountry = (req:Request, res:Response) => {
        const {country,key} = req.body;
        if(!country) {return res.status(400).json({error: `Country property is required`})}
        if(!key) {return res.status(400).json({error: `Key property is required`})}
        const newCountry ={
            id:countries.length+1,
            country:country,
            key:key
        }
        countries.push(newCountry)

        res.json(newCountry)
    }
    //CRUD UPDATE (Parecido al getbyId pero con put)
    updateCountry = (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        const oldCountry = countries.find(country => country.id ===id)
        if(!oldCountry){
            return  res.status(404).json({error:`Country with id ${id} not found`})
        }
        const {country,key}=req.body;
        if(!country) {return res.status(400).json({error: `Country property is required`})}
        //!This works because objects are stored by reference
        oldCountry.country = country;
        oldCountry.key=key || oldCountry.key //use antique data if user doesnt provide a new one
        res.json(oldCountry)
    }

    //CRUD DELETE
    deleteCountry = (req:Request, res:Response) => {
    const id:number = Number(req.params.id);
    if(isNaN(id)){
        return  res.status(400).json({error:`ID argument is not a number`})
    }
    const country = countries.find(country => country.id ===id)
    if (!country) return res.status(404).json({error:`Country with id ${id} not found`})
    countries = countries.filter(country => country.id !== id);
    res.json(`Country with id: ${id} successfully deleted`)
    }
}