import {CountryEntity} from "../../entities/country.entity";
import {CountryRepository} from "../../repositories/country.repository";

export interface GetCountriesUseCase{
    execute():Promise<CountryEntity[]>
}

export class GetCountries implements GetCountriesUseCase{
    constructor(
        private readonly repository:CountryRepository
    ) {
    }

    execute(): Promise<CountryEntity[]> {
        return this.repository.getAll()
    }

}