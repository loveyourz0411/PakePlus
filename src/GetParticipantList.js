// 获取参与者列表
function GetParticipantList() {
  return new Promise((resolve) => {
    return self.fetch('/VIPControlCenter/VIP/GetParticipantList', {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.ok ? response.json() : null)
      .then(resolve)
      .catch(() => resolve(null))
  })
}

const INTERVAL_TIME = 800
const SYSTEM_COMPONENTS = [
  'VIPControlCenter',
  'VIPDataMonitor',
  'VIPScriptEngine',
  'VIPRTManager',
  'VIPSystem',
  '平台服务器'
]
const ports = []

// 处理连接
self.onconnect = (e) => {
  const port = e.source
  ports.push(port)
  port.onmessage = ({ data }) => {
    if (data === 'close') {
      const index = ports.indexOf(port)
      if (index > -1) {
        ports.splice(index, 1)
      }
    }
  }
}

// 轮询获取数据
async function startLoop() {
  try {
    const res = await GetParticipantList()
    const list = res?.participant_list || []

    // 处理列表数据
    list.forEach(item => {
      item.disabled = SYSTEM_COMPONENTS.some(comp => item.name.includes(comp))
    })

    // 过滤并排序
    const data = list
      .filter(v => !v.name.includes('pyFile-'))
      .sort((v1, v2) => v1.status === 'Running' ? -1 : v1.name.localeCompare(v2.name))

    // 广播数据
    ports.forEach(port => port.postMessage(data))
  } catch (err) {
    console.error('获取参与者列表失败:', err)
  } finally {
    setTimeout(startLoop, INTERVAL_TIME)
  }
}

startLoop()
