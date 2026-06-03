import datas from '../../config/logindata.json'

export class MakeaPost
{
    constructor(page)
    {
       this.page=page;
       this.postSettings=page.locator("//a[contains(@class,'underline')]");
       this.toEntireOrg=page.locator("//span[@class=('ant-dropdown-trigger w-full')]/div").first();
       this.toYourEn=page.locator("//span[@class=('ant-dropdown-trigger w-full')]/div").nth(1);
       this.yourEntArrow=page.locator("//p[normalize-space()='In your entity']/following-sibling::*[name()='svg']");
       this.yourCompany=page.locator(`//span[text()='${datas.userCred.company}']/parent::div`); 
       this.save=page.locator("//span[text()='Save']/parent::button");
       this.textField=page.getByPlaceholder("What's on my mind? Where are you and What are you doing?");
       this.photo=page.locator("[type='file']");
       this.send=page.locator("//span[text()='Send']/parent::button");



    }


    async makeaPost(name)
    {
      await this.postSettings.click();
      //await this.toEntireOrg.click();
      await this.toYourEn.click();
      await this.yourCompany.click(); 
      await this.save.click();
      await this.textField.fill(name);
      await this.photo.setInputFiles(datas.userCred.file);
      await this.send.click();
      await this.page.waitForTimeout(1000);
    }
}