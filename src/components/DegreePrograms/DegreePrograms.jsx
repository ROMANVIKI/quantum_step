
import React, {useState} from "react";
import ProgramCard from './ProgramCard'


const programs = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b323a85a2038dbbb59f9ae6247f0154dea83588c590bc2b45cef60996f679b7?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    university: {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4affc12b6e196a2c293d67f1f331b44664eec3eaddf6978608392bf6406db4?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
      name: "University of Illinois…",
    },
    title: "Master of Business Administration (iMBA)",
    type: "Degree",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2412f6332ebbe2b8db0b1e6706112809fb126ea3b1861700642243df38b3f66f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    university: {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1feab2812398c3fe240127c0c6af351599ed01d8903ae650c5c8a09ad619c0f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
      name: "University of Colorado…",
    },
    title: "Master of Science in Electrical Engineering",
    type: "Degree",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee4deff1b461389b44c7114a6d159144abaac686e985622b863e881880492157?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    university: {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1feab2812398c3fe240127c0c6af351599ed01d8903ae650c5c8a09ad619c0f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
      name: "University of Colorado…",
    },
    title: "Master of Engineering in Engineering Management",
    type: "Degree",
  },
  // {
  //   image:
  //     "https://cdn.builder.io/api/v1/image/assets/TEMP/798ffbb634d0f6200024d693c6c1b449657f11bc8cb8dabf31e8d7beb39c9bf1?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  //   university: {
  //     logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1feab2812398c3fe240127c0c6af351599ed01d8903ae650c5c8a09ad619c0f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  //     name: "University of Colorado…",
  //   },
  //   title: "Master of Science in Data Science",
  //   type: "Degree",
  // },
];

function DegreePrograms() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="flex flex-col mt-8 items-center px-4 max-w-[1000px] mx-auto">
      <div className="flex max-sm:hidden flex-col py-8 w-full text-center">
        <header className="mb-6">
          <h1 className="font-semibold text-purple-950 text-xl">Degree Programs</h1>
          <h2 className="mt-2 text-3xl font-bold">Get a head start on a degree today</h2>
          <p className="mt-2 text-lg text-slate-600">
            Build valuable skills and earn career credentials before enrolling.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </div>

        {/* <div className="flex mt-6 justify-center space-x-4">
          <button className="bg-blue-700 text-white py-3 px-8 rounded-lg">
            Show 8 more
          </button>
          <button className="bg-white border border-blue-700 text-blue-700 py-3 px-8 rounded-lg">
            View all
          </button>
        </div> */}

        {selectedProgram && (
          <div className="mt-8 text-left p-6 bg-gray-100 rounded-lg w-full">
            <h3 className="text-2xl font-bold">{selectedProgram.title}</h3>
            <p className="text-lg">{selectedProgram.university.name}</p>
            <p className="text-sm text-slate-500 mt-2">Type: {selectedProgram.type}</p>
          </div>
        )}
      </div>
      <div>
          
      </div>
    </section>
  );
}

export default DegreePrograms;
