import datas from '../../config/logindata.json'

export class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.email=page.locator("#floating_filled_email");
        this.password=page.locator("//input[@type='password']");
        this.checkbox=page.locator("[type='checkbox']");
        this.signIn=page.getByRole('button',{name:'Sign In'});
                                                                            
    }

    async landingPage()
    {
        await this.page.goto(datas.adminCred.url); 
    }

    async loginPage(email,pass)
    {
        await this.email.fill(email);
        await this.password.fill(pass);
        await this.checkbox.click();
        await this.signIn.click();
    }
}