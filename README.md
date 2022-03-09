# instatus-embed

> Web component to show/embed page status, using instatus api and swr

[![NPM](https://img.shields.io/npm/v/instatus-embed.svg)](https://www.npmjs.com/package/instatus-embed) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save instatus-embed
```

## Usage

```jsx
import React, { Component } from 'react'

import { InstatusUptime } from 'instatus-embed'

class Example extends Component {
  render() {
    return (
      <InstatusUptime
        InstatusUrl="https://YOUR_SUBDOMAIN.instatus.com/summary.json"
        FailedMessage="failed to load"
        LoadingMessage="loading..."
        UpMessage="All System Operational"
        UpColor="#00ff00"
        HasIssuesMessage="Have some issues"
        HasIssuesColor="#ff0000"
        UnderMaintenanceMessage="Schedule Maintenance"
        UnderMaintenanceColor="#0000ff"
      />
    )
  }
}
```

## License

MIT © [petrolins](https://github.com/petrolins)
