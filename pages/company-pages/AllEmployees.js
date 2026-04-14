export class AllEmployees
{
    constructor(page)
    {
        this.page=page;
        this.gohome=page.locator("//span[text()='Go Home']/parent::button"); 
        this.feedbackCancel=page.locator("//button[@class='ant-modal-close']");
        this.company=page.locator("//button[contains(@class,'ant-dropdown-trigger')]");
        this.qaCompany=page.locator("//p[text()='Qa Company Pvt Ltd']/parent::div");
        this.addEmp=page.locator("//span[text()='Add Employee']/parent::button");
        this.firstname=page.getByPlaceholder("Enter First Name");
        this.lastname=page.getByPlaceholder("Enter Last Name");
        this.email=page.getByPlaceholder("Enter Email");
        this.phoneNo=page.getByPlaceholder("Enter Mobile Number");
        this.calender=page.getByPlaceholder("Date of Birth");
        this.date=page.locator("//div[text()='14']");
        this.gender=page.locator("//span[text()='Female']/parent::div");
        this.continue=page.locator("//span[text()='Save & Continue']/parent::button");
        this.address=page.getByPlaceholder("Enter Address").first();
        this.countrydrop=page.locator("//div[@class='relative flex items-center h-full']").first();
        this.country=page.locator("//div[@title='India']");
        this.statedrop=page.locator("//div[@class='relative flex items-center h-full']").nth(1);
        this.kerala=page.locator("//div[@title='Kerala']");
        this.citydrop=page.locator("//div[@class='relative flex items-center h-full']").nth(2);
        this.city=page.locator("//div[@title='Alappuzha']");
        this.code=page.getByPlaceholder("Enter Postal/ZIP Code").first();
        this.address2=page.getByPlaceholder("Enter Address").last();
        this.countrydrop2=page.locator("//div[@class='relative flex items-center h-full']").nth(3);
        this.country2=page.locator("//div[@title='India']").nth(1);
        this.statedrop2=page.locator("//div[@class='relative flex items-center h-full']").nth(4);
        this.kerala2=page.locator("//div[@title='Kerala']").nth(1);;
        this.citydrop2=page.locator("//div[@class='relative flex items-center h-full']").nth(5);
        this.city2=page.locator("//div[@title='Alappuzha']").nth(1);
        this.code2=page.getByPlaceholder("Enter Postal/ZIP Code").nth(1);
        this.desig=page.locator("//div[@class='ant-select-selector']").nth(1);
        this.desigOpt=page.locator("//div[@title='Admin']")
        this.dept=page.locator("//div[@class='ant-select-selector']").nth(2);
        this.deptOpt=page.locator("//div[@title='Finance']");
        this.category=page.locator("//div[@class='ant-select-selector']").nth(3);
        this.categoryOpt=page.locator("//div[@title='Advertising']");
        this.reportTo=page.locator("//div[@class='ant-select-selector']").nth(5);
        this.reportToOpt=page.locator("//div[@title='Ram  R']");
        this.datetojoin=page.locator("//div[contains(@class,'ant-picker ')]").first();
        this.location=page.locator("//div[@class='ant-select-selector']").nth(6);
        this.locOpt=page.locator("//div[@title='Main Branch']");
        this.shiftsch=page.locator("//div[@class='ant-select-selector']").nth(7);
        this.shiftOpt=page.locator("//div[@title='Night']");
        this.probationPeriod=page.getByPlaceholder("Enter Probation Period in Days");
        this.noticePeriod=page.getByPlaceholder("Enter Notice Period in Days");
        this.save=page.locator("//span[text()='Save']/parent::button")
        this.success=page.locator("//div[text()='Successful']").first();
    }


    async selectCompany()
    {
         await this.gohome.click({ timeout: 3000 }).catch(() => {});
        await this.feedbackCancel.click();
        await this.company.click();
        await this.qaCompany.click();
        await this.feedbackCancel.click();
    }

    async employeeOnBoarding(data)
    {
        await this.addEmp.click();
        await this.firstname.fill(data.name);
        await this.lastname.fill(data.lastname);
        await this.email.fill(data.email);
        await this.phoneNo.fill(data.phone);
        await this.calender.click();
        await this.date.click();
        await this.gender.click();
        await this.continue.click();
        await this.address.fill(data.address);
        await this.countrydrop.click();
        await this.country.click();
        await this.statedrop.click();
        await this.kerala.click();
        await this.citydrop.click();
        await this.city.click();
        await this.code.fill(data.postalCode);
        await this.address2.fill(data.address);
        await this.countrydrop2.click();
        await this.country2.click();
        await this.statedrop2.click();
        await this.kerala2.click();
        await this.citydrop2.click();
        await this.city2.click();
        await this.code2.fill(data.postalCode);
        await this.continue.click();


    }

    async workDetails()
    {
       await this.desig.click();
       await this.desigOpt.click();
       await this.dept.click();
       await this.deptOpt.click();
       await this.category.click();
       await this.categoryOpt.click();
       await this.reportTo.click();
       await this.reportToOpt.click();
       await this.datetojoin.click();
       await this.date.click();
       await this.location.click();
       await this.locOpt.click();
       await this.shiftsch.click();
       await this.shiftOpt.click();
       await this.continue.click();
       await this.probationPeriod.fill("90");
       await this.noticePeriod.fill("90");
       await this.continue.click();
       await this.save.click();


    }



}