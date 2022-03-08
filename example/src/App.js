import React from 'react'

import { InstatusUptime } from 'instatus-embed'

const App = () => {
  return (
    <div>
      <InstatusUptime
        InstatusUrl="https://yoloo-help.instatus.com/summary.json"
        FailedMessage="failed to load"
        LoadingMessage="loading..."
        UpMessage="Todos os sistemas operacionais"
        UpColor="#00ff00"
        HasIssuesMessage="Interrupção parcial"
        HasIssuesColor="#ff0000"
        UnderMaintenanceMessage="Manutenção agendada"
        UnderMaintenanceColor="#0000ff"
      />
    </div>
  )
}

export default App
