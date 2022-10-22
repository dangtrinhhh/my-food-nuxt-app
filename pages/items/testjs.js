const cart = {
  createdAt: '2022-10-19T20:00:32.142Z',
  items: [
    {
      id: 3,
      name: 'test3',
      price: 1100,
      quantity: 3
    }
  ],
  total: 200,
  paid: true,
  id: '3'
}

const textpush = {
  id: 3,
  name: 'test3',
  price: 1100,
  quantity: 3
}
const cart2 = cart.items.push(textpush)

console.log(cart2)
