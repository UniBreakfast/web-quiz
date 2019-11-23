export const

  { assign } = Object,

  globalize = obj => assign(window, obj),

  jsonClone = obj => JSON.parse(JSON.stringify(obj)),

  d = document,
  credom = (el,...props) => assign(d.createElement(el),...props)


Array.prototype.shuffle = function () {
  const shuffled = this.map(q => ({q, r: Math.random()}))
    .sort((a, b)=> a.r - b.r).map(q => q.q)
  this.splice(0, this.length, ...shuffled)
  return this
}