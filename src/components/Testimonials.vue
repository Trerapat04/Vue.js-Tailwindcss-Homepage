<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const reviews = ref([
  {
    id: 1,
    name: 'John Doe',
    review: 'Great experience! I love shopping here, fast delivery and excellent customer service.',
    image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Amazing products at great prices. I will definitely be shopping here again!',
    image: 'https://th.bing.com/th/id/OIP.btgP01toqugcXjPwAF-k2AHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    review: 'The quality of the items exceeded my expectations. Highly recommended!',
    image: 'https://cdn.dribbble.com/users/2209471/screenshots/14428032/3d_character_boy3_4x.png',
  },
  {
    id: 4,
    name: 'Emily Davis',
    review: 'Best online store ever! The shipping was super fast, and I love my new gadgets.',
    image: 'https://th.bing.com/th/id/OIP.w8MIbz4COCnJrq4tyjTYWAHaHT?w=626&h=618&rs=1&pid=ImgDetMain',
  },
]);

const isVisible = ref(false);

const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    });
  }, {
    threshold: 0.3, // ตั้งค่านี้เพื่อให้เริ่มต้นแสดงเมื่อ 10% ของเนื้อหาอยู่ในมุมมอง
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <div ref="sectionRef" class="cursor-pointer container mx-auto px-5 py-10">
    <h2
      class="transition duration-1500 ease-in-out hover:text-green-600 text-3xl font-bold text-center text-gray-800 mb-8">
      Review
    </h2>
    <swiper :autoplay="true" :loop="true" :speed="500" :slidesPerView="1">
      <swiper-slide v-for="review in reviews" :key="review.id">
        <div class="bg-white p-6 text-center transition-all duration-500 ease-out" 
        :class="{
          'transform translate-y-0 opacity-100': isVisible,
          'transform translate-y-10 opacity-0': !isVisible
        }">
          <img :src="review.image" :alt="review.name" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
          <h3 class="text-lg font-semibold text-gray-900">{{ review.name }}</h3>
          <p class="text-gray-600 mt-3">{{ review.review }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
