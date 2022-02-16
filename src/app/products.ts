
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
        productName: 'fan',
        price: 1200.0,
        availableQuantity: 4,
        expiryDate: '2002-06-25'
    },
    {
        productId : 'P002',
        productName : 'Heater',
        price: 1500.0,
        availableQuantity : 2,
        expiryDate : '2034-03-12'
    },
    {
        productId : 'P003',
        productName : 'Mobile',
        price: 5000.0,
        availableQuantity : 2,
        expiryDate : '2021-03-12'
    }
]