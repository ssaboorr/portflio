"use client"

import Footer from "./Footer"

export default function WorkSection() {
  return (
    <>
      <main className="relative z-10 px-6 py-20">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-[8rem] font-black text-[#2C3E50] leading-none tracking-tight inline-block">WORK</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto scroll-animate">
          {/* Project 1 */}
          <div className="relative group work-item scroll-animate">
            <div className="bg-gray-400 rounded-lg overflow-hidden aspect-[4/3]">
              <div className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-gray-500 to-gray-600">
                <div className="bg-[#1a2332] rounded-lg p-6 h-full">
                  <div className="text-white text-sm mb-4">NAO - Messy Love</div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded aspect-video"></div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded aspect-video"></div>
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded aspect-video"></div>
                  </div>
                  <div className="text-white text-xs mb-2">Lead Balloons</div>
                  <div className="bg-gradient-to-r from-teal-600 to-blue-800 rounded aspect-video w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 text-[#2C3E50] text-sm">Amsterdam</div>
            <div className="absolute top-4 right-4 text-[#2C3E50] text-sm">Creative</div>
          </div>

          {/* Project 2 */}
          <div className="relative group work-item scroll-animate">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-400 rounded-full"></div>
                </div>
                <div className="flex space-x-2 justify-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-white text-sm">Movie</div>
            <div className="absolute bottom-4 right-4 text-white text-sm">Director</div>
          </div>
        </div>

        {/* Project Section 1 - David van Dartel */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-4 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8">
                <span>+ Intimacy</span>
                <span>Dutch</span>
                <span>Photographer</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/intimate-ocean-scene-with-people.png"
                  alt="Ocean scene"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="/minimalist-portfolio-layout.png"
                  alt="Portfolio layout"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="/portrait-photographer-with-red-jacket.png"
                  alt="Photographer portrait"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="/ocean-swimmers-silhouette.png"
                  alt="Ocean swimmers"
                  className="w-full h-24 object-cover rounded"
                />
                <img src="/artistic-portrait.png" alt="Portrait" className="w-full h-24 object-cover rounded" />
                <img
                  src="/mountain-landscape-silhouettes.png"
                  alt="Mountain landscape"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8">03 David van Dartel</div>
            </div>
            <div className="relative scroll-animate">
              <img
                src="/professional-portrait-man-in-black-shirt-gradient-.png"
                alt="Lucky Done Gone"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-8 text-[#2C3E50] text-2xl font-bold">04 Lucky Done Gone</div>
              <div className="absolute top-4 right-4 text-white text-sm">Vibe</div>
              <div className="absolute top-4 right-16 text-white text-sm">DJ</div>
              <div className="absolute top-4 right-24 text-white text-sm">+</div>
            </div>
          </div>
        </div>

        {/* Project Section 2 - Van Pepijn */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-4 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8">
                <span>Minimal</span>
                <span>Clean</span>
                <span>+</span>
                <span>Grit</span>
                <span>Floors</span>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-[#2C3E50] text-xs mb-4">van pepijn</div>
                <h3 className="text-[#2C3E50] text-3xl font-bold mb-4">Passie in ieder project</h3>
                <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                  Zo worden opdrachtende gelijktijdig, ambachtelijk en trots gedaan tot in perfectie. De
                  beeldscherm geeft een goede impressie van onze visoen, maar kom vooral langs in de studio om de
                  afwerking en details in het echt te ervaren.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 h-16 rounded"></div>
                  <div className="bg-gray-300 h-16 rounded"></div>
                </div>
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8">06 Van Pepijn</div>
              <div className="text-[#2C3E50] text-xs">https://meesverberne.com/project/van-pepijn/</div>
            </div>
            <div className="bg-black rounded-lg h-96 flex items-center justify-center scroll-animate">
              <div className="space-y-4">
                <div className="w-80 h-4 bg-white rounded-full opacity-90"></div>
                <div className="w-80 h-4 bg-gray-300 rounded-full opacity-70"></div>
                <div className="w-80 h-4 bg-gray-500 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Section 3 - Milka */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg h-96 flex items-center justify-center relative overflow-hidden scroll-animate">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-900"></div>
              <div className="relative z-10">
                <div className="text-white text-6xl font-script mb-4">Milka</div>
                <img
                  src="/cow-silhouette-on-mountain.png"
                  alt="Cow on mountain"
                  className="w-24 h-16 object-cover mx-auto"
                />
              </div>
              <div className="absolute top-4 left-4 text-white text-sm">Tasty</div>
              <div className="absolute top-4 left-20 text-white text-sm">Chocolate</div>
              <div className="absolute top-4 right-4 text-white text-sm">Campaign</div>
              <div className="absolute bottom-4 left-4 text-white text-xs">
                https://meesverberne.com/project/milka-x-bloomon/
              </div>
            </div>
            <div className="space-y-6 scroll-animate">
              <div className="relative">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-48 h-36 object-cover"
                />
                <div className="absolute bottom-0 right-0">
                  <div className="text-[#E67E22] text-2xl font-script">Abdus</div>
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

        {/* Project Section 4 - Iglo */}
        <div className="max-w-7xl mx-auto mb-32 scroll-animate">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-4 scroll-animate">
              <div className="flex items-center justify-between text-[#2C3E50] text-sm mb-8">
                <span>Captain</span>
                <span>+</span>
                <span>Iglo</span>
                <span>Campaign</span>
              </div>
              <div className="relative">
                <img
                  src="/nautical-ship-scene-with-captain-iglo-mascot.png"
                  alt="Captain Iglo ship scene"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute bottom-8 left-8">
                  <div className="bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                    <div className="text-blue-900 font-bold text-sm">KAPITEIN IGLO</div>
                  </div>
                  <div className="bg-red-500 rounded-full px-6 py-2">
                    <div className="text-white font-bold text-lg">iglo</div>
                  </div>
                </div>
              </div>
              <div className="text-[#2C3E50] text-2xl font-bold mt-8">02 Iglo</div>
            </div>
            <div className="space-y-6 scroll-animate">
              <div className="text-[#2C3E50] text-6xl font-black leading-tight">
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
              <div className="flex items-center justify-between text-[#2C3E50] text-sm">
                <span>Friendly vibe</span>
                <span>DJ</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="bg-[#2C3E50] px-6 py-16 mb-32 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="text-[8rem] font-black text-[#E67E22] leading-none tracking-tight">CLI</div>
              <div className="text-[8rem] font-black text-[#E67E22] leading-none tracking-tight -mt-8">ENTS</div>

              <div className="my-16">
                <div className="text-[#E67E22] text-lg mb-4 max-w-md mx-auto border border-[#E67E22] rounded-full py-4 px-8">
                  "Thank you to all my clients for their trust and collaboration."
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center mb-16 scroll-animate">
              <div>
                <div className="text-[#E67E22] text-lg font-medium mb-4">Support and partnership</div>
              </div>
              <div>
                <p className="text-[#E67E22] text-sm leading-relaxed">
                  Over the years, I've had the opportunity to collaborate with a diverse range of clients, each
                  bringing unique challenges and exciting projects.
                </p>
              </div>
              <div>
                <p className="text-[#E67E22] text-sm leading-relaxed">
                  Below is a selection of some of the clients I've had the privilege to work with, helping them
                  achieve their digital goals through tailored solutions and creative innovation.
                </p>
                <div className="text-[#E67E22] text-2xl mt-4 cursor-pointer">×</div>
              </div>
            </div>

            {/* Client Names Grid */}
            <div className="relative h-64 scroll-animate">
              <div className="absolute top-0 left-0 text-[#E67E22] text-2xl font-bold">LOVELLA TELESFORD</div>
              <div className="absolute top-8 left-64 text-[#E67E22] text-sm">Laura Heijgen, Young Marco</div>
              <div className="absolute top-16 left-32 text-[#E67E22] text-sm">Forever Records, Nimmahacks</div>
              <div className="absolute top-24 left-0 text-[#E67E22] text-sm">VMH Ontwikkeling</div>
              <div className="absolute top-32 left-48 text-[#E67E22] text-sm">JOON Music, New Wave</div>
              <div className="absolute top-40 left-16 text-[#E67E22] text-sm">Tugendhaft, Ownit</div>
              <div className="absolute top-48 left-80 text-[#E67E22] text-sm">Pepflow B.V., Schagen + Helder</div>

              <div className="absolute top-0 right-0 text-[#E67E22] text-2xl font-bold">TURFY GANG</div>
              <div className="absolute top-8 right-64 text-[#E67E22] text-sm">Frontier BV, Three Ace</div>
              <div className="absolute top-16 right-32 text-[#E67E22] text-sm">
                Huys van Eeghen, Jesse Jewelry
              </div>
              <div className="absolute top-24 right-0 text-[#E67E22] text-sm">Octopus Agents</div>
              <div className="absolute top-32 right-48 text-[#E67E22] text-sm">Logistieke Roadshow</div>
              <div className="absolute top-48 right-16 text-[#E67E22] text-sm">Nickms</div>
              <div className="absolute top-56 right-80 text-[#E67E22] text-sm">CBW Woonweken</div>

              <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[#E67E22] text-3xl font-bold">
                BOOMBOOM CLUB
              </div>
              <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[#E67E22] text-2xl font-bold">
                NAMAM
              </div>
              <div className="absolute top-44 left-1/2 -translate-x-1/2 text-[#E67E22] text-lg">
                Aya Nijmegen, Bruxelles House
              </div>
              <div className="absolute top-52 left-1/2 -translate-x-1/2 text-[#E67E22] text-lg">
                Willemsparkweg 12, ETEL DC, Grobi
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#E67E22] text-3xl font-bold">
                EETCAFE VAN HOUTEN
              </div>

              <div className="absolute bottom-16 right-1/4 text-[#E67E22] text-2xl font-bold">BVAO</div>
              <div className="absolute bottom-8 right-1/3 text-[#E67E22] text-2xl font-bold">FITTERGY GROUP</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
