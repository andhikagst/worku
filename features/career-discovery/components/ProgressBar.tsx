interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
  dimension: string;
  dimensions: string[];
}

const ProgressBar = ({ current, total, progress, dimension, dimensions }: ProgressBarProps) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="space-y-2">
        <p className="text-100 text-blue-normal text-right">{current + 1}/{total}</p>
        <div className="w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-right rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {dimensions.map((d) => (
          <span
            key={d}
            className={`px-4 py-2 rounded-full border-2 transition-colors text-100
              ${d === dimension
                ? "bg-blue-normal text-white border-green-normal"
                : "bg-white text-blue-normal border-green-normal"
              }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;