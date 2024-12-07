"use client";
import { cn } from "@/lib/utils";
import { BaseButton, BaseDatePicker } from "@/shared";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const form = useForm();
  const onSubmit = () => {
    return null;
  };
  return (
    <>
      <div className="flex gap-2 justify-start">
        <Form {...form}>
          <form
            onSubmit={() => {
              form.handleSubmit(onSubmit);
            }}
          >
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>From</FormLabel>
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
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          // disable={{}}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>시작날짜</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <p>To</p>
              <BaseDatePicker {...form.register("to")} />
            </div>
            <BaseButton type="secondary">View Timeline</BaseButton>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Index;
