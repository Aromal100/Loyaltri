export class CheckInOut
{
    constructor(page)
    {
        this.page=page;
        this.checkIn=page.locator("//span[text()='Check In']/parent::button");
        this.cCheckIn=page.locator("//span[text()='Check In']/parent::button").last();
        this.checkout=page.locator("[title='Check Out']");
        this.cCheckOut=page.locator("//span[text()='Check Out']/parent::button").last();
        this.punchMessage=page.locator(".ant-notification-notice-description").last();
        
    }


    async checkInFn()
    {
     await this.checkIn.click();
     await this.cCheckIn.click();
    }

    async checkOutFn()
    {
      await this.checkout.click();
      await this.cCheckOut.click();
    }
}