<script setup lang="ts"></script>

<template>
  <div class="login-form login-signup">
    <form
      novalidate="novalidate"
      id="kt_login_signup_form"
      class="form fv-plugins-bootstrap fv-plugins-framework"
    >
      <div class="pb-13 pt-lg-0 pt-5">
        <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
          Sign Up
        </h3>
        <p class="text-muted font-weight-bold font-size-h4">
          Enter your details to create your account
        </p>
      </div>
      <div class="form-group fv-plugins-icon-container">
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          autocomplete="off"
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        />
        <div class="fv-plugins-message-container"></div>
      </div>
      <div class="form-group fv-plugins-icon-container">
        <input
          type="email"
          placeholder="Email"
          name="email"
          autocomplete="off"
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        />
        <div class="fv-plugins-message-container"></div>
      </div>
      <div class="form-group fv-plugins-icon-container">
        <input
          type="password"
          placeholder="Password"
          name="password"
          autocomplete="off"
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        />
        <div class="fv-plugins-message-container"></div>
      </div>
      <div class="form-group fv-plugins-icon-container">
        <input
          type="password"
          placeholder="Confirm password"
          name="cpassword"
          autocomplete="off"
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        />
        <div class="fv-plugins-message-container"></div>
      </div>
      <div class="form-group fv-plugins-icon-container">
        <label class="checkbox mb-0"
          ><input type="checkbox" name="agree" /><span class="mr-2"></span> I
          Agree the <a href="#" class="ml-2">terms and conditions</a>.
        </label>
        <div class="fv-plugins-message-container"></div>
      </div>
      <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
        <button
          class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
          style="width: 150px"
        >
          Submit</button
        ><button
          type="button"
          id="kt_login_signup_cancel"
          class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
        >
          Cancel
        </button>
      </div>
      <input type="hidden" />
      <div></div>
    </form>
  </div>
</template>
