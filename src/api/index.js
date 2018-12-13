import { get } from './helpers'

const getSeller = get('api/sell/seller/seller')
const getGoods = get('api/sell/goods/list')
const getRatings = get('api2/ratings')
export {
  getSeller,
  getGoods,
  getRatings
}
