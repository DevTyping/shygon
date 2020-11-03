<template>
  <b-alert variant="danger" :show="errors !== null">
    <ul v-if="Array.isArray(flatErrors)" class="mb-0 -ml-4">
      <li v-for="(value, key, index) in flatErrors" :key="index">
        {{ value }}
      </li>
    </ul>

    <p v-else>{{ errors }}</p>
  </b-alert>
</template>

<script>
import Component from './../../base/Component'

export default Component.extend({
  props: {
    errors: {
      type: [String, Array, Object],
      default: () => {}
    }
  },

  computed: {
    flatErrors() {
      if (!this.errors) return false
      if (typeof this.errors === 'string') return [this.errors]

      let errors = Object.values(this.errors)
      errors = errors.flat()
      return errors
    }
  }
})
</script>
