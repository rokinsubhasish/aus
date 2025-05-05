import { Locator, Page, expect } from "@playwright/test";

export class AppointmentDetails {
	readonly page: Page;
	readonly appointmentDate: Locator;
	readonly nextAppointmentText: Locator;

	constructor(page: Page) {
		this.page = page;
		this.nextAppointmentText = page.getByText("Nächster Termin");
		this.appointmentDate = page.locator("dl > dd").nth(8);
	}
	async upcomingAppointmentVisible() {
		await expect(this.nextAppointmentText).toBeVisible(); // Ensure the element exists
	}
	async returnVisibleAppointmentDate() {
		const appointmentDateText = await this.appointmentDate.textContent();
		console.log("Appointment Date:", appointmentDateText);
		return appointmentDateText;
	}

	async extractDateOnly() {
		const appointmentDateText = await this.returnVisibleAppointmentDate();
		const dateMatch = appointmentDateText?.match(/\d{2}\.\d{2}\.\d{4}/);
		const extractedDate = dateMatch ? dateMatch[0] : null;
		console.log("Extracted Date:", extractedDate);
		return extractedDate;
	}
}
