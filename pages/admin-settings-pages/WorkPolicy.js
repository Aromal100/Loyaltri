import datas from '../../config/logindata.json'

export class WorkPolicy
{
    constructor(page)
    {
        this.page=page;
        this.creteWorkPolicyBtn=page.locator("//span[text()='Create Work Policy']/parent::button");
        this.otp=page.locator("//h2[text()='Over Time Policy']/ancestor::button");
        this.enterName=page.getByPlaceholder("Enter Work Policy Name");
        this.overtimeTypesOpt=page.locator(".ant-select-selector").first();
        this.afterShift=page.locator("[label='After Shift Ends']");
        this.choose=page.getByPlaceholder("Choose Employee works more than");
        this.time=page.locator(`[data-value='${datas.userCred.time}']`).first();
        this.time2=page.locator(`[data-value='${datas.userCred.time}']`).nth(2);
        this.time3=page.locator(`[data-value='${datas.userCred.time}']`).nth(4);
        this.ok = page.locator("//span[text()='OK']/parent::button");
        this.ok2 = page.locator("//span[text()='OK']/parent::button").last();
        this.amount=page.getByPlaceholder("Enter Amount Per Minute");
        this.saveCon = page.locator("//div[text()='Save & Continue']/ancestor::button");
        this.proceed = page.locator("//span[text()='Yes,Proceed']/parent::button");
        this.dateOpt=page.locator(".ant-picker-input").last();
        this.date=page.locator(`[title='${datas.userCred.joinDate}']`);
        //this.avEmployee=page.getByRole('checkbox', { name: 'Not Assigned to Any Work Policy' });
        this.avEmployee=page.locator(".ant-checkbox-input").nth(2);
        this.workPolicyCreatedMessage=page.locator(".ant-notification-notice-description").last();
        
        this.timeInOut=page.locator("//h2[text()='Time In-Out Policy']/ancestor::button");
        this.advanced=page.locator("//span[text()='Advanced']/parent::button");
        this.choose1=page.getByPlaceholder("Choose If Employee Late More Than").first();
        this.deductionTyOpt1=page.locator("div.ant-select-selector").first();
        this.deductionType=page.locator("[title='Full Day']");
        this.deductionFrOpt1=page.locator("div.ant-select-selector").nth(1);
        this.deductionFrom=page.locator("[title='Basic Salary']");
        this.daysOpt1=page.locator("div.ant-select-selector").nth(2);
        this.days=page.locator("[title='Calender Days']");

        this.choose2=page.getByPlaceholder("Choose If Employee Late More Than").last();
        this.deductionTyOpt2=page.locator("div.ant-select-selector").nth(3);
        this.deductionType2=page.locator("[title='Full Day']").last();
        this.deductionFrOpt2=page.locator("div.ant-select-selector").nth(4);
        this.deductionFrom2=page.locator("[title='Basic Salary']").last();
        this.daysOpt2=page.locator("div.ant-select-selector").nth(5);
        this.days2=page.locator("[title='Calender Days']").last();

        this.choose3=page.getByPlaceholder("Choose If Employee Leave Early By");
        this.deductionTyOpt3=page.locator("div.ant-select-selector").nth(6);
        this.deductionType3=page.locator("[title='Full Day']").last();
        this.deductionFrOpt3=page.locator("div.ant-select-selector").nth(7);
        this.deductionFrom3=page.locator("[title='Basic Salary']").last();
        this.daysOpt3=page.locator("div.ant-select-selector").nth(8);
        this.days3=page.locator("[title='Calender Days']").last();

        this.dateOpt=page.getByPlaceholder("Select Effective Date");
        this.date=page.locator(`[title='${datas.userCred.joinDate}']`);
        this.searchEmp=page.getByPlaceholder("Search Employees").first();
        this.selectEmp=page.locator("[type='checkbox']").nth(1);



    }

    async createWorkPolicy(name)
    {
        await this.creteWorkPolicyBtn.click();
        await this.otp.click();
        await this.enterName.fill(name);
        await this.overtimeTypesOpt.click();
        await this.afterShift.click();
        await this.choose.click();
        await this.time.click();
        await this.ok.click();
        await this.amount.fill(datas.userCred.amount);
        await this.saveCon.click();
        await this.proceed.click();
       
        // await this.dateOpt.click();
        // await this.date.click();
        // await this.avEmployee.click();
        // await this.saveCon.click();
        // await this.proceed.click();
        await this.dateOpt.click();
       await this.date.click();
       await this.searchEmp.waitFor();
       await this.searchEmp.fill(datas.userCred.empname2);
       await this.selectEmp.click();
       await this.saveCon.click();
       await this.proceed.click();
    }

    async creteTimeInOutPolicy(name)
    {
       await this.creteWorkPolicyBtn.click();
       await this.timeInOut.click();
       await this.advanced.click();
       await this.enterName.fill(name);
       await this.choose1.click();
       await this.time.click();
       await this.ok.click();
       await this.deductionTyOpt1.click();
       await this.deductionType.click();
       await this.deductionFrOpt1.click();
       await this.deductionFrom.click();
       await this.daysOpt1.click();
       await this.days.click();

       await this.choose2.click();
       await this.time2.click();
       await this.ok2.click();
       await this.deductionTyOpt2.click();
       await this.deductionType2.click();
       await this.deductionFrOpt2.click();
       await this.deductionFrom2.click();
       await this.daysOpt2.click();
       await this.days2.click();

       await this.choose3.click();
       await this.time3.click();
       await this.ok2.click();
       await this.deductionTyOpt3.click();
       await this.deductionType3.click();
       await this.deductionFrOpt3.click();
       await this.deductionFrom3.click();
       await this.daysOpt3.click();
       await this.days3.click();
       await this.saveCon.click();
       await this.proceed.click();
       await this.dateOpt.click();
       await this.date.click();
       await this.searchEmp.waitFor();
       await this.searchEmp.type(datas.userCred.empname,{delay:1000});
       await this.selectEmp.click();
       await this.saveCon.click();
       await this.proceed.click();




    }


}


