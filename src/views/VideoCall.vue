<template>
  <div class="flex pb-32 px-8 sm:px-20 pt-10 mx-auto justify-center">
    <!-- video-conference -->
    <div class="flex justify-center items-center w-3/5">
      <div class="h-96 w-full mx-5 border-2">
        <!-- <QuillEditor
          class=" rounded-b"
          theme="snow"
          toolbar="full"
          v-model="quillEditor"
          :options="quillOptions"
          @blur="onBlur"
          @focus="onFocus"
          @ready="onReady"
          @text-change="onTextChange"
          @selection-change="onSelectionChange"
          @change="onChange"
          @selection-created="onSelectionCreated"
          @selection-removed="onSelectionRemoved"
          @selection-updated="onSelectionUpdated"
          @selection-readied="onSelectionReadied"
          @selection-unreadied="onSelectionUnreadied"
          @selection-readied-change="onSelectionReadiedChange"
          @selection-unreadied-change="onSelectionUnreadiedChange"
          @selection-readied-change-cancel="onSelectionReadiedChangeCancel"
          @selection-unreadied-change-cancel="onSelectionUnreadiedChangeCancel"
          @selection-readied-change-error="onSelectionReadiedChangeError"
          @selection-unreadied-change-error="onSelectionUnreadiedChangeError"
          @selection-readied-change-success="onSelectionReadiedChangeSuccess"
          @selection-unreadied-change-success="onSelectionUnreadiedChangeSuccess"
          @selection-readied-change-success-cancel="onSelectionReadiedChangeSuccessCancel"
          @selection-unreadied-change-success-cancel="onSelectionUnreadiedChangeSuccessCancel"
          /> -->
      </div>
    </div>
    <!-- notes & chat -->
    <div class="flex justify-center w-2/5">
      <!-- notes -->
      <div class="">
        <div class="h-48">
          <QuillEditor
            class=" rounded-b"
            theme="snow"
            toolbar="full"
            v-model:content="notes"
            @ready="test"
            @text-change="newText"
          />
        </div>
      </div>
      <!-- chat -->
      <div class="border-t-2 "></div>
    </div>
  </div>
  <!-- chat input -->
  <div class="my-4">
    <div class="flex items-center md:shadow-lg justify-center pb-6 md:py-0 md:border-b-8 border-indigo-900">
      <!-- <input type="text" class="p-3 w-11/12 bg-gray-600"> -->
      <!-- <form class=""> -->
          <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
            <input class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="message" placeholder="type here ...">
            <button class="py-3 px-4 bg-indigo-900 text-gray-100 font-semibold uppercase hover:bg-gray-600">Send</button>
          </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Video Call',
  components: {
  },
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

    const newText = () => {
      console.log('new notes here', notes.value)
    }

    return {
      test, notes, newText
    }
  }
})
</script>
