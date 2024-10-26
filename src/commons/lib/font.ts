import localFont from "next/font/local"

const Poligon = localFont({
  src: [
    {
      path: "../../../public/fonts/Poligon-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Semi-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Extra-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poligon-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
})

export { Poligon }
