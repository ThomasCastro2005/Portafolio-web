import React from 'react';

const TimeLineEducation = () => {
  return (
    <>
      <section className="mx-auto pt-15 font-clash">
      <div>
        {/* Step 1 */}
        <div className="flex lg:flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">4</div>
              <div className="text-amber-50 text-sm">Profesional</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 md:h-56 lg:h-64 lg:items-center">
            <div className="flex md:flex-row flex-col items-stretch h-full gap-10">
              <div className="flex-auto flex flex-col md:flex-col lg:flex-col md:justify-center lg:justify-center">
                <div className="px-3 py-1 text-xl md:text-[20px] lg:text-[20px] text-amber-50 font-bold">Ingenieria de Software</div>
                <div className="px-3 pb-1 text-sm md:text-base text-amber-50 font-normal">Universidad Politécnico Grancolombiano</div>
                <div className="px-3 pb-6 text-sm text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-90 shrink-0 h-48 md:h-full overflow-hidden">
                <img src="https://telefonosdecolombia.com/wp-content/uploads/Politecnico-Grancolombiano.png" alt="step 1" className="object-cover h-full w-full grayscale hover:grayscale-0 transition duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 1 to 2 */}
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-10 ml-8 md:w-16 md:ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-10 mt-16 mr-8 md:w-16 md:mt-16 md:mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">3</div>
              <div className="text-amber-50 text-sm">Técnologo</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 md:h-56 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full gap-10">
              <div className="flex-auto flex flex-col md:flex-col lg:flex-col md:justify-center lg:justify-center">
                <div className="p-3 text-xl md:text-[20px] lg:text-[20px] text-amber-50 font-bold">Técnologo en análisis y desarrollo de software</div>
                <div className="px-3 py-1 text-sm md:text-base text-amber-50 font-normal">Sena</div>
                <div className="px-3 pb-1 text-sm text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-90 shrink-0 h-48 md:h-full overflow-hidden">
                <img src="https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png" alt="step 2" className="object-cover h-full w-full grayscale-75 hover:grayscale-0 transition duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 2 to 3 */}
        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-10 mr-8 md:w-16 md:mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-10 mt-16 ml-8 md:w-16 md:mt-16 md:ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">2</div>
              <div className="text-amber-50 text-sm">Técnico</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 md:h-56 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full gap-10">
              <div className="flex-auto flex flex-col md:flex-col lg:flex-col md:justify-center lg:justify-center">
                <div className="p-3 text-xl md:text-[20px] lg:text-[20px] text-amber-50 font-bold">Técnico en programación</div>
                <div className="px-3 py-1 text-sm md:text-base text-amber-50 font-normal">Sena</div>
                <div className="px-3 pb-1 text-sm text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-90 shrink-0 h-48 md:h-full overflow-hidden">
                <img src="https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png" alt="step 3" className="object-cover h-full w-full grayscale-75 hover:grayscale-0 transition duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 3 to 4 */}
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-10 ml-8 md:w-16 md:ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-10 mt-16 mr-8 md:w-16 md:mt-16 md:mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">1</div>
              <div className="text-amber-50 text-sm">Bachiller</div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 md:h-56 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full md:gap-10 gap-10">
              <div className="flex-auto flex flex-col md:flex-col lg:flex-col md:justify-center lg:justify-center">
                <div className="p-3 text-xl md:text-[20px] lg:text-[20px] text-amber-50 font-bold">Bachiller</div>
                <div className="px-3 py-1 text-sm md:text-base text-amber-50 font-normal">Colegio Pedagógico Dulce María</div>
                <div className="px-3 pb-1 text-sm text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-90 shrink-0 h-48 md:h-full overflow-hidden">
                <img src="https://tse4.mm.bing.net/th/id/OIP.9-FqgHuwmCxI6H5U92JQgQHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3" alt="step 4" className="object-cover h-full w-full grayscale-75 hover:grayscale-0 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default TimeLineEducation;
