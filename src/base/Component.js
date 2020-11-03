import Vue from 'vue'

/**
 * Base Component
 *
 * @author pp<phuongthephung@gmail.com>
 * @since 0.0.1
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
