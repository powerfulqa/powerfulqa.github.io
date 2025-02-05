// Create a client-side TimelineControls component for interactive elements
export function TimelineControls({ onScroll }: { onScroll: (direction: 'left' | 'right') => void }) {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => onScroll('left')}><ChevronLeft /></Button>
      <Button onClick={() => onScroll('right')}><ChevronRight /></Button>
    </div>
  )
}

// Main Timeline can be server-rendered
export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div>
      <TimelineControls /> {/* This will be client-hydrated */}
      {/* Rest of the static timeline */}
    </div>
  )
} 