<script setup>
import Serch from '../components/serch.vue'
import Dropdown from '../components/dropdown.vue'
import Play from '../components/play.vue'
import Set from '../components/set.vue'

</script>

<template>
<div class="top-box">
    <div class="top-box__left">
        <div class="logo">
            <img class="logoimg" src="../../public/favicon.ico" alt=""><span>杨名城</span>
        </div>
    </div>
    <div class="top-box__right">
        <div class="item imgbutton">
            <Dropdown />
        </div>
        <div class="item play">
            <Play />
        </div>
        <div class="item serch">
            <Serch />
        </div>
        <div class="item set">
            <Set />
        </div>
    </div>
</div>
</template>

<style scoped lang="sass">

.logoimg
    height: 30px
    border-radius: 50%

.top-box 
    display: flex
    height: 100%
    border-bottom:1px solid red

    &__left 
        width: 100px
        height: 100%
        .logo 
            display: flex
            justify-content: space-around
            align-items: center
            height: 100%
            text-align: center
            line-height: 50px
            // background: red
            border-right: 1px solid red
            cursor: pointer

    &__right 
        flex: 1
        display: flex
        justify-content: space-between
        align-items: center
.item 
    flex: 1

.top-box__right .item + .item 
    margin-left: 10px

.set
    cursor: default
    // background: green

.play 
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
    // background: red
    cursor: default

.imgbutton
    cursor: default
    // background: yellow

.serch
    background: white
    border-radius: 5px
</style>
