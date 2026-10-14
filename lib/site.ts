export const site = {
  name: "Facundo Diaz",
  role: "Software Developer",
  email: "facundodiaz2727@gmail.com",
  phone: "+54 9 11 2336-5608",
  phoneHref: "tel:+5491123365608",
  location: "Buenos Aires, Argentina",
  github: "https://github.com/nobodyh-ctrl",
  linkedin: "https://www.linkedin.com/in/facundo-diaz-1a23282b6",
  // Plain <a> links don't get basePath automatically
  cv: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cv-facundo-diaz.pdf`,
  photo: "/images/facundo-diaz.jpg",
}
