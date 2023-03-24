<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecoStore } from '../store/reco'
import { useUserStore } from '../store/user'


const route = useRoute()
const recoStore = useRecoStore()
const userStore = useUserStore()


onMounted(()=>{
    //歌单内所有歌曲
    recoStore.trackallin(route.query.id)
})



//-------------------------------------------
/**
 * 调用url
 */
const playmusic = (id)=>{ 
    recoStore.songurlin(id)
}


/**
 * 加入喜欢
 */
const addlink = (item)=>{
    userStore.link.push(item)
}
</script>

<template>
    <div class="musicBox">
        <ul class="musicTop">
            <!-- <li>歌名</li> -->
            <!-- <li>艺术家</li> --> 
        </ul>
    </div>
    <ul class="musicList">
        <li @dblclick="playmusic(item.id)" v-for="(item,index)  in recoStore.song" :key="index"> 
            <div class="center">
                <span class="intexText">{{ index }}</span> &nbsp; &nbsp; &nbsp; 
                <span class="overText">{{ item.name }}</span> &nbsp; &nbsp; &nbsp; 
                <span>{{ item.fee }}</span>
                <span class="additem" @click="addlink(item)">加</span>
            </div>
        </li>
    </ul>
</template>
 
<style scoped lang="sass">
.musicTop
    margin-left: 10px

.musicList
    margin-left: 10px
    font-size: 14px
    li
        height: 28px
        
    li:hover
        background: pink 

.overText 
    width: 300px
    font-size: 14px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    line-height: 28px


.intexText
    font-size: 12px
    line-height: 28px


.additem
    margin-left: 10px
    cursor: pointer
</style>