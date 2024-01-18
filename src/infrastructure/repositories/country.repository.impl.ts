import {CountryDatasource, CountryEntity, CountryRepository} from "../../domain";

export class CountryRepositoryImpl implements CountryRepository{

    constructor(
        private readonly datasource:CountryDatasource
    ) {
    }
    getAll(): Promise<CountryEntity[]> {
        return this.datasource.getAll()
    }
    findById(id: number): Promise<CountryEntity> {
        return this.datasource.findById(id)
    }

    create(data: any): Promise<CountryEntity> {
        return this.datasource.create(data)
    }
    updateById(data: any,id:number): Promise<CountryEntity> {
        return this.datasource.updateById(data,id)
    }

    deleteById(id: number): Promise<CountryEntity> {
        return this.datasource.deleteById(id)
    }


}