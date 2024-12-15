import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { FormControl, FormItem, FormLabel } from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

interface IDatePickerProps {
  label?: string;
  value: ControllerRenderProps["value"];
  onChange: ControllerRenderProps["onChange"];
}

const DatePickerFormItem = ({ label, value, onChange }: IDatePickerProps) => {
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
                  !value && "text-muted-foreground",
                )}
              >
                <CalendarIcon />
                {value ? ( // format(field.value, "PPP")
                  dayjs(value).format("YYYY-MM-DD")
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
              selected={value ?? undefined}
              onSelect={onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </FormItem>
    </>
  );
};

export default DatePickerFormItem;
