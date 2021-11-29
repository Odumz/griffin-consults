<template>
  <div class="">
    <div class="bg-gray-50 px-8 sm:px-20">
      <div class="header reveal">
        <h1 class="text-7xl font-bold reveal fromLeft text-indigo-900">Blog</h1>
        <p class="px-5 text-gray-500 text-left text-sm reveal fromRight w-1/3">
          The most interesting experiences and updates as shared by the community.
        </p>
      </div>
      <div class="menu reveal fromBottom">
        <div class="categories">
          <ul class="flex gap-6">
            <li class="text-indigo-800">Editor's Choice 🌟</li>
            <li>Trending 📈</li>
            <li>Featured 😎</li>
          </ul>
        </div>
        <div class="filter">
          <ul class="flex gap-6">
            <li>Filter</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>
      <div class="divider reveal from Left"></div>
    </div>
    <div class="blog px-8 sm:px-20">
      <h1 class="text-left p-5 text-xl">Trending Now 📈</h1>
      <blogs />
      <div class="divider reveal from Left"></div>
      <h1 class="text-left p-5 text-xl">Editor's Choice 🌟</h1>
      <blogs />
      <div class="divider reveal from Left"></div>
      <h1 class="text-left p-5 text-xl">Featured 😎</h1>
      <blogs />
      <div class="divider reveal from Left"></div>
    </div>
  </div>
</template>

<style scoped>
  .blog {
    @apply grid;
  }

  .header {
    @apply flex items-end py-10;
  }

  .divider {
    @apply h-0.5 bg-gray-200 rounded-lg shadow my-5;
  }

  .menu {
    @apply flex justify-between py-6;
  }
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import blogs from '@/components/blogs.vue'

export default defineComponent({
  name: 'Blog',
  components: { blogs },
  setup () {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)
      animate()
    })

    const animateFrom = (elem: any, direction: number) => {
      let x = 0
      let y = direction * 100

      if (elem.classList.contains('fromLeft')) {
        x = -100
        y = 0
      } else if (elem.classList.contains('fromRight')) {
        x = 100
        y = 0
      } else if (elem.classList.contains('fromTop')) {
        x = 0
        y = -150
      } else if (elem.classList.contains('fromBottom')) {
        x = 0
        y = 150
      }
      elem.style.transform = `translate(${x}px, ${y}px)`
      elem.style.opacity = '0'
      gsap.fromTo(elem, {
        x,
        y,
        autoAlpha: 0
      }, {
        duration: 2.75,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      })
    }

    const hide = (elem: any): void => {
      gsap.set(elem, { autoAlpha: 0 })
    }

    const animate = (): void => {
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        hide(elem)

        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => { animateFrom(elem, 1) },
          onEnterBack: () => { animateFrom(elem, -1) },
          onLeave: () => { hide(elem) }
        })
      })
    }
  }
})
</script>
