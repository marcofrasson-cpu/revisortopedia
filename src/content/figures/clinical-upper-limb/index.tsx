import { useState, type FC } from "react";
import type { FigureProps } from "../../../types/topic";

export const CLINICAL_MEDIA_PATHS = {
  "fratura-clavicula:radiografia": "media/upper-limb/clavicle-fracture-xray.jpg",
  "luxacao-acromioclavicular:radiografia": "media/upper-limb/ac-separation-xray.png",
  "luxacao-glenoumeral-anterior:radiografia":
    "media/upper-limb/anterior-shoulder-dislocation-xray.png",
  "fratura-glenoide:radiografia": "media/upper-limb/glenoid-fracture-xray.jpg",
  "fratura-umero-proximal:radiografia": "media/upper-limb/proximal-humerus-fracture-xray.jpg",
  "fratura-umero-distal:radiografia": "media/upper-limb/distal-humerus-fracture-xray.jpg",
} as const;

/** Mantém mídias públicas dentro do subdiretório usado pelo GitHub Pages. */
export function clinicalMediaUrl(path: string): string {
  return `./${path.replace(/^\/+/, "")}`;
}

function clinicalImage(path: string): FC<FigureProps> {
  return function ClinicalImage({ className, title }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
      return (
        <div
          role="status"
          aria-label={`${title ?? "Imagem clínica ortopédica"} — indisponível`}
          className="flex min-h-44 w-full max-w-md flex-col items-center justify-center border border-white/10 bg-[#111a24] px-6 py-8 text-center text-slate-200"
        >
          <span className="code text-[0.64rem] text-slate-400">MÍDIA INDISPONÍVEL</span>
          <p className="mt-2 max-w-xs text-[0.82rem] leading-relaxed text-slate-300">
            Não foi possível carregar esta imagem clínica.
          </p>
          <button
            type="button"
            onClick={() => setFailed(false)}
            className="mt-4 rounded-md border border-white/15 px-3 py-1.5 text-[0.76rem] text-slate-200 transition-colors hover:bg-white/10"
          >
            Tentar novamente
          </button>
        </div>
      );
    }

    return (
      <img
        src={clinicalMediaUrl(path)}
        alt={title ?? "Imagem clínica ortopédica"}
        className={className}
        loading="lazy"
        decoding="async"
        draggable={false}
        data-clinical-media={path}
        onError={() => setFailed(true)}
      />
    );
  };
}

export const figures: Record<string, FC<FigureProps>> = Object.fromEntries(
  Object.entries(CLINICAL_MEDIA_PATHS).map(([id, path]) => [id, clinicalImage(path)]),
);
