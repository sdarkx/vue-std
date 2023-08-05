<template>
    <div>
        <h2>表单输入绑定</h2>
        <div>
            <input type="text" v-model="msg">
            <p>{{ msg }}</p>
            <!-- 复选框等等也可以使用v-model -->
            <input type="checkbox" id="checkbox" v-model="checkbox">
            <label for="checkbox">{{ checkbox }}</label>

            <h1></h1>

            <!-- 不会即时响应 只有回车或者失去焦点才会相应 -->
            <input type="text" v-model.lazy="msg">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello',
            checkbox: false
        }
    },
}
</script>
