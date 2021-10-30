<template>
  <div class="h-screen">
    <h1 class="font-thin my-3 font-mono text-5xl">Chat App</h1>
    <div v-if="messages" class="border rounded m-2 p-5 h-1/2 shadow-md overflow-y-scroll">
      <!-- <p>
        {{ message }}<span v-if="username"> - {{ username }}</span>
      </p> -->
      <div v-if="joined" class="">
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
          class="border rounded p-3 w-6/7 mx-2"
          v-model="message.text"
          placeholder="type here..."
        />
        <button
          @click.prevent="sendMessage"
          class="border rounded-full p-5 mx-2 bg-indigo-600 text-white hover:bg-indigo-500"
        >
          <Icon icon="fluent:send-24-regular" />
        </button>
      </div>
      <label v-if="!joined" for="room" class="text-left my-3">Room</label>
      <div v-if="!joined" class="flex">
        <input
          type="text"
          class="border rounded p-3 w-full mx-2"
          v-model="room.name"
          @keyup.enter="joinRoom"
        />
        <!-- <button type="submit" class="border rounded-full p-3 w-1/5 mx-2 bg-indigo-600 text-white hover:bg-indigo-500">Join</button> -->
      </div>
      <label v-if="!joined" for="username" class="text-left my-3"
        >Username<span v-if="user.name">: {{ user.name }}</span></label
      >
      <div v-if="!joined" class="flex">
        <input
          type="text"
          class="border rounded p-3 w-6/7 mx-2"
          v-model="user.name"
          @keyup.enter="join()"
        />
        <button
          @click.prevent="join"
          class="border rounded-full px-5 mx-2 bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Join
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'

const user = reactive({ name: '' })
const message = reactive({ text: '' })
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
const room = reactive({ name: '' })
const joined = ref(false)

const join = () => {
  joined.value = true
  // socket.emit('join', { username, room })
}

const sendMessage = () => {
  messages.push({
    id: Date.now(),
    text: message.text,
    sender: user.name
  })
  // socket.emit('sendMessage', { message: message.value })
  message.text = ''
}
</script>
