import * as React from "react";
import InputMask from "react-input-mask";

import { cn } from "@psi/commons/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

const InputMaskCustom = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    return (
      <InputMask
        type={type}
        mask={mask}
        maskChar="_"
        className={cn(
          "flex h-11 w-full rounded-xs bg-background px-[14px] py-[10px] text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#979B9D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        inputRef={ref}
        {...props}
      />
    );
  }
);
InputMaskCustom.displayName = "CustonInput";

export { InputMaskCustom };
