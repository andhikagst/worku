"use client";
import { useForm } from "react-hook-form";
import { useUpdateDetail } from "../../hooks/useUpdateDetail";
import { MapPin } from "lucide-react";
import { UserInfo } from "../../types/profile.types";

interface LocationForm { location: string; }
interface Props { user?: UserInfo; }

const HomeLocationSection = ({ user }: Props) => {
  const { register, handleSubmit } = useForm<LocationForm>({
    defaultValues: { location: user?.location ?? "" },
  });
  const { mutate, isPending } = useUpdateDetail();
  const onSubmit = (data: LocationForm) => {
    mutate({
      first_name: user?.first_name ?? "",
      last_name: user?.last_name ?? "",
      location: data.location,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-300 border border-gray-100 w-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          <MapPin size={18} className="text-gray-500" />
        </div>
        <div>
          <h3 className="font-bold text-body-sm text-gray-800">Home Location</h3>
          <p className="text-body-xs text-teal-600 mt-0.5">Used to calculate commute distance on the Job Map and filter jobs by radius.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-body-xs font-semibold text-gray-500 uppercase tracking-wide">Location</label>
          <input {...register("location")} placeholder="e.g. South Jakarta, DKI Jakarta"
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-body-xs outline-none focus:border-teal-500 transition-all" />
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={isPending}
            className="px-6 py-2.5 bg-blue-normal text-white text-body-xs font-semibold rounded-xl hover:bg-teal-800 transition-all disabled:opacity-50">
            {isPending ? "Saving..." : "Save Location"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeLocationSection;