<template>
    <div class="aside">
        <h2>Aside</h2>
        <Item />
        <Item />
        <Item />
    </div>
</template>

<script>
import Item from './ItemVue.vue'

export default {
    components: {
        Item
    }
}
</script>

<style scoped>
.aside {
    float: right;
    width: 30%;
    height: 400px;
    border: 5px solid #999;
    box-sizing: border-box;
}
</style>