import { test } from "../pages/fixtures";

test("Visit page, handle pop-up, select quantity, and click next", async ({
	landingPage,
	appointmentDetails,
}) => {
	await landingPage.navigate();
	await landingPage.clickQuantityDropdown();
	await landingPage.clickNextButton();
	await landingPage.clickOkButton();

	// Verify that the "Nächster Termin" text is visible
	await appointmentDetails.upcomingAppointmentVisible();

	await appointmentDetails.returnVisibleAppointmentDate();

	const extractedDate = await appointmentDetails.extractDateOnly();
	if (extractedDate) {
		const extractedDateObj = new Date(
			extractedDate.split(".").reverse().join("-")
		); // Convert "DD.MM.YYYY" to "YYYY-MM-DD"
		console.log("Converted Date", extractedDateObj);

		const startDate = new Date("2025-05-01");
		const endDate = new Date("2025-05-28");

		// Check if the extracted date falls within the range
		if (extractedDateObj >= startDate && extractedDateObj <= endDate) {
			console.log("The extracted date is within the range.");
		} else {
			console.log("The extracted date is outside the range.");
		}
	} else {
		console.log("No valid date found in the text content.");
	}
});
