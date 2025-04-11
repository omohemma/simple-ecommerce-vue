<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <slot></slot>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <template v-for="category in categories" :key="category.name">
            <CategoryItem :category="category" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryItem from '@/components/CategoryItem.vue'

const { categories } = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
</script>
