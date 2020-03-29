import Vue from 'vue'
import Vuex from 'vuex'
import mapData from '@/store/modules/mapData'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mapData: mapData
    }
})
