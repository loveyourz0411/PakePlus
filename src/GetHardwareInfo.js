const ports = []
let cacheData = null
self.onconnect = (e) => {
  ports.push(e.source)
  cacheData && e.source.postMessage(cacheData)
  e.source.onmessage = ({ data }) => {
    if (data === 'close') {
      ports.splice(ports.indexOf(e.source), 1)
    }
  }
}

function createEventSource() {
  const eventSource = new EventSource('/VIPSystem/api/getHardwareInfo')
  eventSource.addEventListener('open', () => {
    console.log('SSE连接成功')
  })
  eventSource.addEventListener('message', (event) => {
    // 处理来自服务器的消息事件
    cacheData = event.data
    ports.forEach(port => port.postMessage(event.data))
  })
  eventSource.addEventListener('error', err => {
    console.log('SSE Error', err)
  })
}

createEventSource()
