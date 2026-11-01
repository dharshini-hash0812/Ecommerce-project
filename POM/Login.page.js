class Login {
    constructor() {
        this.page = page;
        this.username = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole('button', { name: "Login" })
        this.errorMesg = page.locator(".error-message-container.error")

    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async LoginToSauceDemo() {
        await this.page.goto("https://www.saucedemo.com/")
        await this.username.fill("standard_user")
        await this.password.fill("secret_sauce")
        await this.loginButton.click()
    }
    async ClickOnLoginBtn() {
        await this.loginButton.click()
    }
    async getErrorMsg() {
        return await this.getErrorMsg.textContent();
    }

}