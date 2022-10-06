import { BrandsRepository } from "@repositories/brands.repository";
import { join } from "path";
import fs from "fs";

export class BrandsImplementation implements BrandsRepository {
	private file = join(__dirname, "..", "..", "database/data-car.json");

	async fetchBrands(): Promise<object> {
		let brands = {};

		await new Promise(resolve => {
			fs.readFile(this.file, "utf-8", (error, data) => {
				if (error) throw error;

				brands = JSON.parse(data);
				console.log(brands);
				resolve(brands);
			});
		});

		return brands;
	}
}
