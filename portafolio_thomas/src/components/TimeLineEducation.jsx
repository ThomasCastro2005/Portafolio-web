import React from 'react';

const TimeLineEducation = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 font-clash">
      <div>
        {/* Step 1 */}
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">1</div>
              <div className="text-amber-50 text-sm">Profesional</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-amber-50">
                  <span className="font-black">Step 1</span> - Idea
                </div>
                <div className="p-3 text-3xl text-amber-50 font-bold">Ingenieria de Sofwtare</div>
                <div className="p-3 text-1xl text-amber-50 font-normal">Universidad Politécnico Grancolombiano</div>
                <div className="px-3 pb-6 text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="lg:w-90 shrink-0">
                <img src="https://telefonosdecolombia.com/wp-content/uploads/Politecnico-Grancolombiano.png" alt="step 1" className="object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 1 to 2 */}
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">2</div>
              <div className="text-amber-50 text-sm">Técnologo</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-amber-50">
                  <span className="font-black">Step 2</span> - Collaboration
                </div>
                <div className="p-3 text-3xl text-amber-50 font-bold">Find your team and collaborate</div>
                <div className="px-3 pb-6 text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="lg:w-90 shrink-0">
                <img src="https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png" alt="step 2" className="object-contain h-full w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 2 to 3 */}
        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">3</div>
              <div className="text-amber-50 text-sm">Planification</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-amber-50">
                  <span className="font-black">Step 3</span> - Planification
                </div>
                <div className="p-3 text-3xl text-amber-50 font-bold">Make a good plan and prepare tasks</div>
                <div className="px-3 pb-6 text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="lg:w-90 shrink-0">
                <img src="https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png" alt="step 3" className="object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector 3 to 4 */}
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-row-reverse lg:h-10">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-amber-50">4</div>
              <div className="text-amber-50 text-sm">Implementation</div>
            </div>
          </div>
          <div className="flex-auto border rounded border-gray-300 lg:h-64">
            <div className="flex md:flex-row flex-col items-stretch h-full">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-amber-50">
                  <span className="font-black">Step 4</span> - Implementation
                </div>
                <div className="p-3 text-3xl text-amber-50 font-bold">Execute, implement your solution</div>
                <div className="px-3 pb-6 text-amber-50/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className="lg:w-90 shrink-0">
                <img src="https://tse4.mm.bing.net/th/id/OIP.9-FqgHuwmCxI6H5U92JQgQHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3" alt="step 4" className="object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineEducation;