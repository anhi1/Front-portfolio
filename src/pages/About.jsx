import React from "react";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          className="mx-auto h-10"
          
          src="public/logo.svg"
          alt="logo"
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-regular leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            <span className="font-bold text-8xl">C</span>omo diseñadora gráfica, cuento con una sólida carrera en arte y
              diseño. Actualmente, me especializo en desarrollo web fullstack.
              Destaco por mi dedicación constante en cada proyecto que emprendo,
              y mi experiencia previa como diseñadora de publicaciones. Soy
              reconocida por mi organización y mi compromiso con la excelencia
              en cada aspecto de mi trabajo. Estoy totalmente disponible para
              nuevas oportunidades y desafíos a tiempo completo.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Annie</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Diseñadora web</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
