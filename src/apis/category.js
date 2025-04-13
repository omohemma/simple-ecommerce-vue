import apiClient from '@/apis/index.js'

export default {
  getCategories(payload) {
    return apiClient.get(`/categories${payload}`);
  },
  getCategoryBySlug(slug) {
    return apiClient.get(`/categories/slug/${slug}`);
  },
}
