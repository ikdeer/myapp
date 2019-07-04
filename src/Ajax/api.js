import request from './request';
import qs from 'qs'

//获取商品信息
export const getProduct = ({ shopId }) => request({
  url: '/home/getRecommendActivity',
  method: 'get',
  params: { shopId }
});