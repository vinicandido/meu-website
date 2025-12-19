import React, { useState } from 'react';
import { Menu, X, Check, Award, Code2, Server, Terminal, Github, Linkedin, ExternalLink, ChevronRight, MessageCircle, Star, ShieldCheck, Zap, Clock } from 'lucide-react';

// --- Components ---

// 1. Navigation
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Exemplos", href: "#exemplos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Prova Social", href: "#prova-social" },
    { label: "Conhecimentos", href: "#conhecimentos" },
    { label: "Sobre mim", href: "#sobre" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darker/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-serif font-semibold tracking-wider text-white">
          Vinicius Candido
        </div>
        
        {/* Mobile/Desktop Hamburger Trigger (As per sketch style) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 text-white hover:text-accent transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Fullscreen Overlay Menu */}
        <div className={`fixed inset-0 bg-darker z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '64px', height: 'calc(100vh - 64px)' }}>
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-2xl font-light hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contato" 
            className="mt-8 px-8 py-3 border border-white text-white hover:bg-white hover:text-darker transition-all uppercase tracking-widest text-sm"
            onClick={() => setIsOpen(false)}
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = () => {
  // Placeholder para a foto.
  // IMPORTANTE: Substitua a URL abaixo pelo caminho da sua foto local ou URL hospedada.
  // Exemplo: "/assets/minha-foto.png" ou envie a imagem para o seu projeto.
  // Como sou uma IA, não consigo acessar diretamente o arquivo anexo, mas o layout está pronto para recebê-lo.
  const profileImage = "./vinicius.png"; // Substitua pelo caminho correto da sua imagem

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 lg:pt-20 px-6 bg-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none hidden lg:block"></div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Column: 
            - Mobile: Order 2 (Below image)
            - Desktop: Order 1 (Left side)
        */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif leading-tight text-white">
            Desenvolvo sites e sistemas <span className="text-accent italic">rápidos</span>, <span className="text-accent italic">seguros</span> e orientados a conversão.
          </h1>
          <p className="text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Soluções sob medida para pequenos, médios e grandes negócios. Foco total em performance, SEO e manutenção contínua. Nada de templates genéricos.
          </p>
          <div className="pt-6">
            <a href="https://wa.me/5516996183232" className="inline-block px-8 py-4 bg-white text-darker font-semibold text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
              Quero o meu site/sistema
            </a>
          </div>
        </div>

        {/* Image Column:
            - Mobile: Order 1 (Top)
            - Desktop: Order 2 (Right side)
        */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          {/* Container da Imagem com Gradiente Inferior para Fusão */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-700 group">
             
             {/* Gradient overlay to blend bottom of image into bg - Corte suave na parte de baixo */}
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10 opacity-80 lg:opacity-60"></div>
             
             <img 
              src={profileImage} 
              alt="Vinicius Candido" 
              className="w-full h-full object-cover object-top rounded-lg shadow-2xl shadow-accent/5 mask-image-gradient"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// 3. Portfolio Section (Carousel Replacement -> Grid for better UX on static landing)
const Portfolio = () => {
  const projects = [
    { id: 1, title: "Lading Page Saúde e Bem Estar", img: "./harb.gif" },
    { id: 2, title: "Site Odontovax", img: "./odontovax.gif" },
    { id: 3, title: "SaaS Dashboard", img: "./saas.png" },
    { id: 4, title: "Model", img: "./model.gif" },
  ];

  return (
    <section id="exemplos" className="py-20 bg-darker border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-12 text-white">Exemplos de Projetos Reais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden border border-white/10 bg-card aspect-video cursor-pointer">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/5516996183232" className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white hover:border-accent hover:text-accent transition-all uppercase text-sm tracking-wide">
            Quero negociar um projeto
          </a>
        </div>
      </div>
    </section>
  );
};

// 4. Trust Strip (Selo)
const TrustStrip = () => {
  return (
    <div className="bg-card border-y border-white/10 py-6">
      <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm md:text-base text-secondary">
        <div className="flex items-center gap-2 px-4 py-1 border border-accent/50 text-accent font-serif rounded">
          <Award size={18} /> <span>Selo de Qualidade</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-green-500" /> Entrega no prazo
        </div>
        <div className="flex items-center gap-2">
          <Code2 size={18} className="text-blue-500" /> Código limpo
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-purple-500" /> Suporte pós-entrega
        </div>
      </div>
    </div>
  );
};

// 5. Services
const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-dark px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-2">Serviços</h2>
          <p className="text-accent uppercase tracking-widest text-sm font-semibold">Desenvolvimento de Sites Profissionais</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-light">O que entregamos:</h3>
            <ul className="space-y-4 text-lg text-secondary">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Sites institucionais
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Landing pages de alta conversão
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Portfólios profissionais
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-white mb-4">O que você recebe:</h4>
              <ul className="space-y-3">
                {[
                  "Design responsivo",
                  "SEO técnico básico",
                  "Performance otimizada",
                  "Painel administrativo quando necessário",
                  "Expert em DevOps e computação em nuvem"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-secondary">
                    <Check size={18} className="text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 border border-white/5 rounded-lg flex flex-col justify-center items-center text-center h-full">
            <div className="mb-6 p-4 bg-dark rounded-full border border-white/10">
               <Zap size={48} className="text-white" />
            </div>
            <p className="text-secondary mb-8">
              Transforme visitantes em clientes com uma estrutura pensada para vender.
            </p>
            <a href="https://wa.me/5516996183232" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-darker font-bold uppercase text-sm tracking-wide hover:bg-white transition-colors rounded">
              👉 Quero um site profissional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Social Proof & Systems
const SocialProof = () => {
  return (
    <section id="prova-social" className="py-20 bg-darker relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Column 1: Immediate Proof */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-8 border-l-4 border-accent pl-4">PROVA IMEDIATA</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-secondary">
                <Star className="text-accent shrink-0" fill="#d4af37" size={20} /> Mais de 12 projetos entregues
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <Star className="text-accent shrink-0" fill="#d4af37" size={20} /> 100% dos clientes com sites ativos
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <Star className="text-accent shrink-0" fill="#d4af37" size={20} /> Experiência com negócios locais e serviços digitais
              </li>
            </ul>
            <div className="p-4 bg-white/5 rounded border border-white/10">
              <p className="text-sm text-gray-400 uppercase mb-2">Clientes Recentes</p>
              <p className="text-white font-medium">Clínica Vida+, Estética Aurora, Loja UrbanFit</p>
            </div>
          </div>

          {/* Column 2: Custom Systems */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Sistemas Web Sob Medida</h3>
            <ul className="space-y-3 text-secondary mb-8 text-sm md:text-base">
              <li className="flex items-center gap-2">- Portais com login e senha</li>
              <li className="flex items-center gap-2">- Área do cliente</li>
              <li className="flex items-center gap-2">- Integração com APIs e pagamentos</li>
              <li className="flex items-center gap-2">- Ideal para negócios que precisam escalar sem depender de soluções genéricas.</li>
            </ul>
            <div>
               <a href="https://wa.me/5516996183232" className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-darker transition-colors rounded uppercase text-sm font-bold">
                👉 Falar sobre um sistema
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Testimonials
const Testimonials = () => {
  const testimonials = [
    { name: "Carlos M.", role: "CEO UrbanFit", text: "O sistema de gestão mudou a forma como controlamos nosso estoque. Rápido e preciso." },
    { name: "Ana P.", role: "Clínica Vida+", text: "Site lindo e muito rápido. Nossos pacientes elogiam a facilidade de agendamento." },
    { name: "Roberto S.", role: "Advogado", text: "Profissionalismo do início ao fim. O suporte pós-entrega é o diferencial." }
  ];

  return (
    <section className="py-20 bg-dark px-6 border-b border-white/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-serif text-white mb-12">O que nossos clientes dizem</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-6 border border-white/5 rounded hover:border-accent/30 transition-colors">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={14} className="text-accent" fill="#d4af37" />)}
              </div>
              <p className="text-secondary italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="https://wa.me/5516996183232" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-darker transition-all uppercase text-sm tracking-wide">
            Falar com o especialista
          </a>
        </div>
      </div>
    </section>
  );
};

// 8. Technical Knowledge
const TechStack = () => {
  return (
    <section id="conhecimentos" className="py-20 bg-darker">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border border-white/10 p-8 md:p-12 bg-dark relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
          
          <h2 className="text-3xl font-serif text-white mb-10 text-center">Conhecimento Técnico</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              {[
                "HTML5, CSS3, JAVASCRIPT",
                "Hospedagem",
                "Docker, Kubernets, Linux"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary">
                  <div className="p-1 bg-accent/10 rounded">
                    <Code2 size={16} className="text-accent" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
               {[
                "Computação em Nuvem: Azure Devops e AWS",
                "Integrações com ferramentas em geral",
                "Integrações com IA"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary">
                  <div className="p-1 bg-accent/10 rounded">
                    <Server size={16} className="text-accent" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12">
             <a href="https://wa.me/5516996183232" className="inline-block px-8 py-3 border border-secondary text-secondary hover:border-white hover:text-white transition-all uppercase text-sm tracking-wide">
                Contratar Serviços de DevOps
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 9. About Me
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-dark px-6">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-3xl font-serif text-white">Sobre mim</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
        
        <p className="text-secondary leading-relaxed text-lg">
          Meu nome é Vinicius e atuo na área de tecnologia há mais de 4 anos. Sou desenvolvedor de sistemas com foco em soluções web funcionais e objetivas. 
          Trabalho como freelancer ajudando pequenos, médios e grandes negócios a terem presença digital profissional 
          sem depender de plataformas engessadas. Também atuo com DevOps, ajudando empresas a escalarem suas infraestruturas na nuvem.
          Entre em contato comigo para discutirmos seu projeto!
        </p>
        
        <p className="text-white text-xl font-light italic border-l-2 border-accent pl-6 py-2 inline-block text-left bg-white/5 pr-4 rounded-r">
          "Minha prioridade é simples: entregar algo que funcione, gere resultado e possa evoluir."
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a href="https://github.com/vinicandido" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/vinicius-jesus-candido/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

// 10. FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    { q: "Quanto custa um site?", a: "Depende do escopo. Projetos simples a partir de um valor fechado, sem mensalidade obrigatória." },
    { q: "Você oferece manutenção?", a: "Sim. Planos mensais opcionais." },
    { q: "O site é meu?", a: "Sim. Código e domínio são do cliente." }
  ];

  return (
    <section className="py-20 bg-darker px-6 border-t border-white/5">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-serif text-white mb-10 text-center">FAQ - Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left text-white hover:text-accent transition-colors py-2"
              >
                <span className="text-lg">{item.q}</span>
                <ChevronRight className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                <p className="text-secondary pl-4 border-l border-accent/30">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 11. Footer
const Footer = () => {
  return (
    <footer id="contato" className="py-12 bg-black text-center text-sm border-t border-white/10">
      <div className="container mx-auto px-6 space-y-6">
        <div className="space-y-2">
           <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
           <p className="text-secondary hover:text-white transition-colors cursor-pointer">viniciustheodoro.candido@gmail.com</p>
           <p className="text-secondary hover:text-white transition-colors cursor-pointer">telefone/whatsapp - 16 99618-3232</p>
  
        </div>
        
        <div className="pt-8 text-gray-600 text-xs uppercase tracking-widest">
          © Copyright todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="antialiased bg-dark text-gray-200">
      <Navbar />
      <Hero />
      <Portfolio />
      <TrustStrip />
      <Services />
      <SocialProof />
      <Testimonials />
      <TechStack />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
