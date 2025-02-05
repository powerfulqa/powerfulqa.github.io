import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

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
  const handleScroll = (direction: 'left' | 'right') => {
    // Implement scroll logic here
  }

  return (
    <div>
      <TimelineControls onScroll={handleScroll} />
      {/* Rest of the static timeline */}
    </div>
  )
}

interface TimelineNavigationProps {
  onScroll: (direction: 'left' | 'right') => void
}

export function TimelineNavigation({ onScroll }: TimelineNavigationProps) {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => onScroll('left')}><ChevronLeft /></Button>
      <Button onClick={() => onScroll('right')}><ChevronRight /></Button>
    </div>
  )
} 