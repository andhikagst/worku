import { Archetype } from "../../types/career-discovery.types";

interface CareerCompatibilityCardProps {
  archetype: Archetype;
  percentage: number;
}

const CareerCompatibilityCard = ({ archetype, percentage }: CareerCompatibilityCardProps) => {
  const Icon = archetype.icon;

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm">

      <div className="w-12 h-12 rounded-xl bg-blue-dark flex items-center justify-center text-2xl">
        <Icon weight="fill" className="text-white"/>
      </div>

      <div>
        <h3 className="font-bold text-black text-h6">{archetype.title}</h3>
        <p className="text-body-xs text-black mt-0.5">{archetype.subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-blue-light-active rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 bg-blue-normal`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className={`text-h6 shrink-0 text-blue-normal`}>
          {percentage}%
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {archetype.roles.map((role) => (
          <span
            key={role}
            className="px-3 py-1 rounded-full bg-gray-100 text-blue-dark text-body-xs"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CareerCompatibilityCard;