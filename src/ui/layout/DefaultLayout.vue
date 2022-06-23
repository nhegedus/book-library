<template>
  <div class="wrapper">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@ui/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/auth/login">Login</RouterLink>
    </nav>
  </div>
</template>
