import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.blue.darken1, // #E53935
        secondary: colors.blue.lighten4, // #FFCDD2
        accent: colors.red.base // #3F51B5
      }
})
