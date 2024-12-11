"use client";
import { cn } from "@/lib/utils";
import { IDaterPickerField } from "@/shared/components";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel } from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { format } from "date-fns";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";

const DatePickerField = ({ name, label, control }: IDaterPickerField) => {
  return (
    <>
      <FormField
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem className="flex items-center justify-center  gap-2 p-1">
            <FormLabel>{label}</FormLabel>
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
                    {field?.value ? (
                      // format(field.value, "PPP")
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
        )}
      />
    </>
  );
};

export default DatePickerField;
