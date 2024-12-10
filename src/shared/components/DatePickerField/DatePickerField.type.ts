import { DateRangeSchema } from "@/shared/schema";
import { Control } from "react-hook-form";
import { z } from "zod";

export type DateRangeType = z.infer<typeof DateRangeSchema>;

export interface IDaterPickerField {
  name: keyof DateRangeType;
  label: string;
  control: Control<DateRangeType>;
}
