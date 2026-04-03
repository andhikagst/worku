"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateContactSchema, UpdateContactPayload } from "../../schemas/profile.schema";
import { useUpdateContact } from "../../hooks/useUpdateContact";
import { Phone } from "lucide-react";
import { UserInfo } from "../../types/profile.types";

interface Props { user?: UserInfo; }

const ContactSection = ({ user }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateContactPayload>({
    resolver: zodResolver(updateContactSchema),
    defaultValues: {
      email: user?.email ?? "",
      alternative_email: user?.alternative_email ?? "",
      phone_number: user?.phone_number ?? "",
      whatsapp_number: user?.whatsapp_number ?? "",
    },
  });

  const { mutate, isPending } = useUpdateContact();
  const onSubmit = (data: UpdateContactPayload) => mutate(data);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-300 border border-gray-100 w-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          <Phone size={18} className="text-gray-500" />
        </div>
        <div>
          <h3 className="font-bold text-body-sm text-gray-800">Contact Details</h3>
          <p className="text-body-xs text-teal-600 mt-0.5">Primary email is used for notifications and account recovery.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input {...register("email")} type="email" placeholder="your@email.com"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            {errors.email && <p className="text-red-500 text-body-xs">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Alternative Email</label>
            <input {...register("alternative_email")} type="email" placeholder="your@email.com"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            {errors.alternative_email && <p className="text-red-500 text-body-xs">{errors.alternative_email.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</label>
            <div className="flex gap-2">
              <span className="border border-gray-200 rounded-xl px-3 py-2.5 text-body-xs bg-gray-50 text-gray-500 shrink-0">+62</span>
              <input {...register("phone_number")} placeholder="812 3456 7890"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp Number</label>
            <div className="flex gap-2">
              <span className="border border-gray-200 rounded-xl px-3 py-2.5 text-body-xs bg-gray-50 text-gray-500 shrink-0">+62</span>
              <input {...register("whatsapp_number")} placeholder="812 3456 7890"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button type="submit" disabled={isPending}
            className="px-6 py-2.5 bg-blue-normal text-white text-body-xs font-semibold rounded-xl hover:bg-teal-800 transition-all disabled:opacity-50">
            {isPending ? "Saving..." : "Save Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;