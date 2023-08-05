<template>
    <div>
        <div>
            <p v-bind:id="appid" v-bind:class="appclass">this is life</p>
        </div>
        <div>
            <button :disabled="isButtonDisabled">Button</button>
        </div>
        <div v-bind="ObjectsArrt">绑定属性对象</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "active",
            appid: "appid",
            appclass: "appclass",
            isButtonDisabled: false,
            ObjectsArrt: {
                id: "appid",
                class: "appclass",
            },
        };
    },
};
</script>

<style>
#appid {
    color: red;
}
</style>