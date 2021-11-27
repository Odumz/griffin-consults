<template>
  <div class="reveal px-8 sm:px-20 overflow-hidden">
    <div class="reveal fromBottom">
      <h1 class="text-4xl text-indigo-900 py-5 mt-3 font-semibold">Frequently Asked Questions</h1>
      <p>Check out our frequently asked questions for useful hints on how to get the best out of Clicka or just for answers to unending questions.</p>
    </div>
    <div class="image reveal fromBottom">
      <img src="https://res.cloudinary.com/griffintech/image/upload/v1637845077/clicka/faq-main_-compressed_nzbofz.png" alt="FAQ">
    </div>
    <div class="content">
      <div class="content-text">
        <details class="content-details">
          <summary class="text-indigo-900 text-xl font-semibold">What is Clicka?</summary>
          <p class="text-lg">
            The conference is a one-day event that will be held in the heart of the city of Bhringraj, in the state of Gujarat. The conference will be held on the first day of the conference.
          </p>
        </details>
        <details class="content-details">
          <summary class="text-indigo-900 text-xl font-semibold">Who can use Clicka?</summary>
          <p class="text-lg">
            The conference is a one-day event that will be held in the heart of the city of Bhringraj, in the state of Gujarat. The conference will be held on the first day of the conference.
          </p>
        </details>
        <details class="content-details">
          <summary class="text-indigo-900 text-xl font-semibold">What is Clicka conference?</summary>
          <p class="text-lg">
            The conference is a one-day event that will be held in the heart of the city of Bhringraj, in the state of Gujarat. The conference will be held on the first day of the conference.
          </p>
        </details>
        <details class="content-details">
          <summary class="text-indigo-900 text-xl font-semibold">What is Clicka conference?</summary>
          <p class="text-lg">
            The conference is a one-day event that will be held in the heart of the city of Bhringraj, in the state of Gujarat. The conference will be held on the first day of the conference.
          </p>
        </details>
        <details class="content-details">
          <summary class="text-indigo-900 text-xl font-semibold">What is Clicka conference?</summary>
          <p class="text-lg">
            The conference is a one-day event that will be held in the heart of the city of Bhringraj, in the state of Gujarat. The conference will be held on the first day of the conference.
          </p>
        </details>
      </div>
      <div class="floater">
        <img src="https://res.cloudinary.com/griffintech/image/upload/v1637846826/clicka/questions-comp_d6ruje.png" alt="" class="w-2/9 relative left-4/9">
      </div>
    </div>
  </div>
</template>

<style>
  .content-details {
    @apply my-2 bg-gray-100;
  }

  .image {
    @apply w-3/7 flex justify-center items-center mx-auto;
  }

  .content-text {
    @apply flex flex-col my-10 w-full;
  }

  .floater {
    @apply relative left-1/2;
  }
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineComponent({
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
