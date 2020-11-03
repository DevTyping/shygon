import _Vue from '../vue'
import { isJSDOM } from './types'

/**
 * Check multiple Vue Instance
 */
export const checkMultipleVue = (() => {
  let checkMultipleVueWarned = false

  const MULTIPLE_VUE_WARNING = [
    'Multiple instances of Vue detected!',
    'You may need to set up an alias for Vue in your bundler config.'
  ].join('\n')

  return Vue => {
    if (!checkMultipleVueWarned && _Vue !== Vue && !isJSDOM) {
      // eslint-disable-next-line no-console
      console.warn(MULTIPLE_VUE_WARNING)
    }
    checkMultipleVueWarned = true
  }
})()

/**
 * Install Factory
 */
export const installFactory = ({ components } = {}) => {
  const install = Vue => {
    if (install.installed) {
      return
    }

    install.installed = true
    checkMultipleVue(Vue)
    registerComponents(Vue, components)
  }

  install.installed = false
  return install
}

/**
 * Register a single component
 *
 * @param {Object} Vue
 * @param {String} name
 * @param {Function} def
 */
export const registerComponent = (Vue, name, def) => {
  if (Vue && name && def) {
    Vue.component(name, def)
  }
}

/**
 * Register list of components
 *
 * @param {Object} Vue
 * @param {Object} components
 */
export const registerComponents = (Vue, components = {}) => {
  for (const component in components) {
    registerComponent(Vue, component, components[component])
  }
}
