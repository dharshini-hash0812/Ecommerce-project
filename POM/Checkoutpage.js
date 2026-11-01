class Chechkout {
    constructor(Page) {
        this.page = this.page;
        this.first_Name = this.page.getByPlaceholder("Fisrt Name")
        this.last_Name = this.page.getByPlaceholder("Last Name")
        this.zipcode = this.page.getByPlaceholder("Zip/Postal Code")
        this.Cancel = this.page.getByRole('button', { name: "Cancel" })
        this.Continue = this.page.getByRole('button', { name: "Continue" })
        this.errorMessage = this.page.locator(".error-message-container-")

    }
    async FillYourInfo() {
        await this.first_Name.fill("Dharshini")
        await this.last_Name.fill("A")
        await this.zipcode.fill(614001)
    }
    async clickOnCancelButton() {
        await this.Cancel.click()
    }
    async clickOnContinueButton() {
        await this.Continue.click()
    }
    async fillAndContinue() {
        await this.FillYourInfo()
        await this.clickOnContinueButton.click()
    }
    async errorMessageOCheckout() {
        return await this.errorMessage.textContent();
    }
}
export default Chechkout;