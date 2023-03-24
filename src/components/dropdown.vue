<script setup>
import { watch } from 'vue'
import Lyrics from '../view/lyrics.vue' //歌词组件
import { useUserStore } from '../store/user'
import { useRecoStore } from '../store/reco'
 
const userStore = useUserStore()  //用户
const recoStore = useRecoStore()  //推荐

/**
 * 监听单首歌曲变化，调用歌曲详情和获取歌词
 */
watch(()=>{
    return recoStore.songitem 
},async (newValue)=>{
    const respnse = await recoStore.detailin(newValue.data[0].id)  //歌曲详情
    userStore.urlimg = respnse[0].al.picUrl
    userStore.name = respnse[0].al.name

    userStore.lyricin(newValue.data[0].id) //获取歌词
})
 
/**
 * 监听歌词变化
 */
watch(()=>{
    return userStore.lyric
},(newValue)=>{
    userStore.lyric = newValue
})












//--------------------------------------------------------------------

/**
 * 歌词面板是否打开
 */
const dropdrown = ()=>{
    userStore.showin()
}




</script>

<template>
    <div class="dropdownBox">
        <div class="dropImg">
            <img @click="dropdrown" class="dropImg" :src="userStore.urlimg" alt="">
        </div> 
        <div class="lyrics">
            <span>{{userStore.name}}</span>
        </div>

        <div v-show="userStore.show" class="lyricsCv">
            <Lyrics /> 
        </div>
    </div>
</template>

<style scoped lang="sass">
.dropdownBox
    display: flex
    margin-left: 20px
.dropImg
    width: 50px 
    cursor: pointer
    height: 35px
    border-radius: 5px
    img
        display: block
        width: 90%


.lyrics
    display: flex
    flex-direction: column
    // font-size: 12px
    margin-left: 10px
    justify-content: space-between

.overflow
    display: inline-block
    width: 120px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

.lyricsCv
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: red

</style> 