import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const q = (top: number, left: number, background: string) => (
    <div style={{ position: 'absolute', top, left, width: 16, height: 16, background }} />
  )
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 9999,
          overflow: 'hidden',
          border: '1px solid #2e2419',
        }}
      >
        {q(0, 16, '#3a6d85')}
        {q(16, 16, '#f4ece0')}
        {q(16, 0, '#c4704f')}
        {q(0, 0, '#f4ece0')}
        <div
          style={{
            width: 19,
            height: 19,
            borderRadius: 9999,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2e2419',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          AJ
        </div>
      </div>
    ),
    { ...size }
  )
}
