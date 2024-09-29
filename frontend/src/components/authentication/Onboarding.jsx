export default function Onboarding() {
  return (
    <div className="w-[750px] mx-auto border border-gray-200 rounded-2xl p-8 text-center">
      {/* Logo and Title */}
      <div className="mb-6">
        <div className="w-[127px] h-[41px] mx-auto">
          <img
            src="/assets/DeclanWorkLogo.png"
            alt="DeclanWork Logo"
            className="mx-auto mb-4"
          />
        </div>
        <p className="text-2xl font-semibold mt-3 text-[#202020]">
          Welcome to DeclanWork!!! 🦸‍♀️
        </p>
        <p className="text-[#6A6A6A] mt-2 mb-6">
          Get up and running in 3 minutes
        </p>
      </div>

      {/* Video */}
      <div className="mb-6 w-full h-[300px] rounded-lg bg-slate-600 mx-auto">
        {/* <video
      className="w-full h-[300px] object-cover rounded-lg"
      controls
      src={VideoSource} // Replace with actual video URL or path
    >
      Your browser does not support the video tag.
    </video> */}
      </div>

      {/* Finish Up Button */}
      <button className="w-full bg-[#00EF8B] hover:bg-[#00EF8B] text-[#202020] rounded-full py-3 font-medium text-sm">
        Finish Up
      </button>
    </div>
  );
}
