<template>
    <div>
        <div class="mt-3 text-left "><strong>Filter by state:</strong></div>
        <b-form-select v-model="selected" :options="getSuburbOptions"></b-form-select>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'SuburbFilter',

    computed: {
        ...mapGetters([
            'getSuburbOptions'
        ]),

        selected: {
            get () {
                return this.$store.state.mapData.selectedOptions.Suburb
            },
            set (value) {
                this.$store.commit('SET_SELECTED_STATE', value)
            }
        }
    },


}
</script>

<style scoped>

</style>