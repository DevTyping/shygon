<template>
  <validation-observer ref="observer">
    <b-modal
      :id="id"
      :size="size"
      :title="title"
      no-close-on-backdrop
      no-close-on-esc
      scrollable
      @hidden="onClose"
    >
      <!-- Errors -->
      <f-error :errors="errors" />

      <!-- Slot -->
      <slot />

      <!-- Modal Footer -->
      <template v-slot:modal-footer="{ cancel }">
        <b-button v-if="showSubmitButton" variant="primary" @click="onSubmit()">
          {{ submitText }}
        </b-button>
        <b-button
          v-if="showCancelButton"
          variant="light-primary"
          @click="cancel()"
        >
          {{ cancelText }}
        </b-button>
      </template>
    </b-modal>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import Component from './../../base/Component'

export default Component.extend({
  components: { ValidationObserver },

  props: {
    id: {
      type: String,
      default: 'modal'
    },

    size: {
      type: String,
      default: undefined
    },

    title: {
      type: String,
      default: 'Modal'
    },

    showSubmitButton: {
      type: Boolean,
      default: true
    },

    showCancelButton: {
      type: Boolean,
      default: true
    },

    submitText: {
      type: String,
      default: 'Submit'
    },

    cancelText: {
      type: String,
      default: 'Close'
    },

    errors: {
      type: [String, Array, Object],
      default: () => null
    }
  },

  methods: {
    onSubmit() {
      // Trigger vee-validate
      return this.$refs.observer
        .validate()
        .then((isValid) => {
          if (isValid) this.$emit('on-submit')
        })
        .catch((err) => {
          throw new Error(err)
        })
    },

    onClose() {
      this.$emit('on-close')
    }
  }
})
</script>
