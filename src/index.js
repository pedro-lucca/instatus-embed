import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export const InstatusUptime = ({
  InstatusUrl,
  FailedMessage,
  LoadingMessage,
  UpMessage,
  UpColor,
  HasIssuesMessage,
  HasIssuesColor,
  UnderMaintenanceMessage,
  UnderMaintenanceColor
}) => {
  const { data, error } = useSWR(InstatusUrl, fetcher)
  if (error) return <div>{FailedMessage}</div>
  if (!data) return <div>{LoadingMessage}</div>

  return (
    <div
      style={{
        padding: '1em'
      }}
    >
      <a href={data.page.url} target='_blank' rel='noopener noreferrer'>
        {data.page.status === 'UP' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg height='50' width='50'>
              <circle cx='25' cy='25' r='20' fill={UpColor} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <p>{UpMessage}</p>
          </div>
        )}
        {data.page.status === 'HASISSUES' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg height='50' width='50'>
              <circle cx='25' cy='25' r='20' fill={HasIssuesColor} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <p>{HasIssuesMessage}</p>
          </div>
        )}
        {data.page.status === 'UNDERMAINTENANCE' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg height='50' width='50'>
              <circle cx='25' cy='25' r='20' fill={UnderMaintenanceColor} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <p>{UnderMaintenanceMessage}</p>
          </div>
        )}
      </a>
    </div>
  )
}
