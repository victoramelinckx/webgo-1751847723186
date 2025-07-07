
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Tu sitio web listo en un día y soporte 24/7 para llevar tus ventas al mundo digital sin complicaciones." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Cuéntanos sobre tu negocio y metas." step2Title="Creamos tu web" step2Desc="Diseñamos un sitio de ventas potente." step3Title="24H Lanzamiento" step3Desc="Tu web funcional en un día." />
<Aboutus headline="WebGo: Digitaliza y Vende Ahora" subheadline="Transformamos recomendaciones en ventas online sin complicaciones ni esfuerzo." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo digital" beneficiotitulo2="Ventas Aumentadas" beneficio2="Convierta recomendaciones en ingresos online" />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Construimos tu plataforma online optimizada para ventas sin complicaciones." services={[{"name":"Desarrollo Web Rápido","icon":"flash","description":"Lanzamos tu web en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Aumenta la visibilidad de tu negocio online."},{"name":"Gestión de Contenido","icon":"pencil-alt","description":"Contenido que atrae y retiene clientes."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Ecommerce","icon":"shopping-cart","description":"Facilita tus ventas online."},{"name":"Análisis de Conversiones","icon":"chart-line","description":"Mejora tus estrategias con datos precisos."}]} />
<BeforeAndAfter subheadline="Transformando tus ideas en proyectos digitales de éxito inigualable." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender más allá de las recomendaciones?","respuesta":"WebGo te ayuda a digitalizar tus ventas creando una tienda online atractiva y fácil de usar. Esto permite que más clientes te encuentren en internet, aumentando tus oportunidades de venta más allá de las recomendaciones tradicionales."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo para mi pequeño negocio?","respuesta":"Con WebGo, obtienes una solución completa para gestionar tu tienda online. Ahorras tiempo, ya que nos encargamos del mantenimiento y optimización de tu sitio web, permitiéndote enfocarte en lo que mejor sabes hacer."},{"pregunta":"No sé nada sobre ventas online, ¿cómo me ayuda WebGo con esto?","respuesta":"No te preocupes, WebGo te guía en cada paso del proceso. Ofrecemos asesoramiento personalizado y herramientas fáciles de usar para que puedas empezar a vender online sin complicaciones."},{"pregunta":"¿Es costoso digitalizar mi negocio con WebGo?","respuesta":"WebGo ofrece planes asequibles adaptados a pequeños negocios. Nuestra meta es que puedas comenzar a vender online sin una gran inversión inicial, maximizando tus beneficios desde el primer momento."},{"pregunta":"¿Cuánto tiempo tomará ver resultados con mi tienda online de WebGo?","respuesta":"Con WebGo, muchos de nuestros clientes comienzan a ver un aumento en las ventas en pocas semanas. Nuestro equipo se asegura de que tu tienda esté optimizada para atraer a más clientes desde el principio."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio con WebGo" 
                      description="Deja de depender solo de recomendaciones. Haz que tu negocio sea visible online y multiplica tus ventas sin complicaciones. Conecta con nosotros y digitaliza tu éxito ahora."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
