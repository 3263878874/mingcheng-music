<script setup>
// import {ref} from 'vue'
import { useRouter } from 'vue-router'
import { useRecoStore } from '../store/reco'
import { useUserStore } from '../store/user'

const router = useRouter()
const recoStore = useRecoStore()
const userStore = useUserStore()





//-------------------------------------
/**
 * 搜索
 */
const handerserch  = ()=>{
    recoStore.searchin(userStore.serchvalue) 
    if(userStore.serchvalue){
        router.replace({path:'serchsonglist'})
    }
    userStore.serchvalue = ''
    // router.push({path:'/serchsonglist',replace:true}) //跳转搜索结果音乐列表页面
}

</script>

<template>
    <div class="serchBox iconfont">
        <input type="text" class="serchInput" v-model="userStore.serchvalue" placeholder="请输入歌单">
        <span @click="handerserch" class="serchin">&#xe60e;</span>
    </div>
</template>

<style scoped lang="sass">
.serchBox
    display: flex
    justify-content: space-between
    align-items: center
.serchInput
    border-style: none
    outline: none
    padding-left: 20px 
    border-radius: 3px
    width: 70%
    height: 26px
    background: white

.serchin
    text-align: center
    font-size: 22px
    margin-right: 6px
    cursor: pointer
</style>