import resume from "../assets/files/Tjandra_Putra_Resume.pdf";

export const menuLinks = [
  {
    title: "Email",
    description: "Wefennie@gmail.com",
    icon: "fa-regular fa-envelope",
    link: "Wefennie@gmail.com",
    external: true, // for mailto
  },
  {
    title: "Phone",
    description: "+65 87881626",
    icon: "fa-regular fa-paper-plane",
    link: "tel:+65 87881626",
    external: true, // for tel
  },
  {
    title: "Resume",
    description: "My resume",
    icon: "fa-regular fa-file",
    link: resume,
    external: false,
  },
  {
    title: "LinkedIn",
    description: "My LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/fennie-tai-3a5783234/",
    external: false,
  },
];
