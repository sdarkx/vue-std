<template>
    <div>
        <h2>侦听器</h2>
        <p>{{ msg }}</p>
        <button @click="BUpdatetClick">Button</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello',
        }
    },
    methods: {
        BUpdatetClick() {
            this.msg = "World";
        }
    },
    watch: {
        // msg与data中的属性名称一致
        // 两个参数
        // 数据发生变化 自动执行的函数
        msg(newVal, oldVal){
            console.log(newVal);
            console.log(oldVal);
        },
    },
}
</script>
