<template>
    <div>
        <div v-if="flag === 10">Hello</div>
        <div v-else-if="flag === 9">Hello</div>
        
        <div v-show="flag">123show</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: 10
        }
    }
}
</script>
