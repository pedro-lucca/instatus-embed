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
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem'
      }}
    >
      <a href={data.page.url} target='_blank' rel='noopener noreferrer'>
        {data.page.status === 'UP' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              fill={UpColor}
              viewBox='0 0 16 16'
              aria-hidden='true'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: '1rem' }}
            >
              <circle cx='8' cy='8' r='8' />
            </svg>
            <p>{UpMessage}</p>
          </div>
        )}
        {data.page.status === 'HASISSUES' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              fill={HasIssuesColor}
              viewBox='0 0 16 16'
              aria-hidden='true'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: '1rem' }}
            >
              <circle cx='8' cy='8' r='8' />
            </svg>
            <p>{HasIssuesMessage}</p>
          </div>
        )}
        {data.page.status === 'UNDERMAINTENANCE' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              fill={UnderMaintenanceColor}
              viewBox='0 0 16 16'
              aria-hidden='true'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: '1rem' }}
            >
              <circle cx='8' cy='8' r='8' />
            </svg>
            <p>{UnderMaintenanceMessage}</p>
          </div>
        )}
      </a>
    </div>
  )
}
