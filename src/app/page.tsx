import type { FC } from "react";

type Swatch = {
  label: string;
  tokenClass: string;
  hex: string;
  note?: string;
};

type Section = {
  title: string;
  items: Swatch[];
};

const sections: Section[] = [
  {
    title: "brand",
    items: [
      {
        label: "Color/Brand/Primary",
        tokenClass: "bg-brand-primary",
        hex: "#10B981",
      },
      {
        label: "Color/Brand/Secondary",
        tokenClass: "bg-brand-secondary",
        hex: "#34D399",
      },
      {
        label: "Color/Brand/Tertiary",
        tokenClass: "bg-brand-tertiary",
        hex: "#A3E635",
      },
    ],
  },
  {
    title: "point",
    items: [
      {
        label: "Color/point/purple",
        tokenClass: "bg-point-purple",
        hex: "#A855F7",
      },
      {
        label: "Color/point/cyan",
        tokenClass: "bg-point-cyan",
        hex: "#06B6D4",
      },
      {
        label: "Color/point/pink",
        tokenClass: "bg-point-pink",
        hex: "#EC4899",
      },
      {
        label: "Color/point/rose",
        tokenClass: "bg-point-rose",
        hex: "#F43F5E",
      },
      {
        label: "Color/point/orange",
        tokenClass: "bg-point-orange",
        hex: "#F97316",
      },
      {
        label: "Color/point/yellow",
        tokenClass: "bg-point-yellow",
        hex: "#EAB308",
      },
    ],
  },
  {
    title: "Background",
    items: [
      {
        label: "Background/Primary",
        tokenClass: "bg-background-primary",
        hex: "#0F172A",
      },
      {
        label: "Background/Secondary",
        tokenClass: "bg-background-secondary",
        hex: "#1E293B",
      },
      {
        label: "background/Tertiary",
        tokenClass: "bg-background-tertiary",
        hex: "#334155",
      },
      {
        label: "Background/Inverse",
        tokenClass: "bg-background-inverse",
        hex: "#FFFFFF",
      },
    ],
  },
  {
    title: "Interaction",
    items: [
      {
        label: "Interaction/Inactive",
        tokenClass: "bg-interaction-inactive",
        hex: "#94A3B8",
      },
      {
        label: "Interaction/Hover",
        tokenClass: "bg-interaction-hover",
        hex: "#059669",
      },
      {
        label: "Interaction/Pressed",
        tokenClass: "bg-interaction-pressed",
        hex: "#047857",
      },
    ],
  },
  {
    title: "Border",
    items: [
      {
        label: "Border/Primary",
        tokenClass: "bg-border-primary/50",
        hex: "#F8FAFC",
        note: "50%",
      },
    ],
  },
  {
    title: "Text",
    items: [
      { label: "Text/Primary", tokenClass: "bg-text-primary", hex: "#F8FAFC" },
      {
        label: "Text/Secondary",
        tokenClass: "bg-text-secondary",
        hex: "#CBD5E1",
      },
      {
        label: "Text/Tertiary",
        tokenClass: "bg-text-tertiary",
        hex: "#E2E8F0",
      },
      { label: "Text/Default", tokenClass: "bg-text-default", hex: "#64748B" },
      { label: "Text/Inverse", tokenClass: "bg-text-inverse", hex: "#FFFFFF" },
      {
        label: "Text/Disabled",
        tokenClass: "bg-text-disabled",
        hex: "#94A3B8",
      },
    ],
  },
  {
    title: "Status",
    items: [
      {
        label: "Status/Danger",
        tokenClass: "bg-status-danger",
        hex: "#DC2626",
      },
    ],
  },
  {
    title: "Icon",
    items: [
      { label: "Icon/Primary", tokenClass: "bg-icon-primary", hex: "#64748B" },
      { label: "Icon/Inverse", tokenClass: "bg-icon-inverse", hex: "#F8FAFC" },
      { label: "Icon/Brand", tokenClass: "bg-icon-brand", hex: "#10B981" },
    ],
  },
];

const SwatchCard: FC<Swatch> = ({ label, tokenClass, hex, note }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-background-secondary p-3 ring-1 ring-border-primary/10">
      <div
        aria-label={label}
        className={`h-12 w-12 flex-shrink-0 rounded-lg ${tokenClass} ring-1 ring-black/5`}
      />
      <div className="min-w-0">
        <div className="text-lg-medium text-text-inverse">{label}</div>
        <div className="text-md-regular text-text-default">
          {hex}
          {note ? ` ${note}` : ""}
        </div>
      </div>
    </div>
  );
};

const SectionBlock: FC<Section> = ({ title, items }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl-semibold text-text-inverse">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <SwatchCard key={`${title}-${it.label}`} {...it} />
        ))}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-background-primary px-5 py-8 font-pretendard">
      <div className="mx-auto max-w-6xl space-y-10">
        {sections.map((s) => (
          <SectionBlock key={s.title} {...s} />
        ))}
      </div>
    </main>
  );
}
