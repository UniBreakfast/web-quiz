export const

  { assign } = Object,

  globalize = obj => assign(window, obj),

  jsonClone = data => JSON.parse(JSON.stringify(data))


Array.prototype.shuffle = function () {
  const shuffled = this.map(q => ({q, r: Math.random()}))
    .sort((a, b)=> a.r - b.r).map(q => q.q)
  this.splice(0, this.length, ...shuffled)
  return this
}