import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    setCartList (state, provider) {
       state.cartList = provider
    },
  },
  actions: {
    getCartList () {

    },
    updateCartList () {

    }
  }
})