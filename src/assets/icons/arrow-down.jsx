import { memo } from "react"

const ArrowDown = memo(() => (
    <svg
        className="w-3 stroke-black dark:stroke-white"
        viewBox="0 0 512 512"
    >
        <path
            fill="none"
            // stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="m112 184 144 144 144-144"
        />
    </svg>
))

export default ArrowDown