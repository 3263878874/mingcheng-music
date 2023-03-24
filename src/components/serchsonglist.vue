<script setup>
import { useUserStore } from '../store/user'
import { useRecoStore } from '../store/reco'

const userStore = useUserStore()
const recoStore = useRecoStore()



//---------------------
/**
 * 播放
 */
const palysong = (itme)=>{
    recoStore.songurlin(itme.id)
}
</script>

<template>
    <h1>搜索</h1>
    <ul class="serlistbox" v-if="recoStore.searchlist">
        <li @dblclick="palysong(itme)" v-for="(itme,index) in recoStore.searchlist.songs" :key="index">
            <span>{{ index }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{ itme.name }}</span>
        </li>
    </ul>
</template>


<style scoped lang="sass">
.serlistbox
    margin-left: 10px
    li
        line-height: 28px
    li:hover
        background: pink

</style>