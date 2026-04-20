import type { ToolCategory, Tier } from '@/lib/ai-tools'

interface Props {
  platform: string
  tagline: string
  brandColor: string
  categories: ToolCategory[]
}

const TIER_COLORS: Record<Tier, string> = {
  free: '#9CA3A0',
  pro: '#C4964A',
  enterprise: 'brand',
}

const TIER_LABELS: Record<Tier, string> = {
  free: 'Free',
  pro: 'Pro',
  enterprise: 'Enterprise',
}

const BADGE_WIDTHS: Record<Tier, number> = {
  free: 36,
  pro: 30,
  enterprise: 68,
}

export default function EcosystemDiagram({ platform, tagline, brandColor, categories }: Props) {
  const W = 840
  const PAD = 20
  const GAP = 10
  const n = categories.length
  const COL = Math.floor((W - PAD * 2 - GAP * (n - 1)) / n)

  const HEADER_H = 76
  const CAT_Y = HEADER_H + 10
  const CAT_H = 38
  const TOOLS_Y = CAT_Y + CAT_H + 8
  const TILE_H = 58
  const TILE_GAP = 8
  const maxTools = Math.max(...categories.map((c) => c.tools.length))
  const LEGEND_Y = TOOLS_Y + maxTools * (TILE_H + TILE_GAP) + 14
  const SVG_H = LEGEND_Y + 50

  const colX = (i: number) => PAD + i * (COL + GAP)
  const tileY = (i: number) => TOOLS_Y + i * (TILE_H + TILE_GAP)
  const tierColor = (tier: Tier) =>
    tier === 'enterprise' ? brandColor : TIER_COLORS[tier]
  const tierLabel = (tier: Tier) => TIER_LABELS[tier]
  const badgeW = (tier: Tier) => BADGE_WIDTHS[tier]

  return (
    <svg
      viewBox={`0 0 ${W} ${SVG_H}`}
      style={{ width: '100%', height: 'auto', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${platform} ecosystem diagram`}
    >
      {/* Background */}
      <rect width={W} height={SVG_H} fill="#FDFCFA" />
      <rect width={W} height={SVG_H} fill="none" stroke="#E8E4DF" strokeWidth={1} />

      {/* Header */}
      <rect x={0} y={0} width={W} height={HEADER_H} fill={brandColor} />
      {/* Subtle header gradient overlay */}
      <rect x={0} y={0} width={W} height={HEADER_H} fill="url(#headerOverlay)" />
      <defs>
        <linearGradient id="headerOverlay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>

      <text
        x={PAD}
        y={44}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="300"
        fontSize={28}
        fill="white"
      >
        {platform}
      </text>
      <text
        x={PAD}
        y={64}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={10}
        fill="white"
        fillOpacity={0.6}
        letterSpacing={2}
      >
        {tagline.toUpperCase()}
      </text>

      {/* Columns */}
      {categories.map((cat, ci) => {
        const cx = colX(ci)
        return (
          <g key={cat.category}>
            {/* Category header bg */}
            <rect
              x={cx}
              y={CAT_Y}
              width={COL}
              height={CAT_H}
              fill={brandColor}
              fillOpacity={0.08}
              rx={2}
            />
            {/* Category left accent */}
            <rect
              x={cx}
              y={CAT_Y}
              width={4}
              height={CAT_H}
              fill={brandColor}
              fillOpacity={0.55}
              rx={1}
            />
            {/* Category name */}
            <text
              x={cx + 12}
              y={CAT_Y + 24}
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize={10}
              fill="#1E1C1A"
              letterSpacing={1.5}
            >
              {cat.category.toUpperCase()}
            </text>

            {/* Tool tiles */}
            {cat.tools.map((tool, ti) => {
              const ty = tileY(ti)
              const tc = tierColor(tool.tier)
              const tl = tierLabel(tool.tier)
              const bw = badgeW(tool.tier)
              return (
                <g key={tool.name}>
                  <rect
                    x={cx}
                    y={ty}
                    width={COL}
                    height={TILE_H}
                    fill="white"
                    stroke="#E8E4DF"
                    strokeWidth={1}
                    rx={2}
                  />
                  {/* Tier left border */}
                  <rect x={cx} y={ty} width={4} height={TILE_H} fill={tc} rx={1} />
                  {/* Tool name */}
                  <text
                    x={cx + 14}
                    y={ty + 24}
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="600"
                    fontSize={12}
                    fill="#1E1C1A"
                  >
                    {tool.name}
                  </text>
                  {/* Tier badge background */}
                  <rect
                    x={cx + 14}
                    y={ty + 33}
                    width={bw}
                    height={16}
                    fill={tc}
                    fillOpacity={0.12}
                    rx={8}
                  />
                  {/* Tier badge text */}
                  <text
                    x={cx + 14 + bw / 2}
                    y={ty + 45}
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize={9}
                    fontWeight="700"
                    fill={tc}
                    letterSpacing={0.5}
                  >
                    {tl.toUpperCase()}
                  </text>
                </g>
              )
            })}
          </g>
        )
      })}

      {/* Legend divider */}
      <line
        x1={PAD}
        y1={LEGEND_Y}
        x2={W - PAD}
        y2={LEGEND_Y}
        stroke="#E8E4DF"
        strokeWidth={1}
      />

      {/* Free */}
      <rect x={PAD} y={LEGEND_Y + 14} width={10} height={10} fill="#9CA3A0" rx={2} />
      <text
        x={PAD + 16}
        y={LEGEND_Y + 23}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={11}
        fill="#6B7280"
      >
        Free tier
      </text>

      {/* Pro */}
      <rect x={PAD + 100} y={LEGEND_Y + 14} width={10} height={10} fill="#C4964A" rx={2} />
      <text
        x={PAD + 116}
        y={LEGEND_Y + 23}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={11}
        fill="#6B7280"
      >
        Pro / paid
      </text>

      {/* Enterprise */}
      <rect x={PAD + 210} y={LEGEND_Y + 14} width={10} height={10} fill={brandColor} rx={2} />
      <text
        x={PAD + 226}
        y={LEGEND_Y + 23}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={11}
        fill="#6B7280"
      >
        Enterprise
      </text>

      {/* Lumii credit */}
      <text
        x={W - PAD}
        y={LEGEND_Y + 23}
        textAnchor="end"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={10}
        fill="#B4AFA8"
      >
        lumiiadvisory.com
      </text>
    </svg>
  )
}
