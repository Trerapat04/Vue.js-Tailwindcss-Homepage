<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const categories = [
    { id: 1, name: 'Electronics', icon: ['fas', 'tv'] },
    { id: 2, name: 'Fashion', icon: ['fas', 'shirt'] },
    { id: 3, name: 'Home & Kitchen', icon: ['fas', 'utensils'] },
    { id: 4, name: 'Sports & Outdoors', icon: ['fas', 'basketball-ball'] },
    { id: 5, name: 'Beauty & Health', icon: ['fas', 'droplet'] },
    { id: 6, name: 'Gaming Gear', icon: ['fas', 'computer'] },
]
// ตรวจสอบการแสดงผลของ section
const isVisible = ref(false)
const sectionRef = ref(null)
// IntersectionObserver เพื่อตรวจสอบเมื่อ section เข้ามาใน viewport
let observer
onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            isVisible.value = true
        } else {
            isVisible.value = false
        }
    }, { threshold: 0.3 })
    
    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})
// ล้าง observer เมื่อ component ถูกทำลาย
onUnmounted(() => {
    if (observer && sectionRef.value) {
        observer.unobserve(sectionRef.value)
    }
})
</script>

<template>
  <div ref="sectionRef" class="container mx-auto px-5 py-10">
    <h2 class="cursor-pointer transition duration-300 ease-in-out text-3xl font-bold text-center text-gray-800 mb-8 hover:text-green-600">
      Shop by Categories
    </h2>

    <!-- Grid Layout -->
    <div
      class="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-in-out"
      :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-20 opacity-0': !isVisible }"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="group bg-white hover:bg-gray-900 transition duration-300 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 cursor-pointer"
      >
        <div class="flex justify-center items-center h-48 bg-gray-100">
          <!-- แสดงไอคอนโดยใช้ Font Awesome -->
          <font-awesome-icon :icon="category.icon" size="5x" class="text-gray-600" />
        </div>
        <div class="p-4 text-center overflow-hidden">
          <h3 class="transition duration-300 group-hover:text-gray-50 text-lg font-semibold text-gray-900">
            {{ category.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
