<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State untuk menyimpan daftar artikel dari API
let articles = ref([]);
let loading = ref(true);

// Fungsi untuk mengambil data artikel dari API WordPress
async function fetchArticles() {
  try {
    const response = await axios.get('https://www.nurfmrembang.com/wp-json/wp/v2/posts?categories=3&per_page=6');
    articles.value = response.data; // Respons dari API WordPress
    loading.value = false;
    console.log("load",response.data)
  } catch (error) {
    loading.value = false;
    console.error('Error fetching articles:', error);
  }
}

// Panggil fungsi untuk mengambil artikel saat komponen dimuat
onMounted(() => {
  fetchArticles();
});


// Fungsi untuk memperbarui tampilan secara manual
function forceUpdate() {
  // Simpan nilai artikel sementara untuk memaksa pembaruan
  const tempArticles = articles.value;
  articles.value = [];
  articles.value = tempArticles;
}

// Fungsi untuk mendapatkan URL thumbnail dari artikel
function getThumbnailUrl(article) {
  // Pastikan artikel memiliki yoast_head_json dan thumbnailUrl
  if (article.yoast_head_json && article.yoast_head_json.schema?.["@graph"]?.[0]?.thumbnailUrl) {
    return article.yoast_head_json.schema["@graph"][0].thumbnailUrl;
  } else {
    // Return default placeholder URL jika thumbnailUrl tidak tersedia
    return 'https://www.nurfmrembang.com/wp-content/uploads/default-thumbnail.jpg';
  }
}
</script>


<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Discover our latest articles
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Explore the latest insights and updates from our team.
    </p>
  </div>
  
  <div v-if="loading.value" class="flex items-center justify-center mt-12">
    <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <circle fill="#00FF00" stroke="none" cx="6" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.1"/>
  </circle>
  <circle fill="#00FF00" stroke="none" cx="26" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.2"/>       
  </circle>
  <circle fill="#00FF00" stroke="none" cx="46" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.3"/>     
  </circle>
</svg>

  </div>
  <div v-else>
    <div class="grid md:grid-cols-3 gap-10 mx-auto mt-12">
        <div v-for="(article, index) of articles" :key="index" class="group">
          <div class="w-full aspect-square">
          <a :href="article.link" target="_blank" rel="noopener noreferrer">
            <img
              :src="getThumbnailUrl(article)"
              :width="article.yoast_head_json.og_image[0].width"
              :height="40"
              format="avif"
              alt="Team"
              class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
            />
          </a>
          </div>

          <div class="mt-4 text-center">
            <a :href="article.link" target="_blank" rel="noopener noreferrer">
              <h2 class="text-lg text-gray-800 text-left">{{ article.title.rendered }}</h2>
            </a>
            <p class="text-xs text-left text-gray-400">{{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
            <!-- Deskripsi singkat dan tanggal -->
            <a :href="article.link" target="_blank" rel="noopener noreferrer">
            <p class="text-sm text-left text-slate-500 mt-2" v-html="article.content.rendered.slice(0, 150) + '...'"></p>
            </a>
            <!-- Tanggal artikel -->

          </div>
        </div>
    </div>
  </div>

  
  
</template>
