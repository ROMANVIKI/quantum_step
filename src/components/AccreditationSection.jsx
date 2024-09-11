import React from "react";

function AccreditationSection() {
  return (
    <section className="flex flex-col items-center pt-16 pb-10 w-full bg-neutral-100 md:pt-24 lg:pt-32">
      <div className="z-10 w-full px-4 max-md:max-w-full">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col w-full">
            <div className="flex flex-col text-center text-neutral-800">
              <h2 className="text-3xl font-bold">We are accredited by</h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9ded1b5e56ebd4c15817a62087e883e48d73ec485dcd53e817a9ad1bce4839?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
                alt="Accreditation logos"
                className="mt-6 w-full object-contain"
              />
            </div>
          </div>
          <aside className="flex flex-col items-center w-full lg:w-auto">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center p-5 bg-green-500 text-white rounded-2xl shadow-lg transition-all hover:scale-105">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9e3336b42b33a5895b455f84ff6d9c8677a2dc622fdf8a2f1bb573a2c0d647f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
                  alt="Dobby avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Dobby</h3>
                  <p className="text-sm">TOKAZ Assistant</p>
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl shadow-md">
                <p className="text-xs text-zinc-700 mb-2">GEN-AI EVENT</p>
                <div className="text-center py-2 px-4 bg-green-700 text-white text-sm font-bold rounded-full shadow">
                  GEN AI
                </div>
              </div>
              <div className="flex flex-col items-start mt-10 space-y-4">
                <div className="text-center bg-white shadow-sm rounded-xl p-4 hover:shadow-lg">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/359779cd7f900536f9c9866e634060f5d5f0109e69b66599504b8a2674f86d20?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
                    alt="Refer & Earn illustration"
                    className="w-full h-auto object-contain mb-4"
                  />
                  <h3 className="text-base font-bold">Refer & Earn Great Rewards!</h3>
                  <p className="mt-2 text-sm">
                    Refer <span className="text-blue-500">SAWiT.AI</span> to women in tech and win exciting rewards.
                  </p>
                </div>
                <div className="text-xs text-zinc-700">Tue 3:47 AM</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AccreditationSection;
