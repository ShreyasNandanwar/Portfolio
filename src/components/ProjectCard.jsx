import React from 'react'

const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        alt="Herman Miller Chair"
        className="w-[40vw] rounded-[12px] object-cover"
        height="320"
        src="https://react.email/static/herman-miller-chair.jpg"
      />
      <div className="mt-[32px] text-center">
        <p className="my-[16px] text-[18px] font-semibold leading-[28px] text-indigo-600">
          Our new article
        </p>
        <h1 className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900">
          Designing with Furniture
        </h1>
        <p className="text-[16px] leading-[24px] text-gray-500">
          Unleash your inner designer as we explore how furniture plays a vital
          role in creating stunning interiors, offering insights into choosing the
          right pieces, arranging them harmoniously, and infusing your space with
          personality.
        </p>
        <a
          className="mt-[16px] inline-block rounded-[8px] bg-indigo-600 px-[40px] py-[12px] font-semibold text-white"
          href="https://react.email"
        >
          Read more
        </a>
      </div>
    </div>

  )
}

export default ProjectCard;
