import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

function clinicalImage(src: string): FC<FigureProps> {
  return function ClinicalImage({ className, title }) {
    return (
      <img
        src={src}
        alt={title ?? "Imagem clínica ortopédica"}
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  };
}

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-clavicula:radiografia": clinicalImage(
    "/media/upper-limb/clavicle-fracture-xray.jpg",
  ),
  "luxacao-acromioclavicular:radiografia": clinicalImage(
    "/media/upper-limb/ac-separation-xray.png",
  ),
  "fratura-glenoide:radiografia": clinicalImage(
    "/media/upper-limb/glenoid-fracture-xray.jpg",
  ),
  "fratura-umero-proximal:radiografia": clinicalImage(
    "/media/upper-limb/proximal-humerus-fracture-xray.jpg",
  ),
  "fratura-umero-distal:radiografia": clinicalImage(
    "/media/upper-limb/distal-humerus-fracture-xray.jpg",
  ),
};
