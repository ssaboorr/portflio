"use client"

import Footer from "./Footer"

export default function WorkSection() {
  return (
    <>
      <main className="relative z-10 px-6 py-20">
        {/* Enhanced Header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-[#2C3E50] leading-none tracking-tight inline-block bg-gradient-to-r from-[#2C3E50] via-[#E67E22] to-[#2C3E50] bg-clip-text text-transparent">
            WORK
          </h2>
          <p className="text-[#E67E22] text-lg mt-6 opacity-80 max-w-2xl mx-auto">
            A showcase of creative projects and digital experiences
          </p>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20 scroll-animate">
          {/* Project 1 - Enhanced */}
          <div className="relative group work-item scroll-animate hover:scale-105 transition-transform duration-500">
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="bg-[#1a2332] rounded-xl p-6 h-full shadow-inner">
                  <div className="text-white text-lg font-bold mb-4">NAO - Messy Love</div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg aspect-video shadow-lg"></div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg aspect-video shadow-lg"></div>
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg aspect-video shadow-lg"></div>
                  </div>
                  <div className="text-white text-sm mb-3 font-medium">Lead Balloons</div>
                  <div className="bg-gradient-to-r from-teal-600 to-blue-800 rounded-lg aspect-video w-2/3 shadow-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
              Amsterdam
            </div>
            <div className="absolute top-4 right-4 bg-[#E67E22]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg">
              Creative
            </div>
          </div>

          {/* Project 2 - Enhanced */}
          <div className="relative group work-item scroll-animate hover:scale-105 transition-transform duration-500">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 bg-purple-400 rounded-full shadow-inner"></div>
                </div>
                <div className="flex space-x-2 justify-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
              Movie
            </div>
            <div className="absolute bottom-4 right-4 bg-[#E67E22]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg">
              Director
            </div>
          </div>
        </div>

        {/* Project Section 1 - David van Dartel - Enhanced */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">+ Intimacy</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">Dutch</span>
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Photographer</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/intimate-ocean-scene-with-people.png"
                  alt="Ocean scene"
                  className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/minimalist-portfolio-layout.png"
                  alt="Portfolio layout"
                  className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/portrait-photographer-with-red-jacket.png"
                  alt="Photographer portrait"
                  className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/ocean-swimmers-silhouette.png"
                  alt="Ocean swimmers"
                  className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img src="/artistic-portrait.png" alt="Portrait" className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                <img
                  src="/mountain-landscape-silhouettes.png"
                  alt="Mountain landscape"
                  className="w-full h-24 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8 bg-gradient-to-r from-[#2C3E50] to-[#E67E22] bg-clip-text text-transparent">
                03 David van Dartel
              </div>
            </div>
            <div className="relative scroll-animate group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/professional-portrait-man-in-black-shirt-gradient-.png"
                  alt="Lucky Done Gone"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8 text-[#2C3E50] text-2xl font-bold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                04 Lucky Done Gone
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
                Vibe
              </div>
              <div className="absolute top-4 right-20 bg-[#E67E22]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg">
                DJ
              </div>
              <div className="absolute top-4 right-32 bg-[#2C3E50]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Project Section 2 - Van Pepijn - Enhanced */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Minimal</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">Clean</span>
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">+</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">Grit</span>
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Floors</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="text-[#2C3E50] text-xs mb-4 font-medium uppercase tracking-wider">van pepijn</div>
                <h3 className="text-[#2C3E50] text-3xl font-bold mb-4">Passie in ieder project</h3>
                <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                  Zo worden opdrachtende gelijktijdig, ambachtelijk en trots gedaan tot in perfectie. De
                  beeldscherm geeft een goede impressie van onze visoen, maar kom vooral langs in de studio om de
                  afwerking en details in het echt te ervaren.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-16 rounded-lg shadow-inner"></div>
                  <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-16 rounded-lg shadow-inner"></div>
                </div>
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8 bg-gradient-to-r from-[#2C3E50] to-[#E67E22] bg-clip-text text-transparent">
                06 Van Pepijn
              </div>
              <div className="text-[#2C3E50] text-xs bg-[#E67E22]/10 px-3 py-2 rounded-lg">
                https://meesverberne.com/project/van-pepijn/
              </div>
            </div>
            <div className="bg-black rounded-2xl h-96 flex items-center justify-center shadow-2xl scroll-animate">
              <div className="space-y-4">
                <div className="w-80 h-4 bg-white rounded-full opacity-90 shadow-lg"></div>
                <div className="w-80 h-4 bg-gray-300 rounded-full opacity-70 shadow-lg"></div>
                <div className="w-80 h-4 bg-gray-500 rounded-full opacity-50 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Section 3 - Milka - Enhanced */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden shadow-2xl scroll-animate">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-900"></div>
              <div className="relative z-10 text-center">
                <div className="text-white text-6xl font-script mb-4 drop-shadow-2xl">Milka</div>
                <img
                  src="/cow-silhouette-on-mountain.png"
                  alt="Cow on mountain"
                  className="w-24 h-16 object-cover mx-auto drop-shadow-lg"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
                Tasty
              </div>
              <div className="absolute top-4 left-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
                Chocolate
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#2C3E50] text-sm font-medium shadow-lg">
                Campaign
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xs bg-black/50 px-3 py-1 rounded-lg">
                https://meesverberne.com/project/milka-x-bloomon/
              </div>
            </div>
            <div className="space-y-6 scroll-animate">
              <div className="relative">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-48 h-36 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 right-0">
                  <div className="text-[#E67E22] text-2xl font-script bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                    Abdus
                  </div>
                </div>
              </div>
              <div className="max-w-sm">
                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  In Dutch, the term <em>"tit bird"</em> translates to <em>"Abdus"</em>, which also happens to be
                  my name.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Section 4 - Iglo - Enhanced */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Captain</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">+</span>
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Iglo</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">Campaign</span>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/nautical-ship-scene-with-captain-iglo-mascot.png"
                    alt="Captain Iglo ship scene"
                    className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center mb-4 shadow-2xl">
                    <div className="text-blue-900 font-bold text-sm">KAPITEIN IGLO</div>
                  </div>
                  <div className="bg-red-500 rounded-full px-6 py-2 shadow-2xl">
                    <div className="text-white font-bold text-lg">iglo</div>
                  </div>
                </div>
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8 bg-gradient-to-r from-[#2C3E50] to-[#E67E22] bg-clip-text text-transparent">
                02 Iglo
              </div>
            </div>
            <div className="space-y-6 scroll-animate">
              <div className="text-[#2C3E50] text-5xl md:text-6xl font-black leading-tight">
                EXTENSIVE
                <br />
                EXPERIENCE IN
                <br />
                THE DIGITAL
                <br />
                WORLD
              </div>
              <div className="max-w-sm">
                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  With over a decade of experience in the digital realm, I excel at connecting brands with their
                  audiences through <em>innovative and impactful digital solutions</em>.
                </p>
              </div>
              <div className="flex items-center justify-between text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">Friendly vibe</span>
                <span className="bg-[#2C3E50]/20 px-3 py-1 rounded-full text-[#2C3E50]">DJ</span>
                <span className="bg-[#E67E22]/20 px-3 py-1 rounded-full">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Clients Section */}
        <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] px-6 py-20 mb-32 scroll-animate rounded-3xl shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 scroll-animate">
              <div className="text-[6rem] sm:text-[8rem] font-black text-[#E67E22] leading-none tracking-tight">CLI</div>
              <div className="text-[6rem] sm:text-[8rem] font-black text-[#E67E22] leading-none tracking-tight -mt-8">ENTS</div>

              <div className="my-16">
                <div className="text-[#E67E22] text-lg mb-4 max-w-md mx-auto border-2 border-[#E67E22] rounded-full py-6 px-8 bg-white/10 backdrop-blur-sm shadow-lg">
                  "Thank you to all my clients for their trust and collaboration."
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 scroll-animate">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#E67E22] text-lg font-medium mb-4">Support and partnership</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-[#E67E22] text-sm leading-relaxed">
                  Over the years, I've had the opportunity to collaborate with a diverse range of clients, each
                  bringing unique challenges and exciting projects.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-[#E67E22] text-sm leading-relaxed">
                  Below is a selection of some of the clients I've had the privilege to work with, helping them
                  achieve their digital goals through tailored solutions and creative innovation.
                </p>
                <div className="text-[#E67E22] text-2xl mt-4 cursor-pointer hover:scale-110 transition-transform duration-300">×</div>
              </div>
            </div>

            {/* Enhanced Client Names Grid */}
            <div className="relative h-64 scroll-animate">
              <div className="absolute top-0 left-0 text-[#E67E22] text-2xl font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">LOVELLA TELESFORD</div>
              <div className="absolute top-8 left-64 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Laura Heijgen, Young Marco</div>
              <div className="absolute top-16 left-32 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Forever Records, Nimmahacks</div>
              <div className="absolute top-24 left-0 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">VMH Ontwikkeling</div>
              <div className="absolute top-32 left-48 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">JOON Music, New Wave</div>
              <div className="absolute top-40 left-16 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Tugendhaft, Ownit</div>
              <div className="absolute top-48 left-80 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Pepflow B.V., Schagen + Helder</div>

              <div className="absolute top-0 right-0 text-[#E67E22] text-2xl font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">TURFY GANG</div>
              <div className="absolute top-8 right-64 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Frontier BV, Three Ace</div>
              <div className="absolute top-16 right-32 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
                Huys van Eeghen, Jesse Jewelry
              </div>
              <div className="absolute top-24 right-0 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Octopus Agents</div>
              <div className="absolute top-32 right-48 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Logistieke Roadshow</div>
              <div className="absolute top-48 right-16 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Nickms</div>
              <div className="absolute top-56 right-80 text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">CBW Woonweken</div>

              <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[#E67E22] text-3xl font-bold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                BOOMBOOM CLUB
              </div>
              <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[#E67E22] text-2xl font-bold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                NAMAM
              </div>
              <div className="absolute top-44 left-1/2 -translate-x-1/2 text-[#E67E22] text-lg bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                Aya Nijmegen, Bruxelles House
              </div>
              <div className="absolute top-52 left-1/2 -translate-x-1/2 text-[#E67E22] text-lg bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                Willemsparkweg 12, ETEL DC, Grobi
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#E67E22] text-3xl font-bold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                EETCAFE VAN HOUTEN
              </div>

              <div className="absolute bottom-16 right-1/4 text-[#E67E22] text-2xl font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">BVAO</div>
              <div className="absolute bottom-8 right-1/3 text-[#E67E22] text-2xl font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">FITTERGY GROUP</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

