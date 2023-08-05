<template>
    <div>
        <h2>事件处理</h2>
        <div>
            <h3>内联事件处理器</h3>
            <button v-on:click="count++">+1</button>
            <button @click="count--">-1</button>
            <p>{{ count }}</p>
        </div>
        <div>
            <h3>方法事件处理器</h3>
            <button v-on:click="addCount">+1</button>
            <button @dblclick="subCount">-1</button>
            <p>{{ count }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count: 0,
        }
    },
    // 所有的方法或函数放在这里
    methods: {
        addCount() {
            // this.读取到data里面的数值
            this.count += 1;
        },
        subCount() {
            this.count -= 1;
        },
    }
}
</script>
