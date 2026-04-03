import Image from "next/image";
import Link from "next/link";
import { Users, FileText } from "lucide-react";
import { CourseCategory } from "../../types/course.types";

interface Props {
  category: CourseCategory;
}

const CategoryCard = ({ category }: Props) => (
  <Link href={`/course/${category.id}`}>
    <div className="flex flex-col px-4 pt-4 pb-6 border-2 rounded-3xl gap-4 border-green-normal shadow-gray-800 hover:shadow-xl hover:scale-101 transition-all cursor-pointer">
      <Image
        src={category.cover_image}
        alt={category.name}
        width={260}
        height={245}
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-300">{category.name}</h3>
        <div className="text-body font-medium">
          <h2 className="flex items-center gap-2">
            <Users className="text-green-normal" fill="#66ACA5" size={20} />
            1.616
          </h2>
          <h2 className="flex items-center gap-2">
            <FileText className="text-green-normal" size={20} />
            12 Topics | 48 Materials
          </h2>
        </div>
      </div>
    </div>
  </Link>
);
export default CategoryCard;
