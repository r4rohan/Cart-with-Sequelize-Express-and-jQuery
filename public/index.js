$(function () {
    let productList = $('#product-list')

    fetchProduct(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })
})