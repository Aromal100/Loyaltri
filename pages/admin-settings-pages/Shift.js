export class Shift {
    constructor(page) {
        this.page = page;
        this.createShiftBtn = page.locator("//span[text()='Create Shift']/parent::button");
        this.entershift = page.getByPlaceholder("Enter Shift");
        this.checkIn = page.locator("//div[contains(@class,'ant-picker ant-picker')]").first();
        this.checkOut = page.locator("//div[contains(@class,'ant-picker ant-picker')]").nth(1);
        this.allowBreak = page.locator("//button[@role='switch']").last();
        this.unpaid = page.locator("//div[contains(@class,'ant-picker ant-picker')]").nth(3);
        this.timeIn = page.locator("[data-value='9']").first();
        this.nTimeIn = page.locator("[data-value='19']").first();
        this.ok = page.locator("//span[text()='OK']/parent::button");
        this.timeOut = page.locator("//div[text()='18']").nth(2);
        this.nTimeOut = page.locator("//div[text()='23']").nth(2);
        this.ok2 = page.locator("//span[text()='OK']/parent::button").last();
        this.unpaidTime = page.locator("//div[text()='10']").last();
        this.unpaid2 = page.locator("//div[contains(@class,'ant-picker ant-picker')]").nth(4);
        this.save = page.locator("//span[text()='Save']/parent::button");
        this.nightSwift = page.locator("//button[@role='switch']").nth(3);
        this.shiftCreatedMessage = page.locator(".ant-notification-notice-description").last();

        //shift Scheme
        this.shiftScheme = page.locator("//p[text()='Shift Scheme']/ancestor::button");
        this.createShiftScheBtn = page.locator("//span[text()='Create Shift Scheme']/parent::button");
        this.entershiftSchName = page.getByPlaceholder("Enter Shift Scheme Name");
        this.shiftOpt = page.locator(".ant-select-selector").last();
        this.selectShift = page.locator(".ant-select-item.ant-select-item-option").first();
        this.drag1 = page.getByText("Off Day").first();
        this.drag2 = page.locator(".relative.min-w-32").nth(1);
        this.dropCells = page.getByText("Drop here");
        this.saveCon = page.locator("//div[text()='Save & Continue']/ancestor::button");
        this.proceed = page.locator("//span[text()='Yes,Proceed']/parent::button");






    }

    async addMorningShift(name) {
        await this.createShiftBtn.click();
        await this.entershift.fill(name);
        await this.checkIn.click();
        await this.timeIn.click();
        await this.ok.click();
        await this.checkOut.click();
        await this.timeOut.click();
        await this.ok2.click();
        await this.allowBreak.click();
        await this.unpaid.click();
        await this.unpaidTime.click();
        await this.ok2.click();
        await this.save.click();


    }

    async addNightShift(name) {
        await this.createShiftBtn.click();
        await this.entershift.fill(name);
        await this.nightSwift.click();
        await this.checkIn.click();
        await this.nTimeIn.click();
        await this.ok.click();
        await this.checkOut.click();
        await this.nTimeOut.click();
        await this.ok2.click();
        await this.allowBreak.click();
        await this.unpaid2.click();
        await this.unpaidTime.click();
        await this.ok2.click();
        await this.save.click();

    }

    async scrollWeekContainer() {
    await this.page.mouse.wheel(0, 300);
}

    async addShiftScheme(name) {
        await this.shiftScheme.click();
        await this.createShiftScheBtn.click();
        await this.entershiftSchName.fill(name);
        await this.shiftOpt.click();
        await this.selectShift.click();

        //const totalCells = await this.dropCells.count();


        // while (await this.page.getByText("Drop here").count() > 0) {
        //     const source = this.page.locator(".relative.min-w-32").nth(1); // re-fetch
        //     const target = this.page.getByText("Drop here").first(); // always next empty

        //     await source.hover();
        //     await this.page.mouse.down();
        //     await target.hover();
        //     await this.page.waitForTimeout(300);
        //     await this.page.mouse.up();
        // }

        // Drag first shift to Monday - Friday (first 5 empty cells)
        for (let i = 0; i < 5; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag2.dragTo(target);
        }

        // Drag Off Day to Saturday and Sunday (remaining 2 empty cells)
        for (let i = 0; i < 2; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag1.dragTo(target);
        }

        for (let i = 0; i < 5; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag2.dragTo(target);
        }

        for (let i = 0; i < 2; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag1.dragTo(target);
        }

        for (let i = 0; i < 5; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag2.dragTo(target);
        }

          for (let i = 0; i < 2; i++) {
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag1.dragTo(target);
        }


        for (let i = 0; i < 5; i++) {
             await this.scrollWeekContainer();
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag2.dragTo(target);
        }

          for (let i = 0; i < 2; i++) {
             await this.scrollWeekContainer();
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag1.dragTo(target);
        }

        for (let i = 0; i < 5; i++) {
             await this.scrollWeekContainer();
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag2.dragTo(target);
        }

          for (let i = 0; i < 2; i++) {
             await this.scrollWeekContainer();
            const target = this.dropCells.first();
            await target.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(200);
            await this.drag1.dragTo(target);
        }



        

        await this.saveCon.click();
        await this.proceed.click();

    }




}