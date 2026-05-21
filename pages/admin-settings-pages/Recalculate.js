import datas from '../../config/logindata.json'

export class Recalculate
{
    constructor(page)
    {
       this.page=page;
       this.recalculateBtn=page.locator("//span[text()='Recalculate']/parent::button");
       this.statutoryCompliance=page.locator("input.ant-checkbox-input").first();
       this.attendance=page.locator("input.ant-checkbox-input").nth(1);
       this.payroll=page.locator("input.ant-checkbox-input").nth(2);
       this.dateOpt=page.getByPlaceholder("dd--mm--yyyy").first();
       this.date=page.locator(`[title="${datas.userCred.joinDate}"]`);
       this.understand1=page.locator("input.ant-checkbox-input").nth(3);
       this.understand2=page.locator("input.ant-checkbox-input").nth(4);
       this.understand3=page.locator("input.ant-checkbox-input").nth(5);
       this.understand4=page.locator("input.ant-checkbox-input").nth(6);
       this.understand5=page.locator("input.ant-checkbox-input").nth(7);
       this.save=page.locator("//div[text()='Save & Continue']/ancestor::button");
       this.searchEmp=page.getByPlaceholder("Search Employees").first();
       this.selectEmp=page.locator("input.ant-checkbox-input").nth(1);
       this.recalculatedMessage=page.locator(".ant-notification-notice-description").last();

    }


    async addRecalculate()
    {
      await this.recalculateBtn.click();
      await this.statutoryCompliance.click();
      await this.attendance.click();
      await this.payroll.click();
      await this.dateOpt.click();
      await this.date.click();
      await this.understand1.click();
      await this.understand2.click();
      await this.understand3.click();
      await this.understand4.click();
      await this.understand5.click();
      await this.save.click();
      await this.searchEmp.type(datas.userCred.empname,{delay:500});
      await this.selectEmp.click();
      await this.save.click();



    }
}