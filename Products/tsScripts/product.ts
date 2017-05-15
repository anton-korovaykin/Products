export class Product{
	Id: number;
	Name: string;
	Price: number;
	LastUpdate: Date;
	Image: string

	constructor(Id: number, Name: string, Price: number, LastUpdate: Date, Image: string){
		this.Id=Id; this.Name=Name;
		this.Price = Price; this.LastUpdate = LastUpdate;
		this.Image = Image;
	}
}