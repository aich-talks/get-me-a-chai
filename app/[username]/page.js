const Username = async ({ params }) => {
  const { username } = await params

  return (
    <>
      <div className="w-full bg-red-50 h-87.5 relative">
        <img
          className="object-cover w-full h-full"
          src="https://thumbs.dreamstime.com/z/beautiful-scenery-corinth-canal-bright-sunny-day-against-blue-sky-white-clouds-rocks-floating-ship-125027085.jpg?ct=jpeg"
          alt=""
        />

        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
          <img
            className="w-30 h-30 rounded-full border-4 border-white object-contain bg-white"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-12 flex-col gap-2">
        <div className='font-bold text-lg'>
          @{username}
        </div>
        <div className='text-slate-600'>
          Creating Animated art for VTT's
        </div>
        <div>
          9,719 members . 82 posts . $15,450/release
        </div>
      </div>
    </>
  )
}

export default Username
