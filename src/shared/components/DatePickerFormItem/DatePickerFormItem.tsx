import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { FormControl, FormItem, FormLabel } from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface IDatePickerProps<T extends FieldValues> {
  label?: string;
  field: ControllerRenderProps<T, Path<T>>;
  name: string;
}

const DatePickerFormItem = <T extends FieldValues>({
  label,
  field,
}: IDatePickerProps<T>) => {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <FormItem className="flex items-center justify-center  gap-2 p-1">
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !field.value && "text-muted-foreground",
                )}
              >
                <CalendarIcon />
                {field?.value ? ( // format(field.value, "PPP")
                  dayjs(field.value).format("YYYY-MM-DD")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 bg-white text-black"
            align="start"
          >
            <Calendar
              mode="single"
              selected={field.value ?? undefined}
              onSelect={field.onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </FormItem>
    </>
  );
};

export default DatePickerFormItem;
