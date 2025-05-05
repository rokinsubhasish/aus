import { type Locator, type Page } from "@playwright/test";

export class LandingPage {
	readonly page: Page;
	readonly url: string;
	readonly quantityDropdown: Locator;
	readonly nextButton: Locator;
	readonly okButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.url = "https://tevis.ekom21.de/fra/select2?md=35";
		this.quantityDropdown = page.getByRole("button", {
			name: "Erhöhen der Anzahl des",
		});
		this.nextButton = page.getByRole("button", { name: "Weiter" });
		this.okButton = page.getByRole("button", { name: "OK", exact: true });
	}
	async navigate() {
		await this.page.goto(this.url);
	}
	async clickQuantityDropdown() {
		await this.quantityDropdown.click();
	}
	async clickNextButton() {
		await this.nextButton.click();
	}
	async clickOkButton() {
		await this.okButton.click();
	}
}
