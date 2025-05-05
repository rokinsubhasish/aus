import { test as base } from "@playwright/test";
import { LandingPage } from "./landing.page";
import { AppointmentDetails } from "./appointment-details.page";
export { expect } from "@playwright/test";

type TestFixtures = {
	landingPage: LandingPage;
	appointmentDetails: AppointmentDetails;
};

export const test = base.extend<TestFixtures>({
	landingPage: async ({ page }, use) => {
		await use(new LandingPage(page));
	},
	appointmentDetails: async ({ page }, use) => {
		await use(new AppointmentDetails(page));
	},
});
