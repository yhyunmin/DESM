"use client";
import { TimeLine } from "@/features/timeLine";
import { BaseButton, BaseInput } from "@/shared";
import { FormControl, FormField, FormItem } from "@/shared/ui/form";
import { Progress } from "@/shared/ui/progress";
import { useEffect, useState } from "react";
import { Form } from "@/shared/ui/form";
import { FormProvider, useForm } from "react-hook-form";

export default function Board() {
  const [progress, setProgress] = useState(13);
  const f = useForm({
    defaultValues: {
      title: "untitled",
    },
  });
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col h-full w-[850px] bg-zinc-100">
      <section className="flex text-zinc-700 w-full h-fit p-4 pt-20 bg-white">
        <div className="flex flex-col gap-2 w-full">
          <Form {...f}>
            <form onSubmit={f.handleSubmit(() => {})}>
              <FormField
                name="title"
                control={f.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <BaseInput
                        placeholder="Enter the title"
                        className=" p-2 w-full border-none shadow-none text-black text-5xl placeholder:text-5xl font-bold tracking-tighter ring-transparent"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="flex gap-3 items-center text-nowrap">
            <p>0/0 Completed</p>
            <Progress value={progress} className="w-[60%]" />
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <TimeLine />
            <BaseButton mode="filled">Add new Board</BaseButton>
          </div>
        </div>
      </section>
      {/*  보드 렌더 링*/}
      {/*  0개일때*/}
      <div className="flex  w-full h-full items-center justify-center text-zinc-800">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">
            There is no board yet
          </h2>
          <p className="font-medium tracking-tight">
            Click the button and start flashing!
          </p>
        </div>
      </div>
    </main>
  );
}
