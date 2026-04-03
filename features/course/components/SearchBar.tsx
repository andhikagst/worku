"use client";
interface Props {
  value: string;
  onChange: (val: string) => void;
}
const SearchBar = ({ value, onChange }: Props) => (
  <div className="flex items-center gap-3 bg-blue-dark rounded-full px-6 py-4 max-w-2xl w-full mx-auto">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
    </svg>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search Class.."
      className="bg-transparent text-white placeholder:text-white/60 outline-none flex-1 text-body"
    />
  </div>
);
export default SearchBar;