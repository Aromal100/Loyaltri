export class SidePages
{
    constructor(page)
    {
        this.page=page;
        this.company=page.locator("//p[text()='Company']/parent::div");
        this.allEmp=page.locator("//a[@href='/employees']");
        this.settings=page.locator("//p[text()='Settings']/parent::div")
        this.leave=page.locator("//a[@href='/Leave']");
      
    }

    async goToAllEmployees()
    {
        await this.company.click();
        await this.allEmp.click();
    }

    async goToLeavePage()
    {
        await this.settings.click();
        await this.leave.click();

    }

}