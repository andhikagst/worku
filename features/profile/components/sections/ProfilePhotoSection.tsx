"use client";
import { useRef } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useUploadPhoto } from "../../hooks/useUploadPhoto";

interface Props { photoUrl?: string; }

const ProfilePhotoSection = ({ photoUrl }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { mutate, isPending } = useUploadPhoto();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) mutate(file);
  };

  return (
    <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-lg shadow-gray-300 border border-gray-100 w-full">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
        <Camera size={18} className="text-gray-500" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-body-sm text-gray-800">Profile Photo</h3>
        <p className="text-body-xs text-blue-normal mt-0.5">A professional headshot increases recruiter visibility by 40%.</p>
        <div className="flex items-center gap-5 mt-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0">
            {photoUrl ? (
              <Image src={photoUrl} alt="profile" width={80} height={80} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <Camera size={28} />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png" className="hidden" onChange={handleFile} />
            <button
              onClick={() => fileRef.current?.click()}
              disabled={isPending}
              className="px-5 py-2 bg-blue-normal text-white text-body-xs font-semibold rounded-xl hover:bg-teal-800 transition-all disabled:opacity-50"
            >
              {isPending ? "Uploading..." : "Upload Photo"}
            </button>
            <p className="text-body-xs text-gray-400">Format: JPG, PNG | Max 5MB | Min 300x300px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoSection;