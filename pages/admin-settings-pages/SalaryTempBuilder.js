import datas from '../../config/logindata.json'

export class SalaryTempBuilder
{

    constructor(page)
    {
       this.page=page;
       this.createSalaryTemp=page.locator("//span[text()='Create Salary Template ']/parent::button");
       this.tempName=page.getByPlaceholder("Enter Template Name");
       this.employType=page.locator("//span[text()='Regular']/parent::div");
       this.paymentScheduleBtn=page.locator("div.ant-select-selector");
       this.payementScheduleOpt=page.locator("[title='Monthly']");
       this.save=page.locator("//div[text()='Save & Continue']/ancestor::button");
       this.proceed=page.locator("//span[text()='Yes,Proceed']/parent::button");
       this.searchEmp=page.getByPlaceholder("Search Employees").first();;
       this.selectEmp=page.locator("input.ant-checkbox-input").nth(1);
       this.salaryTempCreatedMessage = page.locator(".ant-notification-notice-description").last();


    }


    async addSalaryTempBuilder(name)
    {
       await this.createSalaryTemp.click(); 
       await this.tempName.fill(name);
       await this.employType.click();
       await this.paymentScheduleBtn.click();
       await this.payementScheduleOpt.click();
       await this.save.click();
       await this.proceed.click();
       await this.page.waitForTimeout(2000);
       await this.searchEmp.type(datas.userCred.empname);
       await this.selectEmp.click();
       await this.page.waitForTimeout(2000);
       await this.save.click();
       await this.proceed.click();

    }

}