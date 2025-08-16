import QuemSouEu from "@/assets/landing-page/quem-sou-eu.jpg";
import SigmundFreud from "@/assets/landing-page/sigmund-freud.jpg";
import Logo from "@/assets/logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="px-6 xl:px-10 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-4">
        <Image src={Logo} alt="Ana Karla – Psicologia Clínica"></Image>
        <Button>Entrar em contato</Button>
      </nav>
      <section className="py-10 text-center h-[80vh] flex items-center justify-center flex-col">
        <h1 className="font-serif text-4xl md:text-6xl italic mb-4">
          O Eco por <br className="md:hidden" />
          trás do silêncio
        </h1>

        <p className="max-w-3xl">
          Nesse espaço a palavra encontra acolhimento e a escuta se faz sem
          pressa, atenta ao que retorna, ao que insiste e ao que, pouco a pouco,
          se transforma. Aqui, cada som, cada ausência e cada gesto encontram
          espaço para existir — e serem compreendidos.
        </p>

        <Button className="mt-10">Entrar em contato</Button>
      </section>
      <section className="flex flex-col gap-4 md:flex-row md:gap-16 py-20 ">
        <div className="w-full md:flex md:flex-col md:justify-between md:self-stretch">
          <h2 className="font-serif text-3xl mb-4 w-full">
            &quot;Escutar é, antes de tudo, sustentar o silêncio que o outro
            precisa.&quot;
          </h2>
          <Button className="hidden md:inline-flex md:mt-auto w-fit">
            Entrar em contato
          </Button>
        </div>
        <p className="sm:text-lg w-full">
          Nem sempre o que queremos dizer cabe inteiro na voz. Às vezes, a
          palavra chega tímida. Outras vezes, o silêncio fala alto. Este é um
          espaço para experimentar dizer — ou não dizer. Onde o tempo se molda
          ao seu ritmo. Onde a escuta não se apressa e a compreensão nasce,
          pouco a pouco, do encontro entre o que você traz e o que, aqui, se
          constrói.”
        </p>
        <Button className="md:hidden">Entrar em contato</Button>
      </section>
      <section className="py-20 space-y-8">
        <div className="flex w-full justify-between">
          <h2 className="font-serif text-3xl mb-4">Pilares do Atendimento</h2>
          <Button className="hidden md:inline-flex">Entrar em contato</Button>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-2">
            <h3 className="font-serif text-xl">Sigilo Profissional</h3>
            <p>
              Garantia de confidencialidade, conforme prevê o Código de Ética
              Profissional do Psicólogo, assegurando que tudo o que é dito
              permaneça protegido.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-2">
            <h3 className="font-serif text-xl">Respeito à dignidade</h3>
            <p>
              Valorização da pessoa humana, sem qualquer forma de discriminação,
              em consonância com os princípios do Código de Ética.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-2">
            <h3 className="font-serif text-xl">Compromisso ético</h3>
            <p>
              Atuação pautada por responsabilidade, integridade e cuidado,
              preservando a autonomia e o bem-estar de quem busca atendimento.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-3">
            <h3 className="font-serif text-xl">Escuta qualificada</h3>
            <p>
              Atenção integral ao que é dito, ao que se cala e ao que se
              expressa por outras vias, com responsabilidade técnica e profundo
              respeito ao sujeito.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-3">
            <h3 className="font-serif text-xl">Atualização constante</h3>
            <p>
              Manutenção de estudos e participação em formações, grupos e
              supervisões, garantindo uma prática clínica sempre atualizada e
              alinhada às necessidades de quem busca atendimento.
            </p>
          </div>
        </div>
        <Button className="md:hidden">Entrar em contato</Button>
      </section>

      <section className="py-20 flex flex-col md:flex-row gap-16">
        <div className="space-y-8 w-full">
          <h2 className="font-serif text-3xl mb-4">Pilares do Atendimento</h2>
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
            Mais do que oferecer respostas, acredito que a análise abre caminhos
            para{" "}
            <span className="italic font-bold">
              {" "}
              perguntas mais verdadeiras
            </span>{" "}
            — aquelas que nos aproximam de nós mesmos.
            <br />
            <br />
            Atendo adolescentes e adultos em um trabalho que respeita o tempo e
            o ritmo de cada sujeito, reconhecendo a{" "}
            <span className="italic font-bold"> singularidade</span> de cada
            percurso.
          </p>
          <Link
            href={""}
            className="text-primary hover:underline hover:text-primary/90 text-sm font-semibold"
          >
            Entrar em contato
          </Link>
        </div>

        <div className="w-full">
          <Image
            src={QuemSouEu}
            alt="Ana Karla - Comissão Organizadora do Seminário Clínico de Psicanálise da UNIESP - 2025"
            className="w-full max-w-xl rounded-3xl mb-2 aspect-square ml-auto"
          ></Image>
          <p className="text-muted text-xs text-center">
            Comissão Organizadora do Seminário Clínico de Psicanálise da UNIESP
            – 2025
          </p>
        </div>
      </section>

      <section className="py-20 space-y-8">
        <div className="md:max-w-md">
          <h2 className="font-serif text-3xl mb-2">Formas de Atendimento</h2>
          <p className="text-muted">
            As sessões duram cerca de 50 minutos. No primeiro encontro, você
            apresenta suas questões e expectativas, e juntos definimos
            frequência e formato do atendimento.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-3">
            <h3 className="font-serif text-xl">Atendimento Online</h3>
            <p>
              Uma forma prática e segura de receber acompanhamento psicológico
              sem sair de casa. Ideal para quem busca conforto, flexibilidade e
              a possibilidade de estar no seu próprio espaço, preservando a
              qualidade da escuta e do vínculo terapêutico
            </p>
            <Link
              href={""}
              className="text-primary hover:underline hover:text-primary/90 text-sm font-semibold"
            >
              Agendar atendimento
            </Link>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-card text-card-foreground col-span-6 md:col-span-3">
            <h3 className="font-serif text-xl">Atendimento Presencial</h3>
            <p>
              Sessões realizadas em consultório, oferecendo um espaço pensado
              para acolher, escutar e proporcionar encontros presenciais. Uma
              opção para quem valoriza o contato físico e a atmosfera única do
              espaço terapêutico
            </p>
            <Link
              href={""}
              className="text-primary hover:underline hover:text-primary/90 text-sm font-semibold"
            >
              Agendar atendimento
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 flex flex-col gap-8 md:flex-row">
        <div className="w-full md:flex md:flex-col md:justify-between md:self-stretch">
          <h2 className="font-serif text-3xl mb-2">Minha Abordagem</h2>
          <p className="text-muted">
            É o que guia a forma de compreender e conduzir o processo
            terapêutico, respeitando a singularidade de cada pessoa.
          </p>

          <Button className="hidden md:inline-flex md:mt-auto w-fit">
            Entrar em contato
          </Button>
        </div>
        <p className="w-full md:text-lg">
          Meu trabalho é orientado pela psicanálise, uma prática que valoriza a
          singularidade de cada sujeito e entende que, por trás do que é dito,
          há sentidos que se revelam aos poucos.
          <br />
          <br />
          No espaço terapêutico, não busco oferecer conselhos prontos, mas
          sustentar uma escuta atenta ao que se fala, ao que se cala e ao que se
          expressa de outras formas.
          <br />
          <br />
          Cada sessão é um convite para olhar para si de maneira mais profunda,
          permitindo que aquilo que se repete possa ser reconhecido e, assim,
          abrir espaço para novas formas de viver e se relacionar.
        </p>
        <Button className="md:hidden">Entrar em contato</Button>
      </section>

      <section className="py-20 flex flex-col gap-16 md:flex-row-reverse items-center">
        <div className="space-y-8 w-full">
          <h2 className="font-serif text-3xl mb-4">O que é Psicanálise?</h2>
          <p className="md:text-lg">
            A psicanálise é uma abordagem clínica que busca compreender o
            sujeito para além do que é dito de forma consciente. Ela considera
            que pensamentos, sentimentos e comportamentos podem ser
            influenciados por conteúdos inconscientes — aquilo que muitas vezes
            se expressa nas entrelinhas, nos silêncios, nos lapsos e nas
            repetições.
            <br /> <br />
            Na prática, a psicanálise oferece um espaço para falar livremente,
            sem julgamentos, permitindo que, pouco a pouco, sentidos ocultos
            venham à tona. A partir dessa escuta atenta, é possível reconhecer
            padrões, compreender conflitos internos e abrir caminhos para novas
            formas de viver e se relacionar.
            <br /> <br />
            Mais do que uma técnica, a psicanálise é um encontro: um tempo e um
            lugar para que cada pessoa possa se escutar e ser escutada em sua
            singularidade.
          </p>
        </div>

        <div className="w-full">
          <Image
            src={SigmundFreud}
            alt="Sigmund Freud, fundador da psicanálise. Por Max Halberstadt, 1921"
            className="w-full rounded-3xl mb-2"
          ></Image>
          <p className="text-muted text-xs text-center">
            Sigmund Freud, fundador da psicanálise. Por Max Halberstadt, 1921
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-card p-8 md:p-16 flex flex-col items-center justify-center gap-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center">
          Entre o silêncio e a palavra, há ecos que pedem escuta.
        </h2>
        <p>
          Se você sente que é hora de escutar o eco por trás do seu próprio
          silêncio, este espaço está aberto para você.
        </p>

        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Button>Entrar em contato</Button>
          <Button variant={"link"}>Preencher formulário</Button>
        </div>
      </section>

      <section className="py-20 flex flex-col gap-8 md:flex-row">
        <div className="w-full md:flex md:flex-col md:justify-between md:self-stretch">
          <h2 className="font-serif text-3xl mb-4 w-full">
            Perguntas Frequentes
          </h2>
          <Button className="hidden md:inline-flex md:mt-auto w-fit">
            Tenho outra dúvida
          </Button>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
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
            <AccordionTrigger className="text-lg">
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
            <AccordionTrigger className="text-lg">
              Posso remarcar ou cancelar sessões?
            </AccordionTrigger>
            <AccordionContent className="text-balance">
              <p>Sim, desde que haja aviso prévio.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">
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
            <AccordionTrigger className="text-lg">
              Como posso saber os valores das sessões?
            </AccordionTrigger>
            <AccordionContent className="text-balance">
              <p>
                Conforme determina o Código de Ética do Psicólogo, os valores
                não são divulgados publicamente. Eles são informados durante o
                contato inicial, de forma clara e transparente.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg">
              Qual a frequência das sessões?
            </AccordionTrigger>
            <AccordionContent className="text-balance">
              <p>
                A frequência é definida em conjunto, considerando suas
                necessidades e possibilidades, mas geralmente acontece uma vez
                por semana.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button className="md:hidden">Tenho outra dúvida</Button>
      </section>

      <footer className="py-10 flex flex-col gap-8 justify-center items-center text-muted text-xs">
        <Image src={Logo} alt="Ana Karla – Psicologia Clínica"></Image>

        <ul className="flex gap-4 ">
          <li>
            <Link href={""}>Linkedin</Link>
          </li>
          <li>
            <Link href={""}>Instagram</Link>
          </li>
          <li>
            <Link href={""}>Doctoralia</Link>
          </li>
        </ul>

        <p className="text-center ">
          © Ana Karla Viana (CRP-13/13452) / Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
