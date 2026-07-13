import Image from "next/image";

const CHAT_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

type Opinia = {
  id: number;
  variant: "light" | "dark";
  initial: string;
  avatarClass: string;
  avatarSrc?: string;
  name: string;
  role: string;
  bubbles: string[];
};

const OPINIE: Opinia[] = [
  {
    id: 1,
    variant: "light",
    initial: "A",
    avatarClass: "bg-gradient-to-br from-rose-400 to-orange-300",
    avatarSrc: "/opinie/avatar-1.webp",
    name: "Aga Piotrowska",
    role: "kosmetolog, właścicielka salonu",
    bubbles: [
      "Przed kursem moje planowanie było jednym wielkim chaosem. Brałam na siebie za dużo, zapominałam o ważnych sprawach i skupiałam się na zadaniach, które nie przybliżały mnie do celu.",
      "Po szkoleniu wiele mi się poukładało. Zrozumiałam, skąd bierze się ten chaos, nauczyłam się wyznaczać priorytety i odzyskałam czas oraz spokój w głowie. Jeśli chcesz lepiej planować i odzyskać kontrolę nad swoim czasem, ten kurs naprawdę warto przejść.",
    ],
  },
  {
    id: 2,
    variant: "dark",
    initial: "K",
    avatarClass: "bg-gradient-to-br from-sky-500 to-indigo-400",
    avatarSrc: "/opinie/avatar-2.webp",
    name: "Kuba Świątkiewicz",
    role: "właściciel firmy poligraficznej",
    bubbles: [
      "Wszystko zmieniło się gdy Wiktor pokazał mi jak tak naprawdę powinno się planować. Tu nie liczy się ilość zadań ale priorytety. Czy to co mam zrobić jest dla mnie ważne? Czy przybliża mnie do celu? A może wcale nie muszę tego robić?",
      "Teraz planuję każdy tydzień. Plan jest elastyczny i nie jestem niewolnikiem planu, ale dzięki niemu wiem co mam robić a to daje dużą jasność działania i zmniejsza poziom stresu. Dzięki Wiktor 👊",
    ],
  },
  {
    id: 3,
    variant: "light",
    initial: "M",
    avatarClass: "bg-gradient-to-br from-emerald-400 to-teal-300",
    avatarSrc: "/opinie/avatar-3.webp",
    name: "Monika Kufel",
    role: "dyrektorka szpitala",
    bubbles: [
      "Wydawało mi się, że planuję dobrze, ale tak naprawdę planowałam za intensywnie i w ogóle nie zostawiałam sobie miejsca na odpoczynek. Nie zdawałam sobie sprawy, że po prostu wyczerpuję swoje zasoby.",
      "Nauczyłam się zauważać, kiedy je tracę, co na to wpływa i jak je odbudowywać. Dzięki temu teraz pracuję i żyję dużo bardziej wydajnie, ale bez takich zjazdów jak wcześniej.",
    ],
  },
  {
    id: 4,
    variant: "light",
    initial: "S",
    avatarClass: "bg-gradient-to-br from-amber-400 to-yellow-300",
    avatarSrc: "/opinie/avatar-4.webp",
    name: "Sebastian Tokarski",
    role: "DJ i trener",
    bubbles: [
      "Moje planowanie przed współpracą z Wiktorem było trochę jak moje umiejętności znajomości języka niemieckiego – NIE POTRAFIĘ NIEMIECKIEGO 😂 Haos, spóźnianie się i to nieszczęsne uczucie z tyłu głowy, że czegoś zapomniałem.",
      "Aktualnie jestem bardzo zadowolony z tego procesu. Ogarniam wszystko na bieżąco, nie występuje u mnie prokrastynacja. Dzieki wielkie za wiedzę i praktykę!",
    ],
  },
];

function Bubble({
  text,
  variant,
  isLast,
}: {
  text: string;
  variant: "light" | "dark";
  isLast: boolean;
}) {
  return (
    <div
      style={{ fontFamily: CHAT_FONT }}
      className={[
        "w-fit max-w-[420px] px-4 py-2.5 text-[15px] leading-[1.4] rounded-[20px]",
        isLast ? "rounded-bl-[6px]" : "",
        variant === "light"
          ? "bg-[#E9E9EB] text-[#111114]"
          : "bg-[#26262B] text-[#F2F2F3] ring-1 ring-white/10",
      ].join(" ")}
    >
      {text}
    </div>
  );
}

export default function OpinieChat() {
  return (
    <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 max-w-5xl">
      {OPINIE.map((o) => (
        <figure key={o.id} className="m-0">
          <div className="flex items-end gap-2.5">
            {o.avatarSrc ? (
              <Image
                src={o.avatarSrc}
                alt={o.name}
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full object-cover select-none"
              />
            ) : (
              <div
                className={`h-9 w-9 shrink-0 rounded-full ${o.avatarClass} flex items-center justify-center text-sm font-semibold text-white/95 select-none`}
                aria-hidden="true"
              >
                {o.initial}
              </div>
            )}
            <div className="flex flex-col items-start gap-1">
              {o.bubbles.map((b, i) => (
                <Bubble
                  key={i}
                  text={b}
                  variant={o.variant}
                  isLast={i === o.bubbles.length - 1}
                />
              ))}
            </div>
          </div>
          <figcaption className="mt-3 pl-[46px] text-sm">
            <span className="font-medium text-neutral-200">{o.name}</span>
            <span className="text-neutral-500"> · {o.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
