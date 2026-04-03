"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateDetailSchema, UpdateDetailPayload } from "../../schemas/profile.schema";
import { useUpdateDetail } from "../../hooks/useUpdateDetail";
import { UserCircle } from "lucide-react";
import { UserInfo } from "../../types/profile.types";

const GENDER_OPTIONS = ["M", "W"];
const NATIONALITY_OPTIONS = ["Indonesian (WNI)", "Other"];

interface Props { user?: UserInfo; }

const FullNameSection = ({ user }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateDetailPayload>({
    resolver: zodResolver(updateDetailSchema),
    defaultValues: {
      first_name: user?.first_name ?? "",
      last_name: user?.last_name ?? "",
      nick_name: user?.nick_name ?? "",
      gender: user?.gender ?? "",
      date_of_birth: user?.date_of_birth ?? "",
      nationality: user?.nationality ?? "",
    },
  });

  const { mutate, isPending } = useUpdateDetail();

  const onSubmit = (data: UpdateDetailPayload) => mutate(data);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-300 border border-gray-100 w-full ">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          <UserCircle size={18} className="text-gray-500" />
        </div>
        <div>
          <h3 className="font-bold text-body-sm text-gray-800">Full name & Identity</h3>
          <p className="text-body-xs text-teal-600 mt-0.5">Appears on your profile, job applications, and course certificates.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">
              First Name <span className="text-red-500">*</span>
            </label>
            <input {...register("first_name")} placeholder="e.g. Ossa"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            {errors.first_name && <p className="text-red-500 text-body-xs">{errors.first_name.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input {...register("last_name")} placeholder="e.g. Amelie"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
            {errors.last_name && <p className="text-red-500 text-body-xs">{errors.last_name.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Nickname</label>
            <input {...register("nick_name")} placeholder="e.g. Ocha"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Gender Identity</label>
            <select {...register("gender")}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all bg-white">
              <option value="">Select...</option>
              {GENDER_OPTIONS.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Date of Birth</label>
            <input {...register("date_of_birth")} type="date"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Nationality</label>
            <select {...register("nationality")}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all bg-white">
              <option value="">Select...</option>
              {NATIONALITY_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button type="submit" disabled={isPending}
            className="px-6 py-2.5 bg-blue-normal text-white text-body-xs font-semibold rounded-xl hover:bg-teal-800 transition-all disabled:opacity-50">
            {isPending ? "Saving..." : "Save Identity"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FullNameSection;