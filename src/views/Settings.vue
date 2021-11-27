<template>
  <navbar />
  <settings class="mb-10" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import settings from '@/components/dashboard/settings.vue'
import navbar from '@/components/dashboard/navbar.vue'

export default defineComponent({
  name: 'About',
  components: {
    settings,
    navbar
  },
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
