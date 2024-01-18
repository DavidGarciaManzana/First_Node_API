import {CountryEntity} from "../../entities/country.entity";
import {CountryRepository} from "../../repositories/country.repository";

export interface GetCountryUseCase{
    execute(id:number):Promise<CountryEntity>
}

export class GetCountry implements GetCountryUseCase{
    constructor(
        private readonly repository:CountryRepository
    ) {
    }

    execute(id: number): Promise<CountryEntity> {
        return this.repository.findById(id)
    }

}