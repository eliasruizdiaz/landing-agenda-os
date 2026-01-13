import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Zap, TrendingUp, Clock, BarChart3, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/595982120861?text=Hola%20Elías%2C%20me%20interesa%20conocer%20más%20sobre%20Agenda%20OS";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
          <img src="/agenda-os-logo.png" alt="Agenda OS" className="h-12" style={{width: '170px', objectFit: 'contain'}} />
        </div>
          <Button 
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
          >
            Agendar Cita
            <MessageCircle className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{backgroundColor: '#9d6cff'}}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#ffbd59'}}></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700">✨ Automatización Inteligente de Citas</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Convierte Conversaciones en Citas Confirmadas
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text mt-2">
                Mientras Duermes
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Tu sistema responde en segundos. Califica leads automáticamente. Agenda citas sin intervención manual. Reduce no-shows hasta 80%. Todo 24/7 con IA + Humanos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-xl text-lg h-14"
              >
                Quiero Verlo en Acción
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-purple-600 hover:bg-purple-50 text-lg h-14"
              >
                Agendar Llamada
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-600 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>+13 años en Contact Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Implementación en 7-21 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>ROI en 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Te Suena Esta Situación?</h2>
            <p className="text-lg text-slate-600">Pierdes oportunidades valiosas cada día por estos problemas operativos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Respuestas Lentas",
                desc: "Pierdes leads calientes porque tardas en responder. Mientras duermes, tus competidores avanzan."
              },
              {
                icon: Users,
                title: "Equipo Saturado",
                desc: "Pasas 6+ horas respondiendo mensajes repetitivos. No puedes escalar sin contratar más gente."
              },
              {
                icon: TrendingUp,
                title: "No-Shows Masivos",
                desc: "25-40% de tus citas confirmadas no aparecen. Pierdes dinero y tiempo constantemente."
              },
              {
                icon: BarChart3,
                title: "Sin Visibilidad",
                desc: "No sabes cuántas citas tendrás la próxima semana. Tu crecimiento es impredecible."
              }
            ].map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600">{problem.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-red-50 border-l-4 border-red-600 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-slate-900 font-semibold mb-2">
              💰 El Costo Real: Pierdes entre $5,000 - $50,000 mensuales por ineficiencia operativa
            </p>
            <p className="text-slate-600">
              Cada lead perdido, cada cita no confirmada, cada no-show es dinero que se va. Y lo peor: es completamente evitable.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">La Solución: Agenda OS</h2>
            <p className="text-lg text-slate-600">Un Sistema Operativo Anti-Frágil que combina IA + Humanos + Control</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                number: "1",
                title: "Agentes IA",
                desc: "Responden en segundos. Califican leads. Agendan citas. Envían recordatorios. Todo automático.",
                color: "from-blue-600 to-blue-700"
              },
              {
                number: "2",
                title: "Humanos Capacitados",
                desc: "Tu equipo, entrenado con SOPs de +13 años en contact centers. Solo intervienen cuando es necesario.",
                color: "from-indigo-600 to-indigo-700"
              },
              {
                number: "3",
                title: "Panel de Control",
                desc: "Dashboards en tiempo real. Métricas claras. Alertas automáticas. Decisiones basadas en datos.",
                color: "from-purple-600 to-purple-700"
              }
            ].map((layer, idx) => (
              <div key={idx} className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} rounded-xl opacity-10`}></div>
                <div className="relative p-8 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4" style={{backgroundImage: layer.color === 'from-blue-600 to-blue-700' ? 'linear-gradient(to right, #9d6cff, #9d6cff)' : layer.color === 'from-indigo-600 to-indigo-700' ? 'linear-gradient(to right, #9d6cff, #ffbd59)' : 'linear-gradient(to right, #ffbd59, #9d6cff)'}}>
                    {layer.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{layer.title}</h3>
                  <p className="text-slate-600">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-slate-900 font-semibold mb-4">
              ✨ Resultado: Un Sistema que Funciona en el Mundo Real
            </p>
            <p className="text-center text-slate-600">
              No es un chatbot genérico. Es un sistema operativo diseñado por un consultor senior con +13 años en Genesys. Anticipa problemas que otros no ven. Resiste el caos del comportamiento humano real.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo Que Ganas Inmediatamente</h2>
            <p className="text-lg text-slate-600">Resultados medibles desde el primer mes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Zap, title: "Respuesta en Segundos", stat: "<2 min", desc: "Tus leads reciben respuesta inmediata 24/7" },
              { icon: TrendingUp, title: "Conversión +40%", stat: "+40%", desc: "Más leads convertidos a citas confirmadas" },
              { icon: Clock, title: "Recupera 6h/día", stat: "6 horas", desc: "Libertad total de tiempo para lo importante" },
              { icon: CheckCircle2, title: "No-Shows -80%", stat: "-80%", desc: "Recordatorios inteligentes que funcionan" },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-10 h-10 mb-4" style={{color: '#9d6cff'}} />
                  <div className="text-3xl font-bold mb-2" style={{color: '#9d6cff'}}>{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-slate-900 font-semibold mb-2">
              💵 ROI Típico: Implementación pagada en 30 días
            </p>
            <p className="text-center text-slate-600 text-sm">
              Un cliente típico recupera la inversión en la primera semana de citas adicionales confirmadas.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Cómo Funciona?</h2>
            <p className="text-lg text-slate-600">El flujo operativo que transforma conversaciones en citas</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "1", title: "Lead Llega", desc: "Por WhatsApp, Instagram o tu web. El sistema lo recibe al instante." },
                { step: "2", title: "IA Responde", desc: "En segundos. Identifica intención. Pregunta lo necesario. Califica automáticamente." },
                { step: "3", title: "Oferta de Slots", desc: "Si cumple criterios, la IA ofrece horarios disponibles de tu calendario." },
                { step: "4", title: "Cita Confirmada", desc: "Se sincroniza automáticamente. El cliente recibe invitación." },
                { step: "5", title: "Recordatorios", desc: "Secuencias inteligentes reducen no-shows. Tu cliente se presenta." },
                { step: "6", title: "Escalación (Si Necesita)", desc: "Casos complejos van a tu equipo con contexto completo." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <img src="/elias-logo.png" alt="Elias Ruiz Diaz" className="shadow-2xl" style={{width: '382px', height: '183px', borderRadius: '34px', backgroundColor: '#ffffff', objectFit: 'cover', height: '183px'}} />
              </div>
              <div className="flex-grow text-white">
                <h3 className="text-3xl font-bold mb-4">Creado por Elias Ruiz Diaz</h3>
                <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                  Consultor Senior con <span className="font-bold" style={{color: '#ffbd59'}}>+13 anos de experiencia</span> en Genesys, automatizacion de contact centers y sistemas de IA conversacional.
                </p>
                <p className="text-slate-300 mb-6">
                  He ayudado a empresas globales a transformar sus operaciones de atencion al cliente. Agenda OS es el resultado de anos de experiencia implementando soluciones robustas que funcionan en el mundo real.
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold" style={{color: '#ffbd59'}}>13+</div>
                    <div className="text-sm text-slate-400">Anos en Genesys</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{color: '#ffbd59'}}>100+</div>
                    <div className="text-sm text-slate-400">Implementaciones</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{color: '#ffbd59'}}>Global</div>
                    <div className="text-sm text-slate-400">Mercados Atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Algunas Industrias que Confiamos</h2>
            <p className="text-lg text-slate-600">Desde profesionales premium hasta empresas medianas con ganas de crecer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏥', title: 'Salud Premium', desc: 'Odontologos, medicos esteticos' },
              { icon: '💼', title: 'Coaches Consultores', desc: 'Expertos de alto ticket' },
              { icon: '🏢', title: 'Agencias B2B', desc: 'Servicios profesionales' },
              { icon: '🔧', title: 'Servicios', desc: 'Peluquerias, SPAs, Gyms' },
              { icon: '🎓', title: 'Academias Premium', desc: 'Educacion de alto valor' },
              { icon: '🚗', title: 'Automotriz', desc: 'Test drives y servicio' },
              { icon: '🏗️', title: 'Profesionales Tecnicos', desc: 'Arquitectos, ingenieros' },
              { icon: '📈', title: 'Y Mas', desc: 'Cualquier negocio con citas' }
            ].map((industry, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{industry.title}</h3>
                <p className="text-sm text-slate-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Clientes Confiados</h2>
            <p className="text-lg text-slate-600">Empresas que ya han transformado su negocio trabajando conmigo</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto">
            {[
              { name: 'HSBC', logo: '/hsbc-logo.jpg' },
              { name: 'Itau', logo: '/itau-logo.jpg' },
              { name: 'Tigo', logo: '/tigo-logo.jpg' },
              { name: 'Personal', logo: '/personal-logo.png' },
              { name: 'Securitas Direct', logo: '/securitas-logo.jpg' },
              { name: 'Movistar', logo: '/movistar-logo.png' }
            ].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all">
                <img src={client.logo} alt={client.name} className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Resultados Reales</h2>
            <p className="text-lg text-slate-600">De clientes como tú que ya transformaron su negocio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Clínica Dental Premium",
                result: "+40% Citas",
                detail: "Redujo no-shows de 25% a 8%",
                metric: "USD 15K/mes adicionales"
              },
              {
                name: "Coach de Negocios",
                result: "6h Recuperadas",
                detail: "Ahora solo atiende casos complejos",
                metric: "+3 clientes/mes"
              },
              {
                name: "Agencia B2B",
                result: "+45% Conversión",
                detail: "Ventas recibe solo leads listos",
                metric: "-30% Costo por cliente"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{color: '#ffbd59'}}>★</span>
                  ))}
                </div>
                <p className="text-2xl font-bold mb-2" style={{color: '#9d6cff'}}>{testimonial.result}</p>
                <p className="text-slate-900 font-semibold mb-1">{testimonial.name}</p>
                <p className="text-slate-600 text-sm mb-3">{testimonial.detail}</p>
                <p className="font-semibold text-sm" style={{color: '#9d6cff'}}>{testimonial.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Transformar tu Agendamiento?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Agendar una llamada de 30 minutos. Sin compromiso. Te mostraré exactamente cómo funciona para tu caso específico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 shadow-xl text-lg h-14 font-semibold"
              >
                Agendar Ahora por WhatsApp
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-purple-100 text-sm mt-6">
              Respuesta en menos de 2 horas • Sin spam • Conversación privada
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">Agenda OS</div>
            <p className="text-sm">Consultoría Senior en Automatización de Contact Centers</p>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-sm">
              © 2025 Agenda OS. Diseñado por Elías Ruiz Díaz. +13 años en Genesys.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
