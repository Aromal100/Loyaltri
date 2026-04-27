export class UserPrivileges
{

    constructor(page)
    {
        this.page=page;
        this.attendanceAcc=page.locator("//span[text()='Attendance Access']/parent::button");
        this.webPunch=page.locator("//span[text()='Assign']/parent::button").last();
        this.uncheckedEmp=page.locator(".ant-checkbox-wrapper:not(.ant-checkbox-wrapper-checked)").nth(1);
        this.selectAll=page.getByRole('checkbox', { name: 'Select All' });
        this.save=page.locator("//span[text()='Save']/parent::button");
        this.attandanceAccMessage=page.locator(".ant-notification-notice-description").last();

    }


    async addNewWebPunch()
    {
        this.attendanceAcc.click();
        this.webPunch.click();
        this.uncheckedEmp.check();
        this.save.click();
    }

}