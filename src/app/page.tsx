import { DatePicker } from "@/common";
import { cn } from "@/utils/cn";
import type { FC } from "react";

// Color Swatches
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

const colorSections: Section[] = [
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
        tokenClass: "bg-border-primary",
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

const SwatchCard: FC<Swatch> = ({ label, tokenClass, hex, note }) => (
  <div className="flex items-center gap-3 rounded-xl bg-background-secondary p-3 ring-1 ring-border-primary/10">
    <div aria-label={label} className={`h-12 w-12 flex-shrink-0 rounded-lg ${tokenClass} ring-1 ring-black/5`} />
    <div className="min-w-0">
      <div className="text-lg-medium text-text-primary">{label}</div>
      <div className="text-md-regular text-text-default">
        {hex}
        {note ? ` ${note}` : ""}
      </div>
    </div>
  </div>
);

const ColorSectionBlock: FC<Section> = ({ title, items }) => (
  <section className="space-y-4">
    <h2 className="text-2xl-semibold text-text-primary">{title}</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <SwatchCard key={`${title}-${it.label}`} {...it} />
      ))}
    </div>
  </section>
);

// Typography Table
type Row = {
  styleName: string;
  cls: string;
  sizeLine: string;
  weightLabel: "Bold" | "Semibold" | "Medium" | "Regular";
};

const typoRows: Row[] = [
  {
    styleName: "Text-4xl",
    cls: "text-4xl",
    sizeLine: "40px / 48px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-3xl",
    cls: "text-3xl-bold",
    sizeLine: "32px / 38px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-3xl",
    cls: "text-3xl-semibold",
    sizeLine: "32px / 38px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-2xl",
    cls: "text-2xl-bold",
    sizeLine: "24px / 28px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-2xl",
    cls: "text-2xl-semibold",
    sizeLine: "24px / 28px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-2xl",
    cls: "text-2xl-medium",
    sizeLine: "24px / 28px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-2xl",
    cls: "text-2xl-regular",
    sizeLine: "24px / 28px",
    weightLabel: "Regular",
  },
  {
    styleName: "Text-xl",
    cls: "text-xl-bold",
    sizeLine: "20px / 24px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-xl",
    cls: "text-xl-semibold",
    sizeLine: "20px / 24px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-xl",
    cls: "text-xl-medium",
    sizeLine: "20px / 24px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-xl",
    cls: "text-xl-regular",
    sizeLine: "20px / 24px",
    weightLabel: "Regular",
  },
  {
    styleName: "Text-2lg",
    cls: "text-2lg-bold",
    sizeLine: "18px / 21px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-2lg",
    cls: "text-2lg-semibold",
    sizeLine: "18px / 21px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-2lg",
    cls: "text-2lg-medium",
    sizeLine: "18px / 21px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-2lg",
    cls: "text-2lg-regular",
    sizeLine: "18px / 21px",
    weightLabel: "Regular",
  },
  {
    styleName: "Text-lg",
    cls: "text-lg-bold",
    sizeLine: "16px / 19px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-lg",
    cls: "text-lg-semibold",
    sizeLine: "16px / 19px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-lg",
    cls: "text-lg-medium",
    sizeLine: "16px / 19px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-lg",
    cls: "text-lg-regular",
    sizeLine: "16px / 19px",
    weightLabel: "Regular",
  },
  {
    styleName: "Text-md",
    cls: "text-md-bold",
    sizeLine: "14px / 17px",
    weightLabel: "Bold",
  },
  {
    styleName: "Text-md",
    cls: "text-md-semibold",
    sizeLine: "14px / 17px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-md",
    cls: "text-md-medium",
    sizeLine: "14px / 17px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-md",
    cls: "text-md-regular",
    sizeLine: "14px / 17px",
    weightLabel: "Regular",
  },
  {
    styleName: "Text-sm",
    cls: "text-sm-semibold",
    sizeLine: "13px / 16px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-sm",
    cls: "text-sm-medium",
    sizeLine: "13px / 16px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-xs",
    cls: "text-xs-semibold",
    sizeLine: "12px / 14px",
    weightLabel: "Semibold",
  },
  {
    styleName: "Text-xs",
    cls: "text-xs-medium",
    sizeLine: "12px / 14px",
    weightLabel: "Medium",
  },
  {
    styleName: "Text-xs",
    cls: "text-xs-regular",
    sizeLine: "12px / 14px",
    weightLabel: "Regular",
  },
];

const HeaderCell: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`px-4 py-3 text-left text-md-medium text-text-secondary ${className ?? ""}`}>{children}</div>
);

const BodyCell: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`px-4 py-4 text-md-regular text-text-default ${className ?? ""}`}>{children}</div>
);

const TypographyTable: FC = () => (
  <section className="space-y-4">
    <h2 className="text-2xl-semibold text-text-primary">Pretendard</h2>
    <div className="overflow-hidden rounded-xl ring-1 ring-border-primary/10">
      <div className="grid grid-cols-[2fr,1.2fr,1.4fr,1fr,2fr] bg-background-secondary">
        <HeaderCell>Style Name</HeaderCell>
        <HeaderCell>Font Type</HeaderCell>
        <HeaderCell>Size/Line height</HeaderCell>
        <HeaderCell>Weight</HeaderCell>
        <HeaderCell>Preview</HeaderCell>
      </div>
      <div className="divide-y divide-border-primary/10 bg-background-secondary">
        {typoRows.map((r, i) => (
          <div key={`${r.cls}-${i}`} className="grid grid-cols-[2fr,1.2fr,1.4fr,1fr,2fr]">
            <BodyCell className="text-text-primary text-md-medium">{r.styleName}</BodyCell>
            <BodyCell>Pretendard</BodyCell>
            <BodyCell>{r.sizeLine}</BodyCell>
            <BodyCell>{r.weightLabel}</BodyCell>
            <BodyCell>
              <span className={`${r.cls} text-text-primary`}>Pretendard</span>
            </BodyCell>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Page
export default function Page() {
  return (
    <main className="min-h-dvh bg-background-tertiary px-5 py-8 font-pretendard">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Colors */}
        <section className="space-y-8">
          <h1 className="text-3xl-semibold text-text-primary">Design Tokens</h1>
          <div className="space-y-10">
            {colorSections.map((s) => (
              <ColorSectionBlock key={s.title} {...s} />
            ))}
          </div>
        </section>
        <div className="w-30 h-30 border border-border-primary" />

        {/* Typography */}
        <TypographyTable />
      </div>

      <DatePicker />
    </main>
  );
}
