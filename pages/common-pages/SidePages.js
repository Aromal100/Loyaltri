export class SidePages
{
    constructor(page)
    {
        this.page=page;
        this.company=page.locator("//p[text()='Company']/parent::div");
        this.allEmp=page.locator("//a[@href='/employees']");
    }

    async goToAllEmployees()
    {
        await this.company.click();
        await this.allEmp.click();
    }

}