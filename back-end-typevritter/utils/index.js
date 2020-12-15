module.exports = function (io) {
  require('./ChatNotif')(io)
  return io
}
