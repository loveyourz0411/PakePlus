function StartLog(body) {
  return new Promise((resolve) => {
    return self.fetch('/VIPDataMonitor/VIP/StartLog', { method: 'POST', body }).then(response => {
      if (!response.ok) return resolve()
      return response.json()
    })
      .then(resolve)
      .catch(resolve)
  })
}

function GetLogInfo(pid) {
  return new Promise((resolve) => {
    return self.fetch(`/VIPDataMonitor/VIP/GetLogInfo?pid=${pid}`).then(response => {
      if (!response.ok) return resolve()
      return response.json()
    })
      .then(resolve)
      .catch(resolve)
  })
}

/** 轮询获取log进度信息 */
function loopLogInfo(id) {
  GetLogInfo(id).then(res => {
    if (res?.code !== 200) return console.error(res?.errMsg || '获取进度信息失败')
    self.postMessage({ type: 'logInfo', data: res.data })
    setTimeout(loopLogInfo, 1000, id)
  })
}
self.onmessage = ({ data }) => {
  const { tabData = [], body, type, logId } = JSON.parse(data)
  if (type === 'startLog') {
    const message_list = []
    const cacheMsgs = new Set() // 记录缓存 防止重复
    tabData.forEach((params) => {
      const { WordName, MsgName, protocolType, BusName, label, level, parentNames = [] } = params
      if (['A429', 'A825'].includes(protocolType)) {
        const bus_name = BusName || label || parentNames[1]
        if (level === 2) {
          if (cacheMsgs.has(bus_name)) return
          message_list.push({ msg_type: protocolType, bus_name: label })
          cacheMsgs.add(bus_name)
        } else {
          const msg_name = protocolType === 'A429' ? WordName : MsgName
          const msg = `${bus_name}__${msg_name}`
          if (cacheMsgs.has(bus_name) || cacheMsgs.has(msg)) return
          message_list.push({ msg_type: protocolType, bus_name, msg_name })
          cacheMsgs.add(msg)
        }
      } else if (['Analog', 'TCP_UDP', 'Discrete', 'UserProtocol', 'Serial', 'A664'].includes(protocolType)) {
        const msg_name = level === 2 ? label : parentNames[1]
        const msg = `${protocolType}__${msg_name}`
        if (cacheMsgs.has(msg)) return
        message_list.push({ msg_type: protocolType, msg_name })
        cacheMsgs.add(msg)
      }
    })

    body.message_list = message_list
    StartLog(JSON.stringify(body)).then(res => {
      self.postMessage({ type: 'startLog', data: res })
      res.code === 200 && loopLogInfo(res.id)
    })
  } else if (type === 'logInfo') {
    loopLogInfo(logId)
  }
}
