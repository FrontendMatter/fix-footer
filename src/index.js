import './style'

import { handler } from 'dom-factory'

export const footerComponent = (element) => ({
  element,
  _reset: function () {
    this.element.style.opacity = 1
    var offsetTop = this.element.offsetTop
    var offsetHeight = this.element.offsetHeight
    var bottom = offsetTop + offsetHeight
    var isFixed = window.getComputedStyle(this.element).position === 'fixed'
    var isContentBelow = isFixed && offsetTop < document.documentElement.offsetHeight

    this.element.classList[bottom <= window.innerHeight && !isContentBelow ? 'add' : 'remove']('fix-footer--fixed')
  },

  _debounceResize: function () {
    clearTimeout(this._debounceResizeTimer)
    this._debounceResizeTimer = setTimeout(function () {
      if (this._resizeHeight !== window.innerHeight) {
        this._resizeHeight = window.innerHeight
        this._reset()
      }
    }.bind(this), 50)
  },

  init: function () {
    this._debounceResize = this._debounceResize.bind(this)
    window.addEventListener('load', function () {
      this._reset()
      this._resizeHeight = window.innerHeight
      window.addEventListener('resize', this._debounceResize)
    }.bind(this))
  },

  destroy: function () {
    clearTimeout(this._debounceResizeTimer)
    window.removeEventListener('resize', this._debounceResize)
  }
})

handler.register('fix-footer', footerComponent)