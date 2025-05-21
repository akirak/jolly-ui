import { CircleHelp } from "lucide-react"
import { Focusable } from "react-aria-components"
import { Label } from "./field"
import { Tooltip, TooltipTrigger } from "./tooltip"

export function TooltipHelp({ tooltip }: { tooltip: string }) {
  return (
    <TooltipTrigger>
      <Focusable>
        <span role="button">
          <CircleHelp size={14} className="inline translate-y-[-0.1rem] text-gray-500 ml-1 mr-1" />
        </span>
      </Focusable>
      <Tooltip placement="top left" offset={10}>
        <p>{tooltip}</p>
      </Tooltip>
    </TooltipTrigger>
  )
}

export function LabelWithTooltipHelp({ label, tooltip }: { label: string, tooltip: string }) {
  return (
    <span className="flex flex-inline leading-none gap-2 items-baseline">
      <Label>{label}</Label>
      <TooltipHelp tooltip={tooltip} />
    </span>
  )
}
