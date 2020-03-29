<template>
    <b-container class="h-100 p-0 m-0 min-vw-100">
        <b-row class="h-100">
            <b-col cols="2" class="h-100">
                <side-bar />
            </b-col>
            <b-col cols="10" class="h-100">
                <properties-map />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SideBar from '../components/SideBar'
    import PropertiesMap from '../components/PropertiesMap'
    export default {
        name: 'Home',
        components: {
            PropertiesMap,
            SideBar
        }
    }
</script>

<style scoped>

</style>