<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()




//-------------------------------------------------
const prev = ()=>{
    router.back()
}

const next = ()=>{
    router.forward()
}

const setbox = ()=>{
    router.replace({path:'/setbox'})
}

</script>

<template>
    <div class="setBox iconfont">
        <span @click="prev">&#xe648;</span>&nbsp;&nbsp;
        <span @click="next">&#xe667;</span>&nbsp;&nbsp;
        <span @click="setbox">&#xe624;</span>
    </div>
</template>

<style scoped lang="sass">
.setBox
    text-align: center
    width: 120px
    font-size: 22px
    cursor: pointer
    margin-left: 75px

    span:hover
        color: blue 

</style>