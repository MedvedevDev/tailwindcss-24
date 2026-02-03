import { CodepenCard } from "./components/css-figures/CodepenCard";
import { ColorfulButton } from "./components/css-figures/ColorfulButton";
import { ExpandingSearchBar } from "./components/css-figures/ExpandingSearchBar";
import { LoadingAnimationCircle } from "./components/css-figures/LoadingAnimationCircle";
import { LoadingAnimationSquare } from "./components/css-figures/LoadingAnimationSquare";

export const FIGURES = [
  { id: "colorful-btn", title: "Colorful Button", component: ColorfulButton },
  {
    id: "expanded-search-bar",
    title: "Expanded Search Bar",
    component: ExpandingSearchBar,
  },
  {
    id: "codepen-card",
    title: "Codepen Card",
    component: CodepenCard,
  },
  {
    id: "loading-animation-circle",
    title: "Loading Animation Circle",
    component: LoadingAnimationCircle,
  },
  {
    id: "loading-animation-square",
    title: "Loading Animation Square",
    component: LoadingAnimationSquare,
  },
];
