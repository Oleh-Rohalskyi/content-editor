<template>
    <select class="dropdown" @change="$emit('change', $event.target.value)" >
        <option 
            v-for="value in options" 
            :key="value.name" 
            :selected="value.selected" 
            :value="value.name" >{{value.name}}</option>
    </select >
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    options: Array
  }
}
</script>

<style lang="scss" scoped>
    .dropdown {
        min-width: 310px;
        background-color: #282C34;
        border: 1px solid #DE6D77;
        color: #DE6D77;
        font-size: 20px;
        font-weight: bolder;
        height: 40px;
        width: 200px;
        margin: 5px auto;
    }
</style>