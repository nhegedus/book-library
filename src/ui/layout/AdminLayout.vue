<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const logout = () => {
  store.dispatch("auth/logout").then(() => {
    router.replace({ name: "login" });
  });
};
</script>
<template lang="">
  <div class="admin-layout">
    <div class="d-flex align-end">
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang=""></style>
