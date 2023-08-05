<template>
    <div>
        <p :class="{ active: isactive, 'is-danger':is_danger }">class样式绑定1</p>
        <!-- 后边值决定前边对象是否显示 -->
        <p :class="[objectclass]">class样式绑定2</p>
        <p :class="[isactive ? 'active' : '']">class样式绑定3</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isactive: true,
            is_danger: true,
            // false 就没有样式了
            // 多个对象绑定
            objectclass: {
                'active': true,
                'is-danger': false,
            }
        }
    },
}
</script>

<style>
.active{
    font-size: 50px;
}
.is-danger{
    color:red;
}
</style>