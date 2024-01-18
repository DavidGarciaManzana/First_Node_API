import {CountryEntity} from "../../entities/country.entity";
import {CountryRepository} from "../../repositories/country.repository";

export interface UpdateCountryUseCase{
    execute(data:any,id:number):Promise<CountryEntity>
}

export class UpdateCountry implements UpdateCountryUseCase{
    constructor(
        private readonly repository:CountryRepository
    ) {
    }

    execute(data: any,id:number): Promise<CountryEntity> {
        return this.repository.updateById(data,id)
    }

}