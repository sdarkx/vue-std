<template>
    <div>
        <p :style="{color: col, fontSize: font_size + 'px'}">style样式绑定1</p>
        <p :style="styleobj">style样式绑定2</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            col: 'green',
            font_size: 50,
            // 对象形式
            styleobj: {
                color: 'red',
                fontSize: '100px',
            }
        }
    },
}
</script>
