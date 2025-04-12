<template>
  <div class="bg-white">
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Category Name</h1>

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
            <div class="lg:col-span-4">
              <section class="bg-white">
                <ProductListing :products="products" />
              </section>
            </div>
          </div>

          <div
            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          >
            <div class="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Previous</a
              >
              <a
                href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Next</a
              >
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-xs"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="size-5" aria-hidden="true" />
                  </a>
                  <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                  <a
                    href="#"
                    aria-current="page"
                    class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >1</a
                  >
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >2</a
                  >
                  <a
                    href="#"
                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >3</a
                  >
                  <span
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0"
                    >...</span
                  >
                  <a
                    href="#"
                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >8</a
                  >
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >9</a
                  >
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >10</a
                  >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Next</span>
                    <ChevronRightIcon class="size-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  ChevronDownIcon,
  Squares2X2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/20/solid'
import ProductListing from '@/components/ProductListing.vue'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const products = [
  {
    id: 26,
    title: 'Sleek Mirror Finish Phone Case',
    slug: 'sleek-mirror-finish-phone-case',
    price: 27,
    description:
      "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    category: {
      id: 2,
      name: 'Electronics2',
      slug: 'electronics2',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-11T05:11:36.000Z',
    },
    images: [
      'https://i.imgur.com/yb9UQKL.jpeg',
      'https://i.imgur.com/m2owtQG.jpeg',
      'https://i.imgur.com/bNiORct.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 35,
    title: 'Futuristic Holographic Soccer Cleats',
    slug: 'futuristic-holographic-soccer-cleats',
    price: 39,
    description:
      "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/qNOjJje.jpeg',
      'https://i.imgur.com/NjfCFnu.jpeg',
      'https://i.imgur.com/eYtvXS1.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 40,
    title: 'Futuristic Silver and Gold High-Top Sneaker',
    slug: 'futuristic-silver-and-gold-high-top-sneaker',
    price: 68,
    description:
      'Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!',
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/npLfCGq.jpeg',
      'https://i.imgur.com/vYim3gj.jpeg',
      'https://i.imgur.com/HxuHwBO.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 41,
    title: 'Futuristic Chic High-Heel Boots',
    slug: 'futuristic-chic-high-heel-boots',
    price: 36,
    description:
      'Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.',
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/HqYqLnW.jpeg',
      'https://i.imgur.com/RlDGnZw.jpeg',
      'https://i.imgur.com/qa0O6fg.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
]
</script>
