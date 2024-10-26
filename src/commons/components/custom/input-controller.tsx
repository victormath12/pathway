import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input, InputProps } from "../ui/input"
import { InputMaskCustom } from "./input-mask"

interface InputControllerProps extends InputProps {
  control: Control<any>
  name: string
  label?: string
  mask?: string
  icon?: React.ReactNode
}

export const InputController = ({
  control,
  name,
  label,
  mask,
  icon,
  ...rest
}: InputControllerProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="relative">
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <>
            {icon && icon}
            {mask ? (
              <InputMaskCustom {...field} mask={mask} {...rest} />
            ) : (
              <Input {...field} {...rest} />
            )}
          </>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
