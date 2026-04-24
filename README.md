# Shift Scheme Testing

To test the Shift Scheme with specific drag-and-drop requirements (Off Days on Sat/Sun and First Shift on Mon-Fri), use the following logic in `addShiftScheme`.

```javascript
    async addShiftScheme(name) {
        await this.shiftScheme.click();
        await this.createShiftScheBtn.click();
        await this.entershiftSchName.fill(name);
        await this.shiftOpt.click();
        await this.selectShift.click();

        // Fill all available "Drop here" cells
        // Pattern: 5 days shift (Mon-Fri), 2 days Off Day (Sat-Sun)
        let totalCells = await this.dropCells.count();
        for (let i = 0; i < totalCells; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);

            if (i % 7 < 5) {
                // Monday - Friday: Drag first shift
                await this.drag2.dragTo(target);
            } else {
                // Saturday - Sunday: Drag Off Day
                await this.drag1.dragTo(target);
            }
        }

        await this.saveCon.click();
        await this.proceed.click();
    }
```

### Stable Locators (in Constructor)

```javascript
this.drag1 = page.getByText("Off Day").first();
// Find the sibling of the "Off Day" container to get the first available shift
this.drag2 = page.locator("//p[text()='Off Day']/parent::div/following-sibling::div").first();
```

## Running the Test

Run the test in headed mode to verify the drag-and-drop behavior:

```bash
npx playwright test tests/admin-settings-test/ShiftTest.spec.js --headed
```
