function Work({ children, picture }) {
  return (
    <div className='flex flex-col items-center md:flex-row'>
      <div
        data-scroll
        className='bg-indigo-900 anime_fade hover:scale-105 hover:rotate-3 duration-100 w-80 h-56 mb-2'
      >
        {/* <div className='flex items-center gap-x-5 mb-2'>
          <span className='text-white font-noto'>2022</span>{' '}
          <div className='rounded-full bg-indigo-500 w-2 h-2'></div>{' '}
          <span className='text-white font-noto font-medium text-2xl'>
            Marine Land
          </span>
        </div> */}
        <img
          src={picture}
          alt={`${children[0]}`}
          className='w-full h-full object-cover hover:opacity-100 duration-100 cursor-pointer opacity-70'
        />
      </div>
      <div data-scroll className='anime_rightToLeft grid md:ml-8'>
        <div className='self-center'>
          <span className='text-white text-xl font-medium font-noto'>
            {children[0]}
          </span>
          <span className='block max-w-xs mt-2 font-montserrat text-sm leading-6 text-gray-500'>
            {children[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Work;
