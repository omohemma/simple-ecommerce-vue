<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
      <slot></slot>

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <CategoryItem
          v-for="{ name, image, slug } in categories"
          :key="name"
          :image="image"
          :name="name"
          :slug="slug"
        />
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
