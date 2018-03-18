import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.module'

import orgaosModule from './orgaos.module'
import servicosModule from './servicos.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common,
        orgaosModule,
        servicosModule
    },
})

export default store