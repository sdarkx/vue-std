<template>
    <div>
        <div>
            <input type="text" v-model="search">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    // 监听器
    watch: {
        search(newVal, oldVal) {
            this.$emit("MainEvent", newVal);
        }
    }
}
</script>