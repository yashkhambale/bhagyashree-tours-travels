import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, MessageCircle, ArrowRight, Mountain, Compass, Shield, Users, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-mountain.jpg";
import tempoImg from "@/assets/tempo-traveller.png";
import innovaImg from "@/assets/innova-crysta.png";
import atvImg from "@/assets/atv-ride.png";
import waterImg from "@/assets/water-sports.png";

const PHONE = "+918378845944";
const PHONE_DISPLAY = "+91 83788 45944";
const WA = `https://wa.me/918378845944?text=${encodeURIComponent("Hi Bhagyashree Tours & Travels, I'd like to enquire about a tour package.")}`;
const MAP_EMBED = "https://www.google.com/maps?q=Bhagyashree+Tours+%26+Travels+Kharadi+Pune&output=embed";
const MAP_LINK = "https://maps.app.goo.gl/Yu5TQnEUSHPBec9Q7";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashree Tours & Travels — Pune | Adventure Tours & Vehicle Rentals" },
      { name: "description", content: "Pune-based travel agency offering tempo traveller & Innova rentals, ATV adventures, water sports and curated tour packages. Open 24 hours. Call +91 83788 45944." },
      { property: "og:title", content: "Bhagyashree Tours & Travels — Pune" },
      { property: "og:description", content: "Adventure tours, vehicle rentals & getaway packages from Kharadi, Pune." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Fleet />
      <Adventure />
      <Why />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[color:var(--navy)]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-lg bg-gradient-sunset grid place-items-center text-white font-display text-xl">B</span>
          <span className="font-display text-xl tracking-wide text-cream leading-none">
            Bhagyashree<span className="block text-[10px] text-gold tracking-[0.3em]">TOURS & TRAVELS</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-cream/80">
          <a href="#services" className="hover:text-sunset transition">Services</a>
          <a href="#fleet" className="hover:text-sunset transition">Fleet</a>
          <a href="#adventure" className="hover:text-sunset transition">Adventure</a>
          <a href="#gallery" className="hover:text-sunset transition">Gallery</a>
          <a href="#contact" className="hover:text-sunset transition">Contact</a>
        </nav>
        <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition shadow-glow">
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
      <img src={heroImg} alt="Winding mountain road at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[color:var(--navy)]/30" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-cream px-4 py-1.5 rounded-full text-xs tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Kharadi, Pune · Since years of trusted journeys
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl text-cream leading-[0.95] text-balance">
            Wander further. <span className="text-sunset">Worry less.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream/85 max-w-xl">
            Curated tour packages and reliable vehicle rentals across Maharashtra & beyond. From quiet hill stations to roaring ATV trails — we make every kilometre memorable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 text-white px-7 py-3.5 rounded-full font-semibold transition shadow-glow">
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a href="#services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/25 text-cream px-7 py-3.5 rounded-full font-semibold transition">
              Explore packages <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-cream/90 text-sm">
            <Stat icon={<Star className="h-4 w-4 text-gold fill-gold" />} label="4.5 Google Rating" />
            <Stat icon={<Clock className="h-4 w-4 text-gold" />} label="Open 24 Hours" />
            <Stat icon={<Shield className="h-4 w-4 text-gold" />} label="Verified Drivers" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <div className="inline-flex items-center gap-2">{icon}<span>{label}</span></div>;
}

function Trust() {
  const items = [
    { n: "500+", l: "Happy Travellers" },
    { n: "24/7", l: "Availability" },
    { n: "50+", l: "Destinations" },
    { n: "4.5★", l: "Google Rated" },
  ];
  return (
    <section className="bg-[color:var(--navy)] text-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.l} className="text-center md:text-left">
            <div className="font-display text-4xl text-sunset">{i.n}</div>
            <div className="text-xs tracking-widest uppercase text-cream/70 mt-1">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <Compass className="h-7 w-7" />, title: "Curated Tour Packages", desc: "Goa, Mahabaleshwar, Lonavala, Konkan, Kashmir & more — fully planned door-to-door itineraries." },
    { icon: <Mountain className="h-7 w-7" />, title: "Adventure Activities", desc: "ATV rides, water sports, parasailing, banana boats and offbeat thrill experiences." },
    { icon: <Users className="h-7 w-7" />, title: "Group & Corporate Travel", desc: "Family tours, college trips and corporate offsites with comfortable tempo travellers." },
    { icon: <Shield className="h-7 w-7" />, title: "Reliable Vehicle Rentals", desc: "Innova Crysta, tempo travellers, SUVs and sedans with experienced local drivers." },
  ];
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="What We Do" title="Travel, your way." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-2xl p-7 shadow-card border border-border hover:border-sunset transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-sunset text-white grid place-items-center group-hover:scale-110 transition">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl mt-5">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Our Fleet" title="Comfortable rides. Trusted vehicles." />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <FleetCard
            img={tempoImg}
            badge="17 Seater"
            title="Force Tempo Traveller"
            desc="Spacious AC tempo traveller — ideal for group tours, family trips and corporate outings across Maharashtra."
            features={["Pushback seats", "AC cabin", "Experienced driver", "Music system"]}
          />
          <FleetCard
            img={innovaImg}
            badge="7 Seater"
            title="Toyota Innova Crysta"
            desc="Premium SUV for family getaways and airport transfers — smooth, safe and chauffeur-driven."
            features={["Plush interiors", "Full AC", "Luggage space", "Outstation ready"]}
          />
        </div>
      </div>
    </section>
  );
}

function FleetCard({ img, badge, title, desc, features }: { img: string; badge: string; title: string; desc: string; features: string[] }) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border group">
      <div className="relative aspect-[5/3] overflow-hidden bg-muted">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
        <span className="absolute top-4 left-4 bg-sunset text-white text-xs tracking-wider font-bold uppercase px-3 py-1.5 rounded-full">{badge}</span>
      </div>
      <div className="p-7">
        <h3 className="font-display text-3xl">{title}</h3>
        <p className="text-muted-foreground mt-2">{desc}</p>
        <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sunset" /> {f}
            </li>
          ))}
        </ul>
        <a href={WA} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-sunset font-semibold hover:gap-3 transition-all">
          Get a quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Adventure() {
  return (
    <section id="adventure" className="py-24 bg-[color:var(--navy)] text-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sunset/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <SectionHead eyebrow="Adventure Awaits" title="Thrills off the beaten path." invert />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <AdventureCard img={atvImg} title="ATV Off-Road Rides" desc="Rip through dirt trails on powerful all-terrain vehicles. Perfect for adrenaline seekers and weekend groups." />
          <AdventureCard img={waterImg} title="Beach & Water Sports" desc="Banana boats, jet-skis and sea floats at curated beach destinations. Safety gear included on every ride." />
        </div>
      </div>
    </section>
  );
}

function AdventureCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="relative rounded-3xl overflow-hidden group aspect-[5/4] shadow-card">
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/40 to-transparent" />
      <div className="absolute bottom-0 p-8">
        <h3 className="font-display text-4xl text-cream">{title}</h3>
        <p className="mt-2 text-cream/85 max-w-md">{desc}</p>
      </div>
    </div>
  );
}

function Why() {
  const items = [
    "Local Pune-based agency with personal service",
    "Transparent pricing — no hidden charges",
    "Hand-picked, courteous and experienced drivers",
    "Custom itineraries built around your dates",
    "24×7 phone & WhatsApp support",
    "Sanitised, well-maintained vehicles",
  ];
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead eyebrow="Why Bhagyashree" title="Travel partners, not just a vendor." align="left" />
          <p className="mt-5 text-muted-foreground text-lg max-w-lg">
            From the first call to the last drop, every detail is taken care of by a team that genuinely loves travel — and treats every guest like family.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-card">
              <span className="mt-1 h-6 w-6 rounded-full bg-gradient-sunset text-white grid place-items-center text-xs font-bold flex-shrink-0">✓</span>
              <span className="text-sm">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [tempoImg, atvImg, innovaImg, waterImg];
  return (
    <section id="gallery" className="py-24 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Gallery" title="Moments from the road." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Let's Plan Your Trip" title="Reach out — we reply fast." />
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-card space-y-6">
            <ContactRow icon={<Phone />} label="Call / Available 24×7" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
            <ContactRow icon={<MessageCircle />} label="WhatsApp" value="Chat with us instantly" href={WA} />
            <ContactRow
              icon={<MapPin />}
              label="Visit our office"
              value="Sai Ashtavinayak Lane, Trimurti Mitra Mandal, 44/6/1, Chandan Nagar, Kharadi, Pune, Maharashtra 411014"
              href={MAP_LINK}
            />
            <ContactRow icon={<Clock />} label="Hours" value="Open 24 hours · All days" />

            <a href={WA} target="_blank" rel="noopener" className="mt-2 w-full inline-flex justify-center items-center gap-2 bg-sunset hover:bg-sunset/90 text-white px-6 py-4 rounded-full font-semibold transition shadow-glow">
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card border border-border min-h-[420px]">
            <iframe
              title="Bhagyashree Tours & Travels location"
              src={MAP_EMBED}
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <span className="h-11 w-11 rounded-xl bg-gradient-sunset text-white grid place-items-center flex-shrink-0">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-medium mt-0.5">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-start gap-4 hover:text-sunset transition">{Inner}</a>
  ) : (
    <div className="flex items-start gap-4">{Inner}</div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-cream/80 py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row gap-4 justify-between items-center text-sm">
        <div className="font-display text-lg text-cream tracking-wide">Bhagyashree Tours & Travels</div>
        <div>© {new Date().getFullYear()} · Kharadi, Pune · {PHONE_DISPLAY}</div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-110 transition"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function SectionHead({ eyebrow, title, align = "center", invert = false }: { eyebrow: string; title: string; align?: "center" | "left"; invert?: boolean }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className={`text-xs tracking-[0.3em] uppercase ${invert ? "text-gold" : "text-sunset"} font-semibold`}>{eyebrow}</div>
      <h2 className={`mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-balance ${invert ? "text-cream" : ""}`}>{title}</h2>
    </div>
  );
}
