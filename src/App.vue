<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import SectionMovie from "./components/SectionMovie.vue";
import ActorMovie from "./components/ActorMovie.vue";
import FooterMovie from "./components/FooterMovie.vue";
</script>

<template>
<HeaderBar />
<SectionMovie/>
<ActorMovie/>
<FooterMovie/>

</template>

<style lang="scss"  >
*{
  padding: 0 ;
  margin: 0 ;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container{
  width: 90%;
  margin: 0px auto;
}

</style>
