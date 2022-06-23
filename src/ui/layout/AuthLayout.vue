<script setup lang="ts"></script>

<template>
  <main class="auth-page">
    <img
      class="mb-4"
      src="@/ui/assets/logo.svg"
      alt=""
      width="72"
      height="57"
    />
    <router-view></router-view>
    <div
      class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0"
    >
      <a href="#" class="text-primary font-weight-bolder font-size-h5">Terms</a
      ><a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
        >Plans</a
      ><a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
        >Contact Us</a
      >
    </div>
  </main>
</template>
<style>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #ffffff;
}
.auth-page {
  width: 500px;
}
</style>
