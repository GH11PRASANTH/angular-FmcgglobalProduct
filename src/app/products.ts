
export interface Product
 {
  productId: String,
  productName : String,
  price: number,
  availableQuantity:number,
  expiryDate: String
  }

export const productsFromFile = [
    {
        productId: 'P001',
        productName: '1:fan',
        price: 1200.0,
        availableQuantity: 4,
        expiryDate: '2002-06-25'
    },
    {
        productId : 'P002',
        productName : '2:Heater',
        price: 1500.0,
        availableQuantity : 2,
        expiryDate : '2034-03-12'
    },
    {
        productId : 'P003',
        productName : '3:Mobile',
        price: 5000.0,
        availableQuantity : 2,
        expiryDate : '2021-03-12'
    }
]