import { test } from "@playwright/test"
import Login from "../POM/Login.page.js"
import fs from "fs"
let userData = fs.readFileSync.("C:/Users/acer/Desktop/saucedemo/Ecommerce-project/Test-Data/Login.json")
userData = JSON.parse(userData)
let username = userData.username
let pass = userData.pass
test("login to sauce Demo", async ({ page }) => {
    let login = new Login(page)

    await login.LoginToSauceDemo(url, username, pass)
})