declare module "react-vertical-timeline-component" {
  import { ReactNode } from "react";

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    animate?: boolean;
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
