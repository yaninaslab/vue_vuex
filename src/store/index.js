import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: []
  },
  mutations: {
    update_quotes(state, payload) {
      state.quotes = payload;
    }
  },
  actions: {
    get_quote(store) {
      axios.request({
          url: "http://philosophy-quotes-api.glitch.me/quotes"

      }).then((response) => {
          //var quote = response.data['quote'];
          store.commit('update_quotes', response.data);
      }).catch((error) => {
          error;
          //this.$emit('button_clicked', "Issue with API, sorry");
      });
  }
},
  },
)
