import {CountryEntity} from "../entities/country.entity";

export abstract class CountryDatasource{
    //TODO validar el objeto data dentro de la funcion create con yup
    abstract create(data:any):Promise<CountryEntity>;
    abstract getAll():Promise<CountryEntity[]>
    abstract findById(id:number):Promise<CountryEntity>
    abstract updateById(data:any,id:number):Promise<CountryEntity>
    abstract deleteById(id:number):Promise<CountryEntity>

}