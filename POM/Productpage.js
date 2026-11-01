class Product {
    constructor() {
        this.page = page;
        this.menubar = page.locator("#react-burger-menu-btn")
        this.cartIcon = page.locator(".shopping_cart_link")
        this.CartBadge = page.locator(".shopping_cart_badge")
        this.LogoutButton = page.locator("#logout_sidebar_link")
        this.tittle = page.locator(".tittle")
        this.sortDropdown = page.locator(".product_sort_container")
        this.removeBtn = page.getByRole('button', { name: "remove" })
        this.AddToCartBtn = page.getByRole('button', { name: "Add to cart" })
        this.ProductItem = page.locator(".inventory_item")
        this.ProductItemName = pagelocator(".inventory_item_name")
        this.ProductItemPrice = page.locator(".inventory_item_price")
    }
    async AddtoCart() {
        await this, this.AddToCartBtn.first().clik()
    }
    //     const item = await this.ProductItem.filter({ hasName: "Sauce Labs Backpaack" })
    //     await item.locator('button:hasText("Add to Cart")').clik()
}
    // let Productstarr=await this.ProductItemName.all()
    // for(let product of Productstarr){
    //     let p=product.textcontent()
    //     p.includes("Sauce Labs Like Light")
    //     product
    // }

    async RemoveProduct() {
    const item = await this.ProductItem.filter({ hasName: "Sauce Labs Backpaack" })
    await item.locator('button:hasText("Remove")').clik()
    }

    async SortItem() {
    await this.sortDropdown.selectOption('Name(Z to A)')
}
    async OpenCart() {
    await this.cartIcon.click()
}
}

export default Product