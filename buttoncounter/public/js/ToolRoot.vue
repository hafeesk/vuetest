<template>
        <div>{{ some_data }}<br /><ButtonCounter :count="50"></ButtonCounter></div>
</template>

<script>
        import ButtonCounter from './ButtonCounter.vue'

        export default {
                name: "ToolRoot",
                data: function () {
                        return {
                                some_data: 'sample data',
                        }
                },
                components: {
                        ButtonCounter
                },
        }
</script>