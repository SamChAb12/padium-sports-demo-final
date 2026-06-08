"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ACCENT = "#20AEEF";

export default function Home() {
  const heroImages = ["/hero.jpeg", "/hero2.jpeg", "/hero3.jpeg", "/hero4.jpeg"];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const torneos = [
    {
      title: "Torneo Aniversario",
      img: "/torneo1.jpeg",
      text: "Evento principal de aniversario con competencia, premios y ambiente de club.",
    },
    {
      title: "Holy Smash Cup",
      img: "/torneo2.jpeg",
      text: "Torneo con premiación, campeones y participación de la comunidad Padium.",
    },
    {
      title: "Torneo Halloween",
      img: "/torneo3.jpeg",
      text: "Experiencia temática con partidos, patrocinadores y ambiente deportivo.",
    },
  ];

  const ligas = [
    {
      title: "Liga Pro Smash",
      img: "/liga-pro.jpeg",
      text: "Liga competitiva para jugadores que buscan mejorar su nivel y competir constantemente.",
    },
    {
      title: "Liga Femenil",
      img: "/liga-femenil.jpeg",
      text: "Espacio dedicado a jugadoras que quieren competir, convivir y crecer dentro del pádel femenil.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020817]/70 shadow-lg shadow-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
            <Image
              src="/logo.png"
              alt="Padium Sports"
              width={90}
              height={90}
              className="scale-[1.34] object-contain"
            />
          </div>

           <div className="hidden gap-12 text-base font-semibold text-white/80 md:flex">
            {["inicio", "reservas", "torneos", "ligas", "contacto"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize transition hover:text-[#20AEEF]"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#reservas"
            className="rounded-full bg-[#20AEEF] px-5 py-2 text-sm font-bold text-[#020817] transition hover:scale-105 hover:brightness-110"
          >
            Reservar
          </a>
        </div>
      </nav>

      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#20AEEF44,transparent_35%),linear-gradient(135deg,#020817,#06152f_50%,#020817)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#20AEEF]">
              Club de Pádel · Tula, Hidalgo
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Vive la experiencia{" "}
              <span className="text-[#20AEEF]">Padium Sports</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70">
              Canchas de pádel, torneos, ligas, comunidad y una experiencia deportiva diseñada para jugadores que buscan competir, convivir y mejorar su nivel.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#reservas"
                className="rounded-full bg-[#20AEEF] px-7 py-3 font-bold text-[#020817] transition hover:scale-105 hover:brightness-110"
              >
                Reservar cancha
              </a>

              <a
                href="#torneos"
                className="rounded-full border border-white/20 px-7 py-3 font-bold text-white/90 transition hover:border-[#20AEEF] hover:text-[#20AEEF]"
              >
                Ver torneos
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                 ["3", "Canchas"],
                 ["500+", "Jugadores"],
                 ["Torneos", "Recurrentes"],
                 ["Ligas", "Activas"],
                 ].map(([number, label]) => (
                <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur-md"
                    >
                  <p className="text-xl font-black text-[#20AEEF]">{number}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-auto w-full max-w-[720px] rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-[#20AEEF]/20">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
              {heroImages.map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt={`Padium Sports Hero ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={`object-cover transition-all duration-1000 ease-in-out ${
                    index === heroIndex
                      ? "scale-100 opacity-100"
                      : "scale-110 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="reservas" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#20AEEF]">
            Reservas
          </p>

          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Reserva tu cancha
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Agenda tu próxima partida en Padium Sports y disfruta de nuestras instalaciones, torneos y comunidad de pádel.
          </p>

          <a
            href="#contacto"
            className="inline-flex rounded-full bg-[#20AEEF] px-10 py-4 text-lg font-black text-[#020817] transition hover:scale-105 hover:brightness-110"
          >
            Reservar ahora
          </a>
        </div>
      </section>

      <section id="torneos" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#20AEEF]">
            Torneos
          </p>

          <h2 className="mb-10 text-4xl font-black md:text-5xl">
            Torneos que impulsan la comunidad
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {torneos.map((torneo) => (
              <div
                key={torneo.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#06152f] transition hover:-translate-y-2 hover:border-[#20AEEF]/50"
              >
                <div className="relative aspect-[16/10] bg-[#020817]">
                  <Image
                    src={torneo.img}
                    alt={torneo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-black">{torneo.title}</h3>
                  <p className="text-sm text-white/60">{torneo.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ligas" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#20AEEF]">
            Ligas
          </p>

          <h2 className="mb-10 text-4xl font-black md:text-5xl">
            Competencia constante para todos los niveles
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {ligas.map((liga) => (
              <div
                key={liga.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-[#20AEEF]/50"
              >
                <div className="relative aspect-[16/9] bg-[#020817]">
                  <Image
                    src={liga.img}
                    alt={liga.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-3xl font-black text-[#20AEEF]">
                    {liga.title}
                  </h3>
                  <p className="text-white/70">{liga.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-[#20AEEF]/30 bg-[#020817] px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#20AEEF]/30 bg-[#20AEEF]/10 px-8 py-16 text-center">
          <h2 className="mb-5 text-4xl font-black md:text-5xl">
            ¿Listo para jugar en Padium Sports?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Reserva tu cancha, pregunta por torneos o solicita información sobre ligas y eventos.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 rounded-full bg-[#20AEEF] px-7 py-3 font-black text-[#020817] transition hover:scale-105">
              <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
              WhatsApp
            </button>

            <button className="flex items-center gap-3 rounded-full border border-[#20AEEF] px-7 py-3 font-black text-[#20AEEF] transition hover:scale-105">
              <Image src="/instagram.png" alt="Instagram" width={22} height={22} />
              Instagram
            </button>

            <button className="flex items-center gap-3 rounded-full border border-[#20AEEF] px-7 py-3 font-black text-[#20AEEF] transition hover:scale-105">
              <Image src="/maps.png" alt="Ubicación" width={22} height={22} />
              Ubicación
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image
                src="/logo.png"
                alt="Padium Sports"
                width={90}
                height={90}
                className="scale-[1.34] object-contain"
              />
            </div>

            <div>
              <p className="font-bold">Padium Sports</p>
              <p className="text-sm text-white/50">Club de Pádel · Tula, Hidalgo</p>
            </div>
          </div>

          <p className="text-sm text-white/40">© 2026 Padium Sports</p>
        </div>
      </footer>
    </main>
  );
}