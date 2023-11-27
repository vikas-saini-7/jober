// components/Breadcrumb.tsx
import React from 'react';

interface BreadcrumbProps {
  pageNames: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageNames }: BreadcrumbProps) => {
  return (
    <div className="uppercase text-xs font-normal text-white pb-4">
      <div className="container mx-auto">
        {pageNames.map((page, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">&#62;</span>}
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
