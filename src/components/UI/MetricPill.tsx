import React from 'react';

interface MetricPillProps {
  label: string;
  value: string;
  className?: string;
}

export const MetricPill: React.FC<MetricPillProps> = ({ label, value, className }) => {
  return (
    <span className={"inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded " + (className || '')}>
      <span>{label}:</span>
      <span className="font-semibold">{value}</span>
    </span>
  );
};

export default MetricPill;
