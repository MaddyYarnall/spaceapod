<template>
  <div>
    <input type="date" />
    <button class="btn btn-success m-2" @click="getImage()">
      Draw Image :D
    </button>
    <h3>{{ image.title }}</h3>
    <img :src="image.url" alt="" srcset="" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { imagesService } from '../services/ApiService.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    return {
      async getImage() {
        await imagesService.getImage()
      },
      image: computed(() => AppState.image)
    }
  }
}
</script>


<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>


