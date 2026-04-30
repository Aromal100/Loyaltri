export class SidePages {
    constructor(page) {
        this.page = page;
        this.company = page.locator("//p[text()='Company']/parent::div");
        this.allEmp = page.locator("//a[@href='/employees']");
        this.settings = page.locator("//p[text()='Settings']/parent::div")
        this.leave = page.locator("//a[@href='/Leave']");
        this.time = page.locator("//p[text()='Time']/parent::div").first();
        this.myleave = page.locator("//a[@href='/myleaves']");
        this.shift = page.locator("//a[@href='/Shift']");
        this.userPrivileges = page.locator("//a[@href='/userPrivileges']");
        this.employeeAttendance = page.locator("//a[@href='/employee_attendance']").first();
        this.workPolicy=page.locator("[href='/policies']");
        this.employeeRequest=page.locator("[href='/employeeRequest']");
        this.payroll=page.locator("//p[text()='Payroll']/parent::div");
        this.payrollTable=page.locator("[href='/payrollTable']");


        

    }

    async goToAllEmployees() {
        await this.company.click();
        await this.allEmp.click();
    }

    async goToLeavePage() {
        await this.settings.click();
        await this.leave.click();

    }

    async goToMyLeave() {
        await this.time.click();
        await this.myleave.click();

    }

    async goToShift() {
        await this.settings.click();
        await this.shift.click();
    }

    async goToUserPrivileges() {
        await this.settings.click();
        await this.userPrivileges.click();
    }

    async goToEmployeeAttendance() {
        await this.time.click();
        await this.employeeAttendance.click();
    }

    async goToWorkPolicy()
    {
        await this.settings.click();
        await this.workPolicy.click();
    }

     async goToEmployeeRequest() {
        await this.time.click();
        await this.employeeRequest.click();

    }

    async goToPayrollTable()
    {
      await this.payroll.click();
      await this.payrollTable.click();
    }


}