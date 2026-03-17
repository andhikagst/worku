import Image from 'next/image'
import React from 'react'
import { Course } from '../data/courseList';
import {Users, FileText} from 'lucide-react';


const CourseCard = ({ data }: {data: Course}) => {
  return (
  <div className="flex flex-col px-4 pt-4 pb-6 border rounded-2xl gap-4">
    <Image src={data.image} alt="..." />
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-300">{data.title}</h1>
      <div className="text-body font-medium">
        <h2 className="flex items-center gap-2"><Users className="text-green-normal" fill="#66ACA5" size={20} />{data.participant}</h2>
        <h2 className="flex items-center gap-2"><FileText className="text-green-normal" size={20} />{data.topic} Topics | {data.material} Materials</h2>
      </div>
    </div>
  </div>
  )
}

export default CourseCard