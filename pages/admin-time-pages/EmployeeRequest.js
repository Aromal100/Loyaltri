export class EmployeeRequest
{
    constructor(page)
    {
        this.page=page;
        this.overtime=page.locator("//span[text()='Overtime']/parent::button");
        this.selectall=page.getByRole('checkbox', { name: 'Select All' }).first();
        this.approveSelect=page.locator("//span[text()='Approve Selected']/parent::button");
        this.comment=page.getByPlaceholder("Enter Comment");
        this.confirmApprovalBtn=page.locator("//span[text()='Confirm Approval']/parent::button");
        this.overtimeRequestsCreatedMessage=page.locator(".ant-notification-notice-description").last();
    }

    async confirmApproval(comment)
    {
       await this.page.waitForTimeout(2000);
       await this.overtime.click();
       await this.selectall.click();
       await this.approveSelect.click();
       await this.comment.fill(comment);
       await this.confirmApprovalBtn.click();
    }
}