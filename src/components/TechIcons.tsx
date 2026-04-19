import { Droplets, Leaf, Wind } from "lucide-react";

const WaterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M12 2C6.5 8.5 4 12.5 4 15a8 8 0 0 0 16 0c0-2.5-2.5-6.5-8-13z" />
    <path d="M8 15a4 4 0 0 0 8 0" />
  </svg>
);

const RecycleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
    <path d="m14 16-3 3 3 3" />
    <path d="M8.293 13.596 4.875 8.5l3.5-6.062a1.83 1.83 0 0 1 1.575-.888h2.446" />
    <path d="m10 5 3-3 3 3" />
    <path d="m19.872 14.384-3.498 6.062a1.83 1.83 0 0 1-1.57.888" />
  </svg>
);

export const TechIcons = {
  Water: WaterIcon,
  Recycle: RecycleIcon,
  Droplets,
  Leaf,
  Wind,
};
