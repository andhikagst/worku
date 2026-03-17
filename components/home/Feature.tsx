import React from 'react'
import FeatureCard from './card/FeatureCard'
import { featureList } from './data/featureList'

const Feature = () => {
  return (
    <section className="w-full flex flex-col items-center py-23 font-plus-jakarta-sans gap-8">
      <h1 className="text-display-3 text-blue-dark font-extrabold">
        Browse our set of features
      </h1>
      <div className="flex flex-col justify-center items-center text-300 gap-2">
        <p>Experience a structured ecosystem designed to turn your potential into</p>
        <p>professional success.</p>
      </div>
      <div className="flex gap-20 py-2">
        {featureList.map((item) => {
          return(
            <FeatureCard key={item.id} data={item} />
          )
        })}
      </div>
    </section>
  )
}

export default Feature