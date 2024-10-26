import { cn } from "@psi/commons/lib/utils";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectControllerProps {
  control: Control<any>;
  name: string;
  options: { label: string; value: string }[];
  label?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export const SelectController = ({
  control,
  name,
  options,
  label,
  className,
  placeholder,
  ...rest
}: SelectControllerProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Select
            onValueChange={(value) => field.onChange(value)}
            {...rest}
            {...field}
          >
            <SelectTrigger
              className={cn(
                "rounded-xs border-none h-11 focus-visible:ring-2 focus:ring-2 focus-visible:ring-primary focus:ring-primary",
                className
              )}
            >
              <SelectValue placeholder={placeholder ?? "Selecione"} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
