<template>
  <div class="bg-white">
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 capitalize">
            {{ category.name ?? '' }}
          </h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sort
                  <ChevronDownIcon
                    class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden"
                >
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                      <a
                        :href="option.href"
                        :class="[
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          active ? 'bg-gray-100 outline-hidden' : '',
                          'block px-4 py-2 text-sm',
                        ]"
                        >{{ option.name }}</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span class="sr-only">View grid</span>
              <Squares2X2Icon class="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Product grid -->
            <div class="lg:col-span-4 bg-white">
              <Loader v-if="isLoading" />
              <ProductListing v-else :products="products" />
            </div>
          </div>

          <!-- Pagination: hardcoded total pages because API doesn't provide it  -->
          <Pagination
            :total-pages="10"
            :current-page="currentPage"
            :visible-pages="5"
            @page-change="currentPage = $event"
          />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import ProductListing from '@/components/ProductListing.vue'
import Loader from '@/components/Loader.vue'
import Pagination from '@/components/Pagination.vue'

const store = useStore()
const route = useRoute()

const slug = computed(() => route.params.slug)
const category = computed(() => {
  const matchedCategory = store.getters['Category/getCategoryBySlug'](slug.value)
  if (matchedCategory) {
    return matchedCategory
  } else {
    return store.getters['Category/category']
  }
})

const offset = ref(0)
const limit = ref(10)
const currentPage = ref(1)
const isLoading = ref(false)
const getCategoryProducts = () => {
  let payload = { id: category.value.id, offset: offset.value, limit: limit.value }
  isLoading.value = true
  store
    .dispatch('Category/getCategoryProducts', payload)
    .then(() => (isLoading.value = false))
    .catch(() => (isLoading.value = false))
}

watch(currentPage, () => {
  offset.value = (currentPage.value - 1) * limit.value
  getCategoryProducts()
})

const products = computed(() => {
  return store.getters['Category/categoryProducts']
})

onMounted(() => {
  if (!store.state.Category.categories.length) {
    store.dispatch('Category/getCategory', slug.value)
  } else {
    getCategoryProducts()
  }

  watch(
    () => category.value.id,
    (categoryId) => {
      if (categoryId !== undefined) {
        getCategoryProducts()
      }
    },
  )
})

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
</script>
