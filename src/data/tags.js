import ReactTag from "../components/icons/tags/ReactTag.astro"
import TailwindTag from "../components/icons/tags/TailwindTag.astro"
import JsTag from "../components/icons/tags/JsTag.astro"
import HtmlTag from "../components/icons/tags/HtmlTag.astro"
import CssTag from "../components/icons/tags/CssTag.astro"
import AstroTag from "../components/icons/tags/AstroTag.astro"

export const TAGS = {
  REACT: {
    name: "React",
    class: "bg-sky-600 border border-sky-900",
    icon: ReactTag
  },
  HTML: {
    name: "HTML",
    class: "bg-orange-500 border border-orange-900",
    icon: HtmlTag
  },
  CSS: {
    name: "CSS",
    class: "bg-blue-600 border border-blue-900",
    icon: CssTag
  },
  JS: {
    name: "JavaScript",
    class: "bg-yellow-600 border border-yellow-900",
    icon: JsTag
  },
  TAILWIND: {
    name: "TailwindCss",
    class: "bg-sky-800 border border-sky-600",
    icon: TailwindTag
  },
  ASTRO: {
    name: "Astro",
    class: "bg-black border border-slate-600",
    icon: AstroTag
  }
}
