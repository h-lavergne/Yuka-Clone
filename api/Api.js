const BaseURI = "https://world.openfoodfacts.org"
const userAgent = "StudentFoodApp - Android - Version 0.1"

export async function getProduct(barcode) {
    const url = `${BaseURI}/api/v0/product/${barcode}.json`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                UserAgent: userAgent
            },
        });
        const product = await response.json();
        console.log(product)
        return product
    } catch(e) {
        return null
    }
}