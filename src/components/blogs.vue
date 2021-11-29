<template>
  <div class="lg:flex">
    <div class="main-blog">
      <div class="blog">
        <div class="post">
          <div class="flex items-center">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-andrew-wilus-5604053_vgo0pb.jpg" class="rounded-full w-16" alt="">
            <h4 class="px-5">Ibrahim Alimosho</h4>
          </div>
          <div class="image">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg" alt="" class="rounded">
          </div>
          <div class="content">
            How Clicka has helped connect over 20 million Nigerian businesses with their customers.
          </div>
          <div class="links">
            <div class="share">
              <Icon icon="akar-icons:heart" />
              <Icon icon="bx:bx-share-alt" />
              <Icon icon="bi:bookmark" />
            </div>
            <div class="date">
              Feb 2021
            </div>
          </div>
        </div>
        <div class="post">
          <div class="flex items-center">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-andrew-wilus-5604053_vgo0pb.jpg" class="rounded-full w-16" alt="">
            <h4 class="px-5">Ibrahim Alimosho</h4>
          </div>
          <div class="image">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg" alt="" class="rounded">
          </div>
          <div class="content">
            How Clicka has helped connect over 20 million Nigerian businesses with their customers.
          </div>
          <div class="links">
            <div class="share">
              <Icon icon="akar-icons:heart" />
              <Icon icon="bx:bx-share-alt" />
              <Icon icon="bi:bookmark" />
            </div>
            <div class="date">
              Feb 2021
            </div>
          </div>
        </div>
        <div class="post">
          <div class="flex items-center">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-andrew-wilus-5604053_vgo0pb.jpg" class="rounded-full w-16" alt="">
            <h4 class="px-5">Ibrahim Alimosho</h4>
          </div>
          <div class="image">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg" alt="" class="rounded">
          </div>
          <div class="content">
            How Clicka has helped connect over 20 million Nigerian businesses with their customers.
          </div>
          <div class="links">
            <div class="share">
              <Icon icon="akar-icons:heart" />
              <Icon icon="bx:bx-share-alt" />
              <Icon icon="bi:bookmark" />
            </div>
            <div class="date">
              Feb 2021
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="control">
      <p class="pr-2 text-xs">See more</p>
      <Icon icon="akar-icons:arrow-forward" class="text-lg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'blogs',
  components: { Icon }
})
</script>

<style scoped>
  .main-blog {
    @apply flex lg:w-8/9;
  }

  .blog {
    @apply lg:flex gap-1 sm:grid grid-cols-2
  }

  .post {
    @apply my-10 px-2 py-4 hover:shadow-lg rounded-md;
  }

  .content {
    @apply font-bold my-4 text-left;
  }

  .image {
    @apply my-4
  }

  .links {
    @apply flex justify-between;
  }

  .share {
    @apply flex justify-between w-1/4 lg:w-1/2 text-lg;
  }

  .date {
    @apply text-gray-400 text-xs;
  }

  .control {
    @apply flex justify-center items-center text-indigo-900 p-3 lg:w-1/9;
  }
</style>
