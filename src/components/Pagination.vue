<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <!-- Mobile Navigation -->
    <div class="flex flex-1 justify-between sm:hidden">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <!-- Desktop Pagination -->
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 disabled:opacity-50"
        >
          <ChevronLeftIcon class="size-5" />
        </button>

        <template v-for="page in visiblePages" :key="page">
          <button
            v-if="page !== '...'"
            @click="changePage(page)"
            :class="[
              'relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 cursor-pointer',
              page === currentPage
                ? 'z-10 bg-indigo-600 text-white'
                : 'text-gray-900 hover:bg-gray-50',
            ]"
          >
            {{ page }}
          </button>
          <span
            v-else
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset"
            >…</span
          >
        </template>

        <button
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 disabled:opacity-50"
        >
          <ChevronRightIcon class="size-5" />
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ChevronLeftIcon from '@heroicons/vue/20/solid/ChevronLeftIcon'
import ChevronRightIcon from '@heroicons/vue/20/solid/ChevronRightIcon'

const { currentPage, totalPages, maxVisible } = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  maxVisible: {
    type: Number,
    default: 7,
  },
})

const emit = defineEmits(['page-change'])

const changePage = (page) => {
  if (page >= 1 && page <= totalPages && page !== currentPage) {
    emit('page-change', page)
  }
}

const visiblePages = computed(() => {
  const pages = []
  const half = Math.floor(maxVisible / 2)

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    const start = Math.max(2, currentPage - half)
    const end = Math.min(totalPages - 1, currentPage + half)

    pages.push(1)

    if (start > 2) pages.push('...')

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1) pages.push('...')

    pages.push(totalPages)
  }

  return pages
})
</script>
