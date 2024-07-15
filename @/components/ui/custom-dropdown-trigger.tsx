import React, { CSSProperties } from 'react';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { IoChevronDownOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

interface CustomDropdownMenuTriggerProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

const CustomDropdownMenuTrigger = React.forwardRef<HTMLButtonElement, CustomDropdownMenuTriggerProps>(
  ({ className, style, children, ...props }, ref) => (
    <DropdownMenuTrigger asChild>
      <Button ref={ref} className={`flex justify-center gap-4 ${className}`} style={style} {...props}>
        {children}
        <IoChevronDownOutline size={22} color="#1A1A1A" className="" />
      </Button>
    </DropdownMenuTrigger>
  ),
);

CustomDropdownMenuTrigger.displayName = 'CustomDropdownMenuTrigger';

export default CustomDropdownMenuTrigger;
