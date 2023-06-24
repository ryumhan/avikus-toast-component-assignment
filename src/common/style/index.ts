import styled from "@emotion/styled";

interface FlexProps {
  gap?: string;
  justifyContent?:
    | "space-between"
    | "center"
    | "end"
    | "left"
    | "right"
    | "flex-start"
    | "flex-end";

  alignItems?: "center";
}

interface TypoGraphyProps {
  type: "middle" | "normal" | "bold";
  color: string;
  size: number;
}

export const GlobalColor = {
  globalBackground: "#FEFBEF",
  normal: "white",
  black01: "#3c3c3c",
  warning: "#FF3232",
  success: "#46CCFF",
};

export const Horizontal = styled.div<FlexProps>(({ gap, justifyContent }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap,
  justifyContent,
}));

export const Vertical = styled.div<FlexProps>(
  ({ gap, justifyContent, alignItems }) => ({
    display: "flex",
    flexDirection: "column",
    gap,
    justifyContent,
    alignItems,
  })
);

export const TypoGraphy = styled.span<TypoGraphyProps>(
  ({ type, color, size }) => ({
    fontWeight: type === "middle" ? "500" : type === "bold" ? "bold" : "400",
    color: color,
    fontSize: `${size}px`,
  })
);
