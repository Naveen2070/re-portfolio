export const getActiveBreakpoint = (
  bp: Record<"2xl" | "xl" | "lg" | "md" | "sm" | "xs", boolean>
): "2xl" | "xl" | "lg" | "md" | "sm" | "xs" => {
  const ordered: Array<"2xl" | "xl" | "lg" | "md" | "sm" | "xs"> = [
    "2xl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs",
  ];
  return ordered.find((key) => bp[key]) || "xs";
};
