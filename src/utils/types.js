export const hasWindowSupport = typeof window !== 'undefined'
export const hasDocumentSupport = typeof document !== 'undefined'
export const hasNavigatorSupport = typeof navigator !== 'undefined'
export const hasPromiseSupport = typeof Promise !== 'undefined'
export const hasMutationObserverSupport =
  typeof MutationObserver !== 'undefined' ||
  typeof WebKitMutationObserver !== 'undefined' ||
  typeof MozMutationObserver !== 'undefined'

export const isBrowser =
  hasWindowSupport && hasDocumentSupport && hasNavigatorSupport
export const userAgent = isBrowser
  ? window.navigator.userAgent.toLowerCase()
  : ''
export const isJSDOM = userAgent.indexOf('jsdom') > 0
