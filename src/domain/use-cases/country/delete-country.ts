import {CountryEntity} from "../../entities/country.entity";
import {CountryRepository} from "../../repositories/country.repository";

export interface DeleteCountryUseCase{
    execute(id:number):Promise<CountryEntity>
}

export class DeleteCountry implements DeleteCountryUseCase{
    constructor(
        private readonly repository:CountryRepository
    ) {
    }

    execute(id: number): Promise<CountryEntity> {
        return this.repository.deleteById(id)
    }

}