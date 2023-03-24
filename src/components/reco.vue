<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useRecoStore } from '../store/reco'

const router = useRouter()

const recoStore = useRecoStore()


onBeforeMount(()=>{
    recoStore.corelistin()//调用所有歌单
})


//-----------------------------------------
/**
 * 跳转到推荐歌单音乐列表
 */
function itemlist(item){
    router.push({path:'/sonlist',query:item})
}

</script>

<template>
    <ul class="recolist" v-show="recoStore.list">
        <li @click="itemlist(item)" v-for="(item)  in recoStore.list" key="index">
            <img :src="item.coverImgUrl" alt="">
            <div class="text">
                <p>{{item.name}}</p>
                <p>播:{{ item.playCount }}</p>
            </div> 
        </li> 
    </ul>
</template>

<style scoped lang="sass">
.recolist
    display: flex
    flex-wrap: wrap 
    margin-button:10px
    li
        display: flex
        align-items: center
        justify-content: space-around
        width: 230px
        height: 110px
        border-radius: 10px
        margin: 10px 33px
        background: white
        cursor: pointer
        img
            display: block
            float: left
            margin-right: 10px
            border-radius: 5px
            width: 40%
            height: 100px
            margin-left: 5px

</style>