import {CountryEntity} from "../../entities/country.entity";
import {CountryRepository} from "../../repositories/country.repository";

export interface CreateCountryUseCase{
    execute(data:any):Promise<CountryEntity>
}

export class CreateCountry implements CreateCountryUseCase{
    constructor(
        private readonly repository:CountryRepository
    ) {
    }

    execute(data: any): Promise<CountryEntity> {
        return this.repository.create(data)
    }

}