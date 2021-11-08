<template>
  <div>
    <HeaderHome />
    <MainHome />
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "./HeaderHome.vue";
import MainHome from "./MainHome.vue";
import FooterHome from "./FooterHome.vue";
export default {
  components: {
    HeaderHome,
    MainHome,
    FooterHome,
  },
  name: "Home",
};
</script>

<style lang="scss">
/* Monsterrat font */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: Montserrat;
}
</style>