<template>
  <div class="h-screen">
    <h1 class="font-thin my-3 font-mono text-5xl">Chat App</h1>
    <div v-if="message" class="border rounded m-2 p-5 h-1/2">
      <p>
        {{ message }}<span v-if="username"> - {{ username }}</span>
      </p>
      <div class="">
        <div v-for="message in messages" :key="message.id">
          {{ message.text }}
          <span>: {{ message.sender }}</span>
        </div>
      </div>
    </div>
    <form class="grid m-5">
      <label v-if="joined" for="message" class="text-left my-3">Message</label>
      <div v-if="joined" class="flex">
        <input
          type="text"
          class="border rounded p-3 w-4/5 mx-2"
          v-model="message"
          @keyup.enter="sendMessage"
        />
        <button
          @click.prevent="sendMessage"
          class="border rounded-full p-3 w-1/5 mx-2 bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Send Message
        </button>
      </div>
      <label v-if="!joined" for="room" class="text-left my-3">Room</label>
      <div v-if="!joined" class="flex">
        <input
          type="text"
          class="border rounded p-3 w-3/4 mx-2"
          v-model="room"
          @keyup.enter="joinRoom"
        />
        <!-- <button type="submit" class="border rounded-full p-3 w-1/5 mx-2 bg-indigo-600 text-white hover:bg-indigo-500">Join</button> -->
      </div>
      <label v-if="!joined" for="username" class="text-left my-3"
        >Username<span v-if="username">: {{ username }}</span></label
      >
      <div v-if="!joined" class="flex">
        <input
          type="text"
          class="border rounded p-3 w-3/4 mx-2"
          v-model="username"
          @keyup.enter="join()"
        />
        <button
          @click.prevent="join"
          class="border rounded-full p-3 w-1/6 mx-2 bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Join
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const username = ref('')
const message = ref('')
const messages = reactive([
  {
    id: 1,
    text: 'Hello',
    sender: 'John'
  },
  {
    id: 2,
    text: 'Hi',
    sender: 'Jane'
  }
])
const room = ref('')
const joined = ref(false)

const join = (username, room) => {
  joined.value = true
  console.log('from join', username, room)
  // socket.emit('join', { username, room })
}

const sendMessage = (username, message) => {
  messages.push({
    id: Date.now(),
    text: message.value,
    sender: username.value
  })
  console.log(message.value)
  // socket.emit('sendMessage', { message: message.value })
  message.value = ''
}
</script>
