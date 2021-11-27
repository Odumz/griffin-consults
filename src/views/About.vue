<template>
<navbar />
  <div class="about mb-10">
    <h1>This is an about page</h1>
  </div>
  <conference-info class="mb-10" />
  <settings class="mb-10" />
  <modal class="mb-10" />
  <pagination class="mb-10" />
  <sign-in class="mb-10" />
  <pricing />
  <register />
  <banner />
  <subscribe />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ConferenceInfo from '@/components/dashboard/conference-info.vue'
import settings from '@/components/dashboard/settings.vue'
import navbar from '@/components/dashboard/navbar.vue'
import pagination from '@/components/pagination.vue'
import modal from '@/components/modal.vue'
import signIn from '@/components/sign-in.vue'
import banner from '@/components/banner.vue'
import pricing from '@/components/pricing.vue'
import subscribe from '@/components/subscribe.vue'
import register from '@/components/register.vue'

export default defineComponent({
  name: 'About',
  components: {
    ConferenceInfo,
    settings,
    navbar,
    pagination,
    modal,
    signIn,
    banner,
    pricing,
    subscribe,
    register
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
