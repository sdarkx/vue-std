<template>
    <div>
        <div ref = "container" class="container">{{ content }}</div>
        <button @click="getElementHadle">Element</button>
        <input type="text" ref = "username">
    </div>
</template>

<script>
/**
 * 内容改变 {{ 模板语法 }}
 * 属性改变 v-bind 指令绑定
 * 事件 v-on:click ... or @ 
 * 操作Dom
 * 
 * 无特别需求 不操作dom
 */
export default {
    data(){
        return {
            content: "abc",
        }
    },
    methods: {
        getElementHadle(){
            // 获取Dom节点并操作
            console.log(this.$refs.container.innerHTML = "hahaha");
            // 通过Dom获取值
            console.log(this.$refs.username.value);
        },
    },
}
</script>
