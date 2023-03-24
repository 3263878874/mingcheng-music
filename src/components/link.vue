<script setup>
import { useUserStore } from '../store/user'
import { useRecoStore } from '../store/reco'

const userStore = useUserStore()
const recoStore = useRecoStore()



//-------------------------------
/**
 * 获取歌曲url播放
 */
const songitem = (item)=>{
    recoStore.songurlin(item.id)
}
</script>

<template>
    <ul v-if="userStore.link.length" class="linkbox">
        <li @dblclick="songitem(item)" v-for="(item,index) in userStore.link" :key="index">
            <span>{{ index }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{ item.name }}</span>
        </li>
    </ul>
</template>

<style scoped lang="sass">
.linkbox
    margin-left: 10px
    li
        line-height: 28px

</style>