<template>
  <div class="reveal md:flex pt-14 px-20 justify-around items-end shadow-lg rounded pb-5">
    <div class="reveal fromLeft flex flex-col items-start">
      <h3 class="text-sm text-indigo-800">Clicka Conference</h3>
      <h1 class="text-3xl text-indigo-900 font-semibold">Big Title here</h1>
    </div>
    <div class="flex reveal fromRight">
      <div class="flex items-center text-indigo-900 text-xl">
        <Icon icon="bytesize:clock" class="text-3xl" />
        <p class="px-2">10/12/2021 10:00</p>
      </div>
    </div>
  </div>
  <div class="reveal fromBottom flex flex-col lg:flex-row gap-5 px-8 my-10 sm:px-20 pt-10 mx-auto justify-center">
    <!-- video-conference -->
    <div class="reveal fromRight md:flex justify-center items-center lg:w-3/5 shadow-lg">
      <div class="h-auto w-full">
        video call goes here
      </div>
    </div>
    <!-- notes & chat -->
    <div class="reveal fromLeft flex flex-col gap-2 lg:w-2/5">
      <!-- notes -->
      <div class="reveal fromBottom md:w-full rounded">
        <h1 class="text-indigo-900 p-2 text-left">Notes</h1>
        <div class="h-32 shadow-lg rounded">
          <QuillEditor
            class=""
            contentType="html"
            theme="bubble"
            toolbar="full"
            v-model:content="notes"
            @ready="test"
            @text-change="newText"
            placeholder="Type here..."
          />
        </div>
      </div>
      <!-- chat -->
      <div v-if="chatOpen" class="reveal fromTop shadow-lg mt-2 px-4 py-6 rounded md:w-full h-52">
        <h1 class="text-indigo-900 p-2 text-left">General Chat</h1>
      </div>
    </div>
  </div>
  <!-- chat input -->
  <div v-if="chatOpen">
    <div class="reveal items-center md:shadow-lg justify-center pb-6 md:py-0">
      <div class="flex flex-col gap-y-2 mx-8 sm:mx-20 rounded-lg overflow-hidden sm:flex-row pb-10">
        <input class="rounded-lg py-2 sm:w-11/12 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="message" placeholder="type here ...">
        <button class="py-2 px-4 rounded-lg bg-indigo-900 lg:rounded-tr-lg text-gray-100 font-semibold uppercase hover:bg-gray-600">Send</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Video Call',
  components: { Icon },
  setup () {
    onMounted(async () => {
      console.log('mounted')
      await getContent
      // const notes = .getContents()
      console.log('notes here', JSON.stringify(notes.value))
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

    const notes = ref('')

    const getContent = () => {
      console.log('i am here')
      console.log('notes is ', notes.value)
      return notes
    }

    const test = () => {
      console.log('hi')
      // console.log(notes)
    }

    const chatOpen = ref(true)

    const newText = () => {
      console.log('new notes here', notes.value)
    }

    return {
      test, notes, newText, chatOpen
    }
  }
})
</script>
