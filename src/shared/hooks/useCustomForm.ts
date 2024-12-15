import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const UseCustomForm = (zodSchema: Object, defaultValues: Object) => {
  type T = z.infer<typeof zodSchema>;
  const f = useForm<T>({
    resolver: zodResolver(zodSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: T) => {
    console.log(data);
  };
  return { f, onSubmit };
};
