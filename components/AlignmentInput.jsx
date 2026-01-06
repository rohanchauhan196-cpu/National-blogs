import React from 'react'
import {PatchEvent, set, unset} from 'sanity'

// Simple alignment input for the block inspector
export default function AlignmentInput({value, onChange}) {
  const setAlign = (val) => {
    onChange(PatchEvent.from(val ? set(val) : unset()))
  }

  const buttons = [
    {label: 'L', value: 'left'},
    {label: 'C', value: 'center'},
    {label: 'R', value: 'right'},
  ]

  return (
    <div style={{display: 'flex', gap: 6, alignItems: 'center'}}>
      {buttons.map((b) => (
        <button
          key={b.value}
          type="button"
          onClick={() => setAlign(b.value)}
          style={{
            minWidth: 28,
            height: 28,
            borderRadius: 4,
            border: '1px solid #ddd',
            background: value === b.value ? '#111' : '#fff',
            color: value === b.value ? '#fff' : '#111',
            cursor: 'pointer',
          }}
        >
          {b.label}
        </button>
      ))}
      <button
        type="button"
        onClick={() => setAlign(undefined)}
        title="Reset"
        style={{marginLeft: 8, border: 'none', background: 'transparent', color: '#888'}}
      >
        Reset
      </button>
    </div>
  )
}
