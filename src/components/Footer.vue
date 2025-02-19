<script setup>
  // No need to import FontAwesomeIcon here since it's globally registered
</script>

<template>
  <footer class="bg-gray-900 text-white py-10 px-5">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <!-- Contact Us -->
      <div>
        <h3 class="font-bold text-lg mb-3">Contact Us</h3>
        <ul>
          <li>Phone: +000</li>
          <li>Email: support@example.com</li>
          <li>Address: 123 Main St, City, Country</li>
        </ul>
      </div>

      <!-- Policies -->
      <div>
        <h3 class="font-bold text-lg mb-3">Policies</h3>
        <ul>
          <li><a href="#" class="hover:text-green-600">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-green-600">Terms of Service</a></li>
          <li><a href="#" class="hover:text-green-600">Refund Policy</a></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-bold text-lg mb-3">Quick Links</h3>
        <ul>
          <li><a href="#" class="hover:text-green-600">About Us</a></li>
          <li><a href="#" class="hover:text-green-600">Contact</a></li>
          <li><a href="#" class="hover:text-green-600">FAQs</a></li>
        </ul>
      </div>

      <!-- Social Media Icons -->
      <div>
        <h3 class="font-bold text-lg mb-3">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl hover:text-blue-700" />
          </a>
        </div>
      </div>
    </div>

    
    <div class="text-center mt-10">
      <p class="text-sm">&copy; 2025 My Online Store.</p>
    </div>
  </footer>
</template>
