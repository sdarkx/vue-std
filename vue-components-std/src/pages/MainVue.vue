<template>
    <div>
        <div class="main">
            <h2>Main</h2>

            <Article />
            <Article />
        </div>
    </div>
</template>

<script>
import Article from './ArticleVue.vue'

export default {
    components:{
        Article,
    }
}
</script>

<style scoped>
.main{
    float: left;
    width: 69%;
    height: 400px;
    border: 5px solid #999;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
}
</style>