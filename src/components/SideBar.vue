<template>
    <div class="p-4">
       <states-filter />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import StatesFilter from './SuburbFilter'
export default {
    name: 'SideBar',
    components: {StatesFilter},
    computed: {
        ...mapGetters([
            'getStateOptions'
        ])
    }
}
</script>

<style scoped>

</style>