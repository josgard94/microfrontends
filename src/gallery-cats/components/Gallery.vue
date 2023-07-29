<template>
    <div class="container mt-5">
      <div class="row">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="col-md-4 mb-4"
        >
          <div class="card" style="border-radius: 8px">
            <img 
                :src="photo.url" 
                class="card-img-top w-100 gallery-img" 
                :alt="photo.title"
                style="height: 300px; object-fit: cover; border-radius: 8px;"
            >
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [
          {
            url: 'src/gallery-cats/assets/imagen1.jpeg',
            title: 'Photo 1',
            description: 'Description of Photo 1',
          },
          {
            url: 'src/gallery-cats/assets/imagen2.jpeg',
            title: 'Photo 2',
            description: 'Description of Photo 2',
          },
          {
            url: 'src/gallery-cats/assets/imagen3.jpeg',
            title: 'Photo 3',
            description: 'Description of Photo 3',
          },
          {
            url: 'src/gallery-cats/assets/imagen4.jpeg',
            title: 'Photo 4',
            description: 'Description of Photo 4',
          },{
            url: 'src/gallery-cats/assets/imagen5.jpeg',
            title: 'Photo 5',
            description: 'Description of Photo 5',
          },{
            url: 'src/gallery-cats/assets/imagen6.jpeg',
            title: 'Photo 6',
            description: 'Description of Photo 6',
          },
        ],
      };
    },
  };
  </script>

<style>
.gallery-img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
  