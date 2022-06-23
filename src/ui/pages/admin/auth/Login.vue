<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";

interface UserModel {
  email: string;
  password: string;
}

const store = useStore();
const router = useRouter();

const form: UserModel = {
  email: "",
  password: "",
};

function login() {
  const payload = {
    email: form.email,
    password: form.password,
  };
  store.dispatch("auth/login", payload).then(() => {
    router.replace({ name: "adminHome" });
  });
}
</script>

<template>
  <div
    class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
  >
    <div class="">
      <div class="login-form login-signin">
        <form
          novalidate="novalidate"
          class="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <div class="pb-13 pt-lg-0 pt-5">
            <h3
              class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
            >
              Welcome to Book Library
            </h3>
            <span class="text-muted font-weight-bold font-size-h4"
              >New Here?
              <a id="kt_login_signup" class="text-primary font-weight-bolder"
                >Create an Account</a
              ></span
            >
          </div>
          <div class="form-group fv-plugins-icon-container">
            <label class="font-size-h6 font-weight-bolder text-dark"
              >Email</label
            >
            <div
              id="example-input-group-1"
              label=""
              label-for="example-input-1"
            >
              <input
                type="text"
                name="email"
                v-model="form.email"
                class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
              />
            </div>
            <div class="fv-plugins-message-container"></div>
          </div>
          <div class="form-group fv-plugins-icon-container">
            <div class="d-flex justify-content-between mt-n5">
              <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                >Password</label
              ><a
                id="kt_login_forgot"
                class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                >Forgot Password ?</a
              >
            </div>
            <div
              id="example-input-group-2"
              label=""
              label-for="example-input-2"
            >
              <input
                type="password"
                name="password"
                v-model="form.password"
                autocomplete="off"
                class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
              />
            </div>
            <div class="fv-plugins-message-container"></div>
          </div>
          <div class="pb-lg-0 pb-5">
            <button
              type="button"
              class="btn btn-primary font-weight-bolder btn-block font-size-h6 px-15 py-4 my-3 mr-3"
              @click="login"
            >
              Sign In
            </button>
          </div>
          <input type="hidden" />
          <div></div>
        </form>
      </div>
    </div>
  </div>
</template>
