import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
    
    await page.goto('https://siigoquote.azurewebsites.net/accountStatementNit')

    await page.waitForTimeout(2000);

    const inputField = page.locator('[label="Digita tu número de Cédula o NIT"] input');
    await inputField.fill('180920259');
    
    const locator = page.locator('//button[@type="submit"]');
    await locator.click();

    const checkboxLocator = page.locator('input[type="checkbox"]');
    await checkboxLocator.click({ timeout: 120000 })

   await page.pause()
});
