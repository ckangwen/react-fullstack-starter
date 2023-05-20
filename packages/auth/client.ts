import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
});

export type UserAuthSchemaData = z.infer<typeof userAuthSchema>;

export const useUserAuthSchema = () => {
  return useForm<UserAuthSchemaData>({
    resolver: zodResolver(userAuthSchema),
  });
}
