<script setup>

</script>

<template>
<div class="sidabar-box">
    <ul class="sid-list">
        <li class="item list-teco" @click="reco">
            <RouterLink to="/reco">推荐</RouterLink>
        </li>
        <li class="item list-rank" @click="rank">
            <RouterLink to="/rank">排行</RouterLink>
        </li> 
        <li class="item list-like" @click="link">
            <RouterLink to="/link">喜欢</RouterLink>
        </li>
    </ul>  
</div>
</template>

<style scoped lang="sass">
a
    text-decoration: none
    color: #000
a:hover
    color: blue
.sid-list
    display: flex
    flex-direction: column
    margin: 0
    padding: 0
    margin-top: 50px
    .item
        flex: 1
        height: 28px
        line-height: 28px
        display: inline
        list-style: none
        text-align: center
        cursor: pointer
</style>
