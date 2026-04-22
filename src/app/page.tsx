"use client";

import Logo from "@/assets/logo.svg";
import { Navbar } from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pilares = [
  {
    title: "Sigilo Profissional",
    body: "Garantia de confidencialidade, conforme prevê o Código de Ética Profissional do Psicólogo, assegurando que tudo o que é dito permaneça protegido.",
  },
  {
    title: "Respeito à dignidade",
    body: "Valorização da pessoa humana, sem qualquer forma de discriminação, em consonância com os princípios do Código de Ética.",
  },
  {
    title: "Compromisso ético",
    body: "Atuação pautada por responsabilidade, integridade e cuidado, preservando a autonomia e o bem-estar de quem busca atendimento.",
  },
  {
    title: "Escuta qualificada",
    body: "Atenção integral ao que é dito, ao que se cala e ao que se expressa por outras vias, com responsabilidade técnica e profundo respeito ao sujeito.",
  },
  {
    title: "Atualização constante",
    body: "Manutenção de estudos e participação em formações, grupos e supervisões, garantindo uma prática clínica sempre atualizada.",
  },
];

const testimonials = [
  {
    name: "H.P.",
    text: "Profissional excelente! Levei um bom tempo pra encontrar uma psicóloga que eu realmente sentisse que estava evoluindo com a terapia. Nao troco por nada!",
    rating: 5,
  },
  {
    name: "J.P.",
    text: "Uma ótima profissional. Muito dedicada e responsável, desde a faculdade até hoje em dia enquanto profissional. Admiro e Indico.",
    rating: 5,
  },
  {
    name: "I.R.",
    text: "Ana é uma profissional ímpar, acompanho sua trajetória desde a faculdade e sempre vi sua dedicação e comprometimento. Indico de olhos fechados! Sua escuta é sensível e atenta, de fato humanizada.",
    rating: 5,
  },
  {
    name: "M.",
    text: "Excelente profissional!! Lugar onde se tem confiança, segurança e liberdade para ser ouvida com sabedoria.",
    rating: 5,
  },
  {
    name: "J.A.",
    text: "A psicanálise com a Ana Karla me ajudou a entender padrões que eu nem sabia que existiam. Uma experiência verdadeiramente transformadora.",
    rating: 5,
  },
];

const espacoCoraImages = [
  "/espaco-cora/fachada.jpeg",
  "/espaco-cora/acolhimento-2.jpeg",
  "/espaco-cora/acolhimento.jpeg",
  "/espaco-cora/cafezinho.jpeg",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6 xl:px-10 max-w-7xl mx-auto">
        {/* HERO */}
        <section
          id="inicio"
          className="py-10 text-center h-[80vh] flex items-center justify-center flex-col"
          aria-labelledby="hero-title"
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Psicóloga Clínica · João Pessoa · Paraíba
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl italic mb-4"
          >
            O Eco por <br className="md:hidden" />
            trás do silêncio
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl"
          >
            Nesse espaço a palavra encontra acolhimento e a escuta se faz sem
            pressa, atenta ao que retorna, ao que insiste e ao que, pouco a
            pouco, se transforma. Aqui, cada som, cada ausência e cada gesto
            encontram espaço para existir — e serem compreendidos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Button className="mt-10" asChild>
              <Link
                href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                target="_blank"
                aria-label="Iniciar contato para agendamento"
              >
                Permita-se começar
              </Link>
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
              <span>CRP-13/13452</span>
              <span aria-hidden="true">·</span>
              <span>Online e presencial</span>
              <span aria-hidden="true">·</span>
              <span>Adulto e adolescentes</span>
            </div>
          </motion.div>

          <motion.a
            href="#pilares"
            aria-label="Ir para a próxima seção"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.span>
          </motion.a>
        </section>

        {/* QUOTE */}
        <motion.section
          {...sectionAnim}
          className="flex flex-col gap-4 md:flex-row md:gap-16 py-20"
        >
          <h2 className="font-serif text-3xl mb-4 w-full">
            &quot;Escutar é, antes de tudo, sustentar o silêncio que o outro
            precisa.&quot;
          </h2>

          <p className="sm:text-lg w-full">
            Nem sempre o que queremos dizer cabe inteiro na voz. Às vezes, a
            palavra chega tímida. Outras vezes, o silêncio fala alto. Este é um
            espaço para experimentar dizer — ou não dizer. Onde o tempo se molda
            ao seu ritmo. Onde a escuta não se apressa e a compreensão nasce,
            pouco a pouco, do encontro entre o que você traz e o que, aqui, se
            constrói.&quot;
          </p>
        </motion.section>

        {/* PILARES — carousel bleeding to the right */}
        <section
          id="pilares"
          className="py-20 space-y-8"
          aria-labelledby="pilares-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                ÉTICA
              </p>
              <h2 id="pilares-title" className="font-serif text-3xl">
                Pilares do Atendimento
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
              <span>deslize para ver mais</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="-mr-6 xl:-mr-10"
          >
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-4">
                {pilares.map((pilar) => (
                  <CarouselItem
                    key={pilar.title}
                    className="pl-4 basis-[82%] sm:basis-[50%] lg:basis-1/3"
                  >
                    <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground h-full">
                      <h3 className="font-serif text-xl">{pilar.title}</h3>
                      <p>{pilar.body}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </motion.div>
        </section>

        {/* SOBRE */}
        <motion.section
          id="sobre"
          {...sectionAnim}
          className="py-20 flex flex-col md:flex-row gap-16"
        >
          <div className="space-y-8 w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              PROFISSIONAL
            </p>
            <h2 className="font-serif text-3xl mb-4">Quem sou eu?</h2>
            <p className="md:text-lg">
              Sou Ana Karla Viana, psicóloga clínica (CRP-13/13452), com prática
              orientada pela{" "}
              <span className="italic font-bold"> psicanálise</span>.
              <br />
              <br />
              Meu trabalho é oferecer um tempo e um lugar seguros para que você
              fale de si, construa sentidos e descubra novas possibilidades de
              <span className="italic font-bold">
                {" "}
                viver a sua própria história
              </span>
              .
              <br />
              <br />
              Mais do que oferecer respostas, acredito que a análise abre
              caminhos para{" "}
              <span className="italic font-bold">
                {" "}
                perguntas mais verdadeiras
              </span>{" "}
              — aquelas que nos aproximam de nós mesmos.
              <br />
              <br />
              Atendo adolescentes e adultos em um trabalho que respeita o tempo
              e o ritmo de cada sujeito, reconhecendo a{" "}
              <span className="italic font-bold"> singularidade</span> de cada
              percurso.
            </p>

            <Button variant={"link"} className="p-0" asChild>
              <Link
                href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                target="_blank"
                aria-label="Conversar no Whatsapp"
              >
                Entrar em contato
              </Link>
            </Button>
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <Image
              width={1200}
              height={1200}
              src={"/entrevista.png"}
              alt="Ana Karla - Comissão Organizadora do Seminário Clínico de Psicanálise da UNIESP - 2025"
              className="w-full max-w-xl rounded-3xl mb-2 aspect-square ml-auto object-cover"
            />
            <Link
              href={"https://youtu.be/pIudeuGxFQM?t=1091"}
              target="_blank"
              className="text-muted text-xs text-center w-full hover:underline hover:text-primary"
            >
              Entrevista ao vivo sobre procastinação no programa Fica com a
              Gente - Paraíba – 2026
            </Link>
          </div>
        </motion.section>

        {/* ATENDIMENTO — redesigned */}
        <motion.section
          id="atendimento"
          {...sectionAnim}
          className="py-20 space-y-12"
        >
          {/* Header */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Como funciona
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Formas de Atendimento
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              As sessões duram cerca de 50 minutos. No primeiro encontro, você
              apresenta suas questões e expectativas, e juntos definimos
              frequência e formato do atendimento.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online */}
            <div className="rounded-2xl border border-border overflow-hidden flex flex-col">
              <Image
                width={800}
                height={200}
                className="w-full h-44 object-cover object-center"
                src={"/atendimento-online.png"}
                alt="Atendimento online"
              ></Image>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  Online
                </span>
                <h3 className="font-serif text-2xl">Atendimento Online</h3>
                <p className="text-muted-foreground">
                  Acompanhamento pela plataforma de sua escolha, com a mesma
                  qualidade e presença do atendimento presencial.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Sessões de 50 minutos por videochamada",
                    "Você escolhe o ambiente — de casa, do trabalho, de onde estiver",
                    "Ideal para quem tem agenda variável ou está fora de João Pessoa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="p-0 w-fit mt-auto text-primary"
                  asChild
                >
                  <Link
                    href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                    target="_blank"
                    aria-label="Agendar atendimento online"
                  >
                    Agendar atendimento online →
                  </Link>
                </Button>
              </div>
            </div>

            {/* Presencial */}
            <div className="rounded-2xl border border-border overflow-hidden flex flex-col">
              <Image
                width={800}
                height={200}
                className="w-full h-44 object-cover object-center"
                src={"/espaco-cora.png"}
                alt="Atendimento online"
              ></Image>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40 px-3 py-1 rounded-full w-fit">
                  Presencial
                </span>
                <h3 className="font-serif text-2xl">Atendimento Presencial</h3>
                <p className="text-muted-foreground">
                  Sessões realizadas em consultório, num espaço pensado para o
                  encontro físico — acolhedor, silencioso e terapêutico.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Sessões de 50 minutos em consultório privativo",
                    "Espaço Cora — R. Cassimiro de Abreu, 56, Brisamar, JP",
                    "Para quem valoriza o contato físico e a atmosfera do espaço",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="p-0 w-fit mt-auto text-primary"
                  asChild
                >
                  <Link
                    href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                    target="_blank"
                    aria-label="Agendar atendimento presencial"
                  >
                    Agendar atendimento presencial →
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Espaço Cora block */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-border overflow-hidden">
            {/* Photo grid — replace with real photos */}
            <div className="grid grid-cols-2 gap-0.5 bg-border">
              {espacoCoraImages.map((src, index) => (
                <Image
                  width={800}
                  height={800}
                  key={index}
                  alt="Espaço Cora"
                  src={src}
                  className="h-48 object-cover object-center"
                ></Image>
              ))}
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col gap-5 justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                O Consultório Presencial
              </p>
              <h3 className="font-serif text-2xl md:text-3xl">Espaço Cora</h3>
              <p className="text-muted-foreground text-sm">
                Um espaço de escuta, afeto e resultados — projetado para que
                cada detalhe contribua com o processo terapêutico. Salas
                privativas, acolhedoras e silenciosas.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Salas privativas",
                  "Brisamar, JP",
                  "Fácil acesso",
                  "Estacionamento",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-border rounded-full px-3 py-1 text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <Link
                  href="https://share.google/PQLG4g4SrBoWdOYPF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline w-fit"
                >
                  Ver no Google Maps →
                </Link>
                <Link
                  href="https://www.instagram.com/espaco.corajp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline w-fit"
                >
                  @espaco.corajp no Instagram →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ABORDAGEM */}
        <motion.section
          {...sectionAnim}
          className="py-20 flex flex-col gap-8 md:flex-row"
        >
          <div className="w-full md:flex md:flex-col md:justify-between md:self-stretch">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              ESTRUTURA
            </p>
            <h2 className="font-serif text-3xl mb-2">Minha Abordagem</h2>
            <p className="text-muted">
              É o que guia a forma de compreender e conduzir o processo
              terapêutico, respeitando a singularidade de cada pessoa.
            </p>

            <Button className="hidden md:inline-flex md:mt-auto w-fit" asChild>
              <Link
                href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                target="_blank"
                aria-label="Conversar no Whatsapp"
              >
                Vamos conversar?
              </Link>
            </Button>
          </div>
          <p className="w-full md:text-lg">
            Meu trabalho é orientado pela psicanálise, uma prática que valoriza
            a singularidade de cada sujeito e entende que, por trás do que é
            dito, há sentidos que se revelam aos poucos.
            <br />
            <br />
            No espaço terapêutico, não busco oferecer conselhos prontos, mas
            sustentar uma escuta atenta ao que se fala, ao que se cala e ao que
            se expressa de outras formas.
            <br />
            <br />
            Cada sessão é um convite para olhar para si de maneira mais
            profunda, permitindo que aquilo que se repete possa ser reconhecido
            e, assim, abrir espaço para novas formas de viver e se relacionar.
          </p>

          <Button className="md:hidden w-fit" asChild>
            <Link
              href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
              target="_blank"
              aria-label="Conversar no Whatsapp"
            >
              Vamos conversar?
            </Link>
          </Button>
        </motion.section>

        {/* PSICANÁLISE */}
        {/* <motion.section
          {...sectionAnim}
          className="py-20 flex flex-col gap-16 md:flex-row-reverse items-center"
        >
          <div className="space-y-8 w-full">
            <h2 className="font-serif text-3xl mb-4">O que é Psicanálise?</h2>
            <p className="md:text-lg">
              A psicanálise é uma abordagem clínica que busca compreender o
              sujeito para além do que é dito de forma consciente. Ela considera
              que pensamentos, sentimentos e comportamentos podem ser
              influenciados por conteúdos inconscientes — aquilo que muitas
              vezes se expressa nas entrelinhas, nos silêncios, nos lapsos e nas
              repetições.
              <br /> <br />
              Na prática, a psicanálise oferece um espaço para falar livremente,
              sem julgamentos, permitindo que, pouco a pouco, sentidos ocultos
              venham à tona. A partir dessa escuta atenta, é possível reconhecer
              padrões, compreender conflitos internos e abrir caminhos para
              novas formas de viver e se relacionar.
              <br /> <br />
              Mais do que uma técnica, a psicanálise é um encontro: um tempo e
              um lugar para que cada pessoa possa se escutar e ser escutada em
              sua singularidade.
            </p>
          </div>

          <div className="w-full">
            <Image
              src={SigmundFreud}
              alt="Sigmund Freud, fundador da psicanálise. Por Max Halberstadt, 1921"
              className="w-full rounded-3xl mb-2"
            />
            <p className="text-muted text-xs text-center">
              Sigmund Freud, fundador da psicanálise. Por Max Halberstadt, 1921
            </p>
          </div>
        </motion.section> */}

        {/* DEPOIMENTOS */}
        <motion.section
          {...sectionAnim}
          className="py-20 space-y-10"
          aria-label="Depoimentos de pacientes"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Depoimentos
            </p>
            <h2 className="font-serif text-3xl">
              O que dizem sobre o processo
            </h2>
          </div>

          <div className="-mr-6 xl:-mr-10">
            <Carousel
              opts={{ align: "start", loop: false }}
              className="w-full overflow-visible"
            >
              <CarouselContent className="-ml-4 overflow-visible">
                {testimonials.map((t) => (
                  <CarouselItem
                    key={t.name}
                    className="pl-4 basis-[85%] sm:basis-[55%] lg:basis-[38%]"
                  >
                    <div className="rounded-2xl bg-card p-6 flex flex-col gap-4 h-full">
                      <Quote
                        className="w-6 h-6 text-primary/40"
                        strokeWidth={1.5}
                      />
                      <p className="flex-1 text-sm leading-relaxed">{t.text}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/60">
                          {t.name}
                        </span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          {...sectionAnim}
          className="rounded-2xl bg-card p-8 md:p-16 flex flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl">
            Entre o silêncio e a palavra, há ecos que pedem escuta.
          </h2>
          <p>
            Se você sente que é hora de escutar o eco por trás do seu próprio
            silêncio, este espaço está aberto para você.
          </p>

          <div className="flex flex-col md:flex-row gap-2 mt-6">
            <Button asChild>
              <Link
                href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                target="_blank"
                aria-label="Conversar no Whatsapp"
              >
                Dar o primeiro passo
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* FAQ — centralized */}
        <section id="faq" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl">Perguntas Frequentes</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-left">
                  Como funciona a primeira sessão?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>
                    É um momento para você falar sobre o que o trouxe até aqui e
                    conhecer a forma como trabalho.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg text-left">
                  O atendimento online é eficaz?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>
                    Sim. A experiência clínica mostra que a escuta e o vínculo
                    acontecem de forma plena também no ambiente virtual.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg text-left">
                  Posso remarcar ou cancelar sessões?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>Sim, desde que haja aviso prévio.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg text-left">
                  Como funciona o contato inicial?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>
                    Ao clicar em Entrar em contato, você será direcionado ao
                    WhatsApp, onde poderei responder suas dúvidas sobre o
                    atendimento e combinaremos juntos os próximos passos.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg text-left">
                  Como posso saber os valores das sessões?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>
                    Conforme determina o Código de Ética do Psicólogo, os
                    valores não são divulgados publicamente. Eles são informados
                    durante o contato inicial, de forma clara e transparente.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg text-left">
                  Qual a frequência das sessões?
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  <p>
                    A frequência é definida em conjunto, considerando suas
                    necessidades e possibilidades, mas geralmente acontece uma
                    vez por semana.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-center mt-10">
              <Button asChild>
                <Link
                  href={"https://wa.me/message/Y7GU5LDQOYEUB1"}
                  target="_blank"
                  aria-label="Conversar no Whatsapp"
                >
                  Tenho outra dúvida
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer
          id="contato"
          className="py-10 flex flex-col gap-8 justify-center items-center text-muted text-xs"
        >
          <div className="text-center space-y-4">
            <Image src={Logo} alt="Ana Karla - Psicologia Clínica" />
          </div>

          <nav aria-label="Redes sociais e plataformas">
            <ul className="flex gap-4">
              <li>
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/ana-karla/"
                  aria-label="Perfil no LinkedIn"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://instagram.com/psicanakarla"
                  aria-label="Perfil no Instagram"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-center">
            © Ana Karla Viana (CRP-13/13452) / Todos os direitos reservados
          </p>
        </footer>
      </main>
    </>
  );
}
