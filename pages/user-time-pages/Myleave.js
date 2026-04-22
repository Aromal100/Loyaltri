export class MyLeave
{

    constructor(page)
    {
        this.page=page;
        this.newLeaveReq=page.locator("//span[text()='New Leave Request']/parent::button");
        this.select=page.locator("[class='ant-select-selector']");
        this.selectOpt=page.locator("//div[@title='Casual Leaves']");
        this.monthOpt=page.locator("//div[@class='ant-picker-input']/parent::div").nth(1);
        //this.month=page.locator("[title='2026-06']"); 
        this.dateOpt=page.locator("//div[@class='ant-picker-input']/parent::div").nth(2);
        this.startDate=page.locator("[title='2026-06-01']");
        this.endDate=page.locator("[title='2026-06-02']");
        this.reason=page.getByPlaceholder("Enter Reason for Leave");
        this.reqLeave=page.locator("//span[text()='Request Leave']/parent::button");

    }

    async requestLeave(index)
    {
       await this.newLeaveReq.click();
        await this.select.click();
       await  this.selectOpt.click();
        await this.monthOpt.click();
        //await this.month.click();
        const months = this.page.locator(".ant-picker-cell.ant-picker-cell-in-view");
        await months.nth(index).click(); 
        await this.dateOpt.click();
        await this.startDate.click();
        await this.endDate.click();
        await this.reason.fill("reason");
        await this.reqLeave.click();
    }



}