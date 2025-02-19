<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const sectionRef = ref(null);

// IntersectionObserver for visibility detection
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true; // Show content when in viewport
  } else {
    isVisible.value = false; // Hide content when out of viewport
  }
}, { threshold: 0.3 });

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value); // Start observing the section
  }
});

onBeforeUnmount(() => {
  if (sectionRef.value) {
    observer.unobserve(sectionRef.value); // Stop observing the section
  }
});
</script>

<template>
    <div
      ref="sectionRef"
      class="cursor-pointer transition-all duration-1500 ease-in-out group bg-emerald-300 text-white py-10 px-5 text-center"
      :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'"
    >
      <h2 class="transition duration-500 ease-in-out group-hover:text-gray-800 text-3xl font-bold mb-4">
        Special Promotion! Get 20% off for new members
      </h2>
      <p class="transition duration-500 ease-in-out text-lg mb-6 text-gray-800 group-hover:text-gray-50">
        Sign up now to receive the latest news and exclusive discounts!
      </p>
      <div class="flex justify-center gap-4">
        <!-- Newsletter Subscription Button -->
        <button class="transform hover:scale-105 cursor-pointer bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
          Register
        </button>
        <!-- Discount Coupon Button -->
        <button class="transform hover:scale-105 cursor-pointer bg-yellow-400 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition duration-300">
          Use Discount Coupon
        </button>
      </div>
    </div>
  </template>