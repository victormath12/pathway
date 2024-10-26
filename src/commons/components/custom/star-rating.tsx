"use client"
import { cn } from "@psi/commons/lib/utils"
import { Star } from "lucide-react"
import { useCallback, useState } from "react"

export function StarRating({
  onSelected,
}: {
  onSelected: (rating: number) => void
}) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const fnSelectedRating = useCallback((value: number) => {
    setRating(value)
    onSelected(value)
  }, [])

  return (
    <div className="flex justify-evenly">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
        <Star
          key={star}
          className={cn(
            "size-10 cursor-pointer transition-colors stroke-1 text-gray-400",
            (hoverRating || rating) >= star && "text-yellow-400 fill-yellow-500"
          )}
          onClick={() => fnSelectedRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))}
    </div>
  )
}
