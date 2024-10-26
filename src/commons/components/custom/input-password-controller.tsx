import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, InputProps } from "../ui/input";

interface InputPasswordControllerProps extends InputProps {
  control: Control<any>;
  name: string;
  label?: string;
  mask?: string;
}

export const InputPasswordController = (args: InputPasswordControllerProps) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  return (
    <FormField
      control={args.control}
      name={args.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{args.label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={!togglePassword ? "password" : "text"}
                {...field}
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                onClick={() => setTogglePassword(!togglePassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {togglePassword ? (
                  <EyeOff className="size-6 text-inherit" />
                ) : (
                  <Eye className="size-6 text-inherit" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
