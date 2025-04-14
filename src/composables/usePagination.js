import { ref, watch } from 'vue';

export function usePagination(getData, initialLimit = 10, initialTotalPages = 10) {
  const limit = ref(initialLimit);
  const totalPages = ref(initialTotalPages);
  const currentPage = ref(1);
  const offset = ref(0);

  watch(currentPage, () => {
    offset.value = (currentPage.value - 1) * limit.value;
    getData();
  });

  return {
    offset,
    limit,
    totalPages,
    currentPage,
  };
}
