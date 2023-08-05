<template>
    <div>
        <h1 class="container">{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '组件基础组成',
        }
    }
}
</script>

<!-- scoped 让当前样式只在当前组件生效 -->
<style scoped>
.container{
    color: rebeccapurple;
}
</style>