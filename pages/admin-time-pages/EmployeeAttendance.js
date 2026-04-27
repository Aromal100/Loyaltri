import datas from '../../config/logindata.json';

export class EmployeeAttendance {
    constructor(page) {
        this.page = page;
        this.monthlyView = page.locator("//span[text()='Monthly View']/parent::button");
        this.empName = page.locator(`//span[text()='${datas.userCred.empname}']/ancestor::button`);
        this.activePdate = page.locator("div.bg-primary:has(p.font-medium) ~ p.ant-dropdown-trigger");
        this.viewLog = page.locator("//span[text()='View Log']");


    }

    async viewAttendanceTimeline() {
        await this.monthlyView.click();
        await this.empName.click();
        await this.page.waitForTimeout(3000);
        await this.empName.click();
        await this.activePdate.click();
        await this.page.evaluate(() => {
            document.body.style.zoom = "0.75";
        });
        await this.viewLog.click();
    }
}