import apiClient from '@/apis/index.js'

export default {
  getProducts({offset, limit}) {
    return apiClient.get(`/products?offset=${offset}&limit=${limit}`);
  },
}
