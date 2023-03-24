<script setup>
import Latop from './latop.vue'
import Lasidabar from './lasidabar.vue'
</script>

<template>
  <div class="layout">
    <div class="la-top">
      <Latop />
    </div>
    <div class="la-body">
      <div class="body-left">
        <Lasidabar />
      </div>
      <div class="body-right">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.layout
  display: flex
  flex-direction: column
.la-top 
  height: 50px
  
.la-body
  display: flex
  flex: 1
  height: 100%
  

.body-left
  width: 99px
  height: 100%
  border-right: 1px solid red 

.body-right
  overflow-y: auto
  // height: 100%
  margin-bottom: 50px
  flex: 1

.body-right::-webkit-scrollbar
    width: 10px
    // background-color: pink

.body-right::-webkit-scrollbar-button 
    background-color: red
    border-radius: 50%
    height: 10px

.body-right::-webkit-scrollbar-thumb
    background-color: white
    border-radius: 10px

.body-right::-webkit-scrollbar-track 
    background-color: Black
    border-radius: 10px

</style>