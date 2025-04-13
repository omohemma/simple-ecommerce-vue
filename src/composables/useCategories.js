import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export function useCategories(limit) {
  const store = useStore()
  const isLoading = ref(false)

  const getCategories = () => {
    const query = limit ? `?limit=${limit}` : ''
    isLoading.value = true

    return store.dispatch('Category/getCategories', query)
      .finally(() => {
        isLoading.value = false
      })
  }

  const categories = computed(() => store.getters['Category/categories'])

  onMounted(() => {
    getCategories()
  })

  return {
    isLoading,
    categories,
    getCategories,
  }
}
