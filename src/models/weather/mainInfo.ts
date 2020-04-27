export default class MainInfo {
    location: string;
    description: string;
    temp: number;
    //TODO: icon
    constructor(location: string, descripton: string, temp: string) {
        this.location = location;
        this.description = descripton;
        this.temp = parseInt(temp);
    }
}