import { get } from './helpers'

const getSeller = get('http://localhost:8080/sell/seller/seller')
const getGoods = get('http://localhost:8080/sell/goods/list')
const getRatings = get('api/ratings')
export {
  getSeller,
  getGoods,
  getRatings
}
