import Vue from 'vue'

/**
 * Base Component
 *
 * @author pp<phuongpt47@fpt.com.vn>
 * @since 1.0.0
 */
const Component = Vue.extend({
  props: {
    classes: {
      type: [String, Array],
      default: undefined
    },
    variant: {
      type: String,
      default: undefined
    }
  }
})

export default Component
