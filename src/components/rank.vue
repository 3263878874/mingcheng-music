<script setup>
import { onMounted } from 'vue'
import { useRankStore } from '../store/rank'
import { useRecoStore } from '../store/reco'
import { useUserStore } from '../store/user'

const rankStore = useRankStore()
const recoStore = useRecoStore()
const userStore = useUserStore()

onMounted(()=>{
    if(!rankStore.song){
    }
    rankList()
})



//------------------------------------------------------
/**
 * 页面打开获取排行歌曲
 */
const rankList = async ()=>{
    const response = await rankStore.toplistallin()
}

/**
 * 获取歌曲url播放
 */
const songitem = (item)=>{
    recoStore.songurlin(item.id)
}

/**
 * 追加到喜欢列表
 */
const joinlink = (item)=>{
    userStore.link.unshift(item)
}


</script>

<template>
    <ul class="songlist" v-show="rankStore.song">
        <li @dblclick="songitem(item)" v-for="(item,index) in rankStore.song" :key="index">
            <div class="center">
                <span>{{ index }}</span>
                <span class="name">{{ item.name }}</span>
            </div>
            <div class="footer iconfont">
                <span @click="joinlink(item) ">加</span> 
            </div>
        </li>
    </ul>
</template>

<style scoped lang="sass">
.songlist
    padding-left: 10px
    li 
        display: flex
        justify-content: space-between
        line-height: 28px
        span
            // line-height: 28px
            font-size: 12px

        .name
            font-size: 16px
            padding-left: 25px
            // width: 300px
            // overflow: hidden
            // text-overflow: ellipsis
            // white-space: normal
    li:hover
        background: pink


.footer
    margin-right: 20px
    cursor: pointer

</style>