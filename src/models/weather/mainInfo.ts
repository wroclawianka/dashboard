export default class MainInfo {
    location: string;
    description: string;
    temp: number;
    icon: string;
    constructor(location: string, descripton: string, temp: string, icon: string) {
        this.location = location;
        this.description = descripton;
        this.temp = parseInt(temp);
        this.icon = icon;
    }
}