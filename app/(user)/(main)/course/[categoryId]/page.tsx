import CourseByCategory from "@/features/course/components/course-list/CourseByCategory";

interface Props {
  params: Promise<{ categoryId: string }>;
}

const Page = async ({ params }: Props) => {
  const { categoryId } = await params;
  return <CourseByCategory categoryId={categoryId} />;
};

export default Page;