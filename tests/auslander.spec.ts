import { test, expect } from '@playwright/test';

test('Visit page, handle pop-up, select quantity, and click next', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto('https://tevis.ekom21.de/fra/select2?md=35');

    // Wait for the quantity dropdown to be visible and click it
    const quantityDropdown = page.getByRole('button', { name: 'Erhöhen der Anzahl des' });
    await quantityDropdown.click();

    // Click on the "Next" button after ensuring it is visible
    const nextButton = page.getByRole('button', { name: 'Weiter' });
    await nextButton.click();

    // Handle the confirmation dialog by clicking "OK"
    const okButton = page.getByRole('button', { name: 'OK', exact: true });
    await okButton.click();

    // Verify that the "Nächster Termin" text is visible
    const nextAppointmentText = await page.waitForSelector('text=Nächster Termin', { state: 'visible' });
    expect(nextAppointmentText).toBeTruthy(); // Ensure the element exists

    //extract the text content
    const appointmentDate = await page.locator('dl > dd').nth(8);
    const appointmentDateText = await appointmentDate.textContent();
    console.log('Appointment Date:', appointmentDateText);
    
    // Extract just the date using a regular expression
    const dateMatch = appointmentDateText?.match(/\d{2}\.\d{2}\.\d{4}/);
    const extractedDate = dateMatch ? dateMatch[0] : null;

    if (extractedDate) {
        console.log('Extracted Date:', extractedDate); // Logs "17.09.2025"

        // Convert the extracted date to a JavaScript Date object
        const extractedDateObj = new Date(extractedDate.split('.').reverse().join('-')); // Convert "DD.MM.YYYY" to "YYYY-MM-DD"

        // Define the date range
        const startDate = new Date('2025-05-01'); // Start of the range
        const endDate = new Date('2025-05-28');   // End of the range

        // Check if the extracted date falls within the range
        if (extractedDateObj >= startDate && extractedDateObj <= endDate) {
            console.log('The extracted date is within the range.');
        } else {
            console.log('The extracted date is outside the range.');
        }
    } else {
        console.log('No valid date found in the text content.');
    }
});