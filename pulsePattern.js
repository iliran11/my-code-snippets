function addTask() {
  queue.push
  if(!flag) {
    flushQueue
  }
}

function _.debounce(flushQueue() {
  flag = !!queue[0];
  if (flag) {
    tasks = queue.unshift
    limiter.run(tasks).then(flushQueue)
  }
}, 1000)
