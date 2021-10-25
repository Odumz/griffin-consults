<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/logo.png" alt="Workflow" />
        <h2 class="mt-6 md:text-center text-left text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-left md:text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            see a fascinating demo
          </a>
        </p>
      </div>
      <div>
        <p class="flex md:justify-center justify-start pb-2">Sign in with</p>
        <div class="flex justify-between">
          <div class="rounded-md border border-gray-300 px-12 md:px-14 py-3">
            <Icon icon="akar-icons:facebook-fill" class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-blue-800" aria-hidden="true" />
            <!-- <Icon icon="whh:paperclipvertical" class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
          </div>
          <div class="rounded-md border border-gray-300 px-12 md:px-14 py-3">
            <Icon icon="akar-icons:twitter-fill" class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-blue-400" aria-hidden="true" />
          </div>
          <div class="rounded-md border border-gray-300 px-12 md:px-14 py-3">
            <Icon icon="akar-icons:google-fill" class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-red-600" aria-hidden="true" />
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2 mt-5">
          <hr class="border-gray-300 w-32">
          <p class="text-sm">Or continue with</p>
          <hr class="border-gray-300 w-32">
        </div>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon icon="akar-icons:lock-on" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
          <p class="mt-2 text-left md:text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </a>
        </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  components: {
    Icon
  }
})
</script>
