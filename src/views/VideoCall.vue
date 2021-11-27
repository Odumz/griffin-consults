<template>
  <div class="md:flex pt-14 px-20 justify-around items-end shadow-lg pb-5">
    <div class="flex flex-col items-start">
      <h3 class="text-sm text-indigo-800">Clicka Conference</h3>
      <h1 class="text-3xl text-indigo-900 font-semibold">Big Title here</h1>
    </div>
    <div class="flex">
      <div class="flex items-center text-indigo-900 text-xl">
        <Icon icon="bytesize:clock" class="text-3xl" />
        <p class="px-2">10/12/2021 10:00</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row pb-10 gap-5 px-8 my-10 sm:px-20 pt-10 mx-auto justify-center">
    <!-- video-conference -->
    <div class="md:flex justify-center items-center lg:w-3/5 shadow-lg">
      <div class="h-auto w-full">
        video call goes here
      </div>
    </div>
    <!-- notes & chat -->
    <div class="flex flex-col gap-2 lg:w-2/5">
      <!-- notes -->
      <div class="md:w-full shadow-lg rounded">
        <h1 class="text-indigo-900 p-2 text-left">Notes</h1>
        <div class="h-32">
          <QuillEditor
            class=" rounded-b"
            theme="bubble"
            toolbar="full"
            v-model:content="notes"
            @ready="test"
            @text-change="newText"
          />
        </div>
      </div>
      <!-- chat -->
      <div v-if="chatOpen" class="shadow-lg border-2 mt-2 px-4 py-6 rounded md:w-full h-52">ji</div>
    </div>
  </div>
  <!-- chat input -->
  <div v-if="chatOpen" class="my-4 lg:pt-0">
    <div class="items-center md:shadow-lg justify-center pb-6 md:py-0">
      <div class="flex flex-col mx-8 sm:mx-20 rounded-lg overflow-hidden sm:flex-row pb-10">
        <input class="rounded-lg py-2 sm:w-11/12 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="message" placeholder="type here ...">
        <button class="py-2 px-4 rounded-lg bg-indigo-900 lg:rounded-tr-lg text-gray-100 font-semibold uppercase hover:bg-gray-600">Send</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
    })

    const notes = ref('Hi brother!')

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
