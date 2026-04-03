"use client";
import { useState, useMemo } from "react";
import { useCourseCategories } from "@/features/course/hooks/useCourse";
import CategoryCard from "@/features/course/components/category/CategoryCard";
import SearchBar from "@/features/course/components/SearchBar";
import FilterTabs from "@/features/course/components/category/FilterTabs";

export default function CourseCategory() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: categories, isLoading, isError } = useCourseCategories();

  const filtered = useMemo(() => {
    if (!categories) return [];
    return categories.filter((cat) => {
      const matchSearch = cat.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter = activeFilter === "all" || cat.id === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [categories, search, activeFilter]);

  return (
    <main className="w-full font-plus-jakarta-sans">
      <section className="py-16 px-20 flex flex-col gap-10">
        {isLoading ? null : (
          <FilterTabs
            categories={categories ?? []}
            active={activeFilter}
            onSelect={setActiveFilter}
          />
        )}

        {isLoading && (
          <div className="grid grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-500 text-center text-body">Failed to load courses.</p>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-4 gap-8">
            {filtered.length === 0 ? (
              <p className="col-span-4 text-center text-gray-400 text-body">No courses found.</p>
            ) : (
              filtered.map((cat) => <CategoryCard key={cat.id} category={cat} />)
            )}
          </div>
        )}
      </section>
    </main>
  );
}