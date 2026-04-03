"use client";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UploadSimpleIcon,
} from "@phosphor-icons/react";
import { VerifiedProjectData } from "../../types/course.types";
import { useRef, useState } from "react";

const PartnerHeroBanner = ({ data }: { data: VerifiedProjectData }) => (
  <div className="relative bg-linear-to-r from-[#1B5937] to-[#00AA13] rounded-2xl overflow-hidden p-5 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="bg-white/10 text-white text-body-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          WorkU × Gojek
        </span>
      </div>
      <div className="bg-green-normal text-white text-body-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
        <CheckCircleIcon size={14} weight="fill" />
        Official MOU 2024
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
        <span className="text-green-dark font-black text-body-sm">
          {data.partnerLogo}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-bold text-white text-body">{data.partnerName}</p>
        <p className="text-white/70 text-body-xs">{data.partnerTagline}</p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-white/60 text-body-xs">{data.partnerMeta}</span>
          <span className="text-white/40 text-body-xs">·</span>
          <span className="text-white/60 text-body-xs">
            {data.partnerValuation}
          </span>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 pt-3">
      <p className="text-white font-bold text-body leading-snug">
        {data.projectTitle}
      </p>
      <p className="text-white/60 text-body-xs mt-1">{data.projectSubtitle}</p>
    </div>
  </div>
);

const PartnershipCard = ({ data }: { data: VerifiedProjectData }) => (
  <div className="bg-gray-200 border-gray-300 rounded-2xl border overflow-hidden">
    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
      <ShieldCheckIcon
        size={20}
        weight="fill"
        className="text-green-normal shrink-0"
      />
      <p className="font-bold text-body-sm text-blue-dark">
        {data.partnershipNote}
      </p>
    </div>
    <div className="px-5 py-4 flex flex-col gap-3">
      <p className="text-body-xs text-blue-dark leading-relaxed">
        {data.partnershipDetail}
      </p>
      <div className="flex items-center gap-4">
        {data.partnershipBadges.map((badge) => (
          <span
            key={badge}
            className="flex items-center gap-1 text-body-xs text-green-dark font-semibold"
          >
            <CheckCircleIcon
              size={14}
              weight="fill"
              className="text-green-normal"
            />
            {badge}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BriefSection = ({ data }: { data: VerifiedProjectData }) => (
  <div className="flex flex-col gap-4">
    <p className="text-body-xs font-bold text-green-dark tracking-widest uppercase">
      {data.briefTitle}
    </p>
    <div className="relative bg-blue-light-hover rounded-2xl p-5 border border-gray-100 overflow-hidden">
      <div className="absolute bg-green-normal w-2 left-0 top-0 bottom-0" />
      <p className="text-body-xs text-blue-dark leading-relaxed mb-3">
        <strong>Context: </strong>
        {data.briefContext}
      </p>
      <p className="text-body-xs text-blue-dark leading-relaxed">
        <strong>Your task: </strong>
        {data.briefTask}
      </p>
    </div>

    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "FEATURE", value: data.briefTable.feature },
        { label: "PLATFORM", value: data.briefTable.platform },
        { label: "CORE PROBLEM", value: data.briefTable.coreProblem },
      ].map((cell) => (
        <div
          key={cell.label}
          className="bg-gradient-to-left rounded-xl px-4 py-3 flex flex-col gap-1"
        >
          <p className="text-body-xs font-bold text-white/50 uppercase tracking-wider">
            {cell.label}
          </p>
          <p className="text-body-xs font-semibold text-white leading-snug">
            {cell.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const DeliverablesSection = ({
  deliverables,
}: {
  deliverables: VerifiedProjectData["deliverables"];
}) => (
  <div className="flex flex-col gap-3">
    <p className="text-body-xs font-bold text-green-dark tracking-widest uppercase">
      DELIVERABLES
    </p>
    <div className="flex flex-col gap-3">
      {deliverables.map((d) => (
        <div
          key={d.number}
          className="bg-gray-200 rounded-xl border border-gray-300 p-4 flex gap-4 relative overflow-hidden"
        >

          <span className="text-body-sm font-bold text-white bg-green-normal shrink-0 w-8 h-8 flex justify-center items-center rounded-lg">
            {d.number}
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-body-sm text-blue-dark">{d.title}</p>
            <p className="text-body-xs text-blue-dark/70 leading-relaxed">
              {d.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RubricSection = ({
  rubric,
  total,
  pass,
}: {
  rubric: VerifiedProjectData["rubric"];
  total: number;
  pass: number;
}) => (
  <div className="flex flex-col gap-3">
    <p className="text-body-xs font-bold text-green-dark tracking-widest uppercase">
      SCORING RUBRIC ({total} PTS | PASS: {pass})
    </p>
    <div className="flex flex-col gap-2">
      {rubric.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center gap-3"
          >
            <span className="text-blue-normal shrink-0"><Icon size={24} weight="fill" className=""/></span>
            <p className="text-body-xs font-semibold text-blue-dark flex-1">
              {item.label}
            </p>
            <span className={`text-body-sm font-black ${item.color}`}>
              {item.pts} PTS
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const SubmitSection = ({ onSubmit }: { onSubmit: () => void }) => {
  const [figmaLink, setFigmaLink] = useState("");
  const [dragging, setDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file.name);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-xs font-bold text-green-dark tracking-widest uppercase">
        SUBMIT YOUR PROJECT
      </p>

      <div className="flex flex-col gap-2">
        <label className="text-body-sm font-semibold text-blue-dark">
          Your Figma Link
        </label>
        <input
          type="url"
          value={figmaLink}
          onChange={(e) => setFigmaLink(e.target.value)}
          placeholder="https://www.figma.com/file/..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-body-xs text-blue-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-normal focus:border-transparent transition-all bg-white"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-body-xs text-gray-400">Or Upload Files</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center gap-2 cursor-pointer transition-all
          ${
            dragging
              ? "border-green-normal bg-green-normal/5"
              : "border-gray-200 hover:border-green-normal/50 hover:bg-gray-50"
          }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.fig"
          className="hidden"
          onChange={handleFileChange}
        />
        {uploadedFile ? (
          <>
            <CheckCircleIcon
              size={28}
              weight="fill"
              className="text-green-normal"
            />
            <p className="text-body-xs font-semibold text-green-dark">
              {uploadedFile}
            </p>
            <p className="text-body-xs text-gray-400">Click to replace</p>
          </>
        ) : (
          <>
            <UploadSimpleIcon
              size={28}
              weight="fill"
              className="text-gray-300"
            />
            <p className="text-body-xs font-semibold text-blue-dark">
              Drop Files Here
            </p>
            <p className="text-body-xs text-gray-400">
              PDF | Figma | Max 50 mb
            </p>
          </>
        )}
      </div>

      <button className="w-full bg-green-normal hover:bg-green-600 text-white font-bold text-body py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      onClick={onSubmit}>
        Submit for verification
        <ArrowRightIcon size={18} weight="bold" />
      </button>
    </div>
  );
};


interface Props {
  data: VerifiedProjectData;
  onSubmit: () => void; 
}

const VerifiedProjectContent = ({ data, onSubmit }: Props) => (
  <div className="flex flex-col gap-8 p-8">
    <PartnerHeroBanner data={data} />
    <PartnershipCard data={data} />
    <BriefSection data={data} />
    <DeliverablesSection deliverables={data.deliverables} />
    <RubricSection
      rubric={data.rubric}
      total={data.rubricTotal}
      pass={data.rubricPass}
    />
    <SubmitSection onSubmit={onSubmit} />
  </div>
);

export default VerifiedProjectContent;
