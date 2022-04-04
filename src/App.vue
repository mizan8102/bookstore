<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link class="btn btn-primary ml-3" to="/usercreate">User Create</router-link>
    |<router-link class="btn btn-info ml-2" to="/userlist">User List</router-link>
    |<router-link class="btn btn-info ml-2" to="/login">Login</router-link>
  </nav>
  <Transition name="fade" mode="out-in">
    <router-view/>
  </Transition>
</template>
<style scoped>
/* .app-body{
    padding: 8px;
} */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

/*
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}*/

</style>
