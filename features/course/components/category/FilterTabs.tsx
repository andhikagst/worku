"use client";
interface Props {
  categories: { id: string; name: string }[];
  active: string;
  onSelect: (id: string) => void;
}
const FilterTabs = ({ categories, active, onSelect }: Props) => (
  <div className="flex gap-3 flex-wrap justify-center">
    <button
      onClick={() => onSelect("all")}
      className={`px-4 py-2 rounded-full text-h6 font-semibold border-2 transition-all
        ${active === "all" ? "bg-green-normal text-white border-green-normal" : "text-green-normal border-green-normal bg-transparent"}`}
    >
      All
    </button>
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onSelect(cat.id)}
        className={`px-6 py-2 rounded-full text-body-h6 font-semibold border-2 transition-all
          ${active === cat.id ? "bg-green-normal text-white border-green-normal" : "text-green-normal border-green-normal bg-transparent"}`}
      >
        {cat.name}
      </button>
    ))}
  </div>
);
export default FilterTabs;