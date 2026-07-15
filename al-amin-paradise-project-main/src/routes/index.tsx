import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
  Star,
  Utensils,
  ShoppingBag,
  Users,
  Accessibility,
  BadgeCheck,
  Sparkles,
  Sun,
  HeartHandshake,
  ChefHat,
  Wallet,
  Timer,
  Leaf,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

import hero from "@/assets/hero.jpg";
import menu130 from "@/assets/WhatsApp Image 2026-07-06 at 1.01.30 PM.jpeg";
import menu323 from "@/assets/WhatsApp Image 2026-07-06 at 3.23.48 PM.jpeg";
import menu326 from "@/assets/WhatsApp Image 2026-07-06 at 3.26.49 PM.jpeg";
import menu334 from "@/assets/WhatsApp Image 2026-07-06 at 3.34.54 PM.jpeg";
import menu341 from "@/assets/WhatsApp Image 2026-07-06 at 3.41.03 PM.jpeg";
import comboMee from "@/assets/combo-mee.jpg";
import comboNasi from "@/assets/combo-nasi.jpg";
import menu557 from "@/assets/WhatsApp Image 2026-07-06 at 5.22.57 PM.jpeg";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import prata from "@/assets/prata.jpg";
import meeGoreng from "@/assets/mee-goreng.jpg";
import butterChicken from "@/assets/butter-chicken.jpg";
import gheeDosai from "@/assets/ghee-dosai.jpg";
import chickenTikka from "@/assets/chicken-tikka.jpg";
import tehTarik from "@/assets/teh-tarik.jpg";
import restaurant from "@/assets/WhatsApp Image 2026-07-06 at 3.06.29 PM.jpeg";
import chickenBiryani from "@/assets/chicken-biryani.jpg";
import garlicNaan from "@/assets/garlic-naan.jpg";
import nasiGoreng from "@/assets/nasi-goreng.jpg";
import logo from "@/assets/Screenshot 2026-07-06 142719.png";
import ctaBg from "@/assets/cta-bg.jpg";

function TikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+6591655269";
const PHONE_DISPLAY = "9165 5269";
const ADDRESS = "47 Holland Drive, #01-377, Singapore 270047";
const MAP_QUERY = encodeURIComponent("Al-Amin Food Paradise 47 Holland Drive Singapore");

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={`flex items-center gap-3 ${className}`}>
          <div className="overflow-hidden rounded-full border border-charcoal/10 bg-cream p-1 shadow-[var(--shadow-soft)]">
            <img
              src={logo}
              alt="Al-Amin Food Paradise logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <span className="min-w-[140px] flex flex-col leading-tight">
            <span className="font-display text-3xl font-semibold text-charcoal">Al-Amin</span>
            <span className="text-xl uppercase tracking-[0.22em] text-brown">Food Paradise</span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-auto max-w-[90vw] !p-0 overflow-hidden rounded-3xl !border-0 !bg-transparent !shadow-none">
        <img
          src={logo}
          alt="Al-Amin Food Paradise logo enlarged"
          className="block max-h-[90vh] w-auto max-w-[650px] rounded-3xl object-cover"
        />
      </DialogContent>
    </Dialog>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="gold-underline text-sm font-medium text-charcoal/85 hover:text-forest"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream shadow-[var(--shadow-soft)] transition-all hover:bg-forest-soft hover:shadow-[var(--shadow-elegant)] md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-cream/70 text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass-nav mx-5 mt-3 rounded-2xl p-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-charcoal"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,transparent_20%,var(--charcoal)_95%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 md:justify-center">
        <div className="max-w-3xl">
          <span className="animate-fade-in-slow inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-gold-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Holland Drive · Since Day One
          </span>
          <h1 className="animate-fade-up mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Authentic Halal
            <br />
            <span className="italic text-gold">Comfort Food,</span>
            <br />
            Made Fresh Every Day.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            Serving the Holland community for years with freshly prepared biryani, crispy prata,
            hearty Indian-Muslim favourites, and warm hospitality.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              View Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/15"
            >
              <Phone className="h-4 w-4" /> Call to Order
            </a>
          </div>

          <ul
            className="animate-fade-up mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-cream/85"
            style={{ animationDelay: "320ms" }}
          >
            {[
              "Fresh Daily",
              "Halal Certified Cuisine",
              "Family Friendly",
              "Dine In & Takeaway",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-gold" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating review badge */}
      <div className="animate-fade-up pointer-events-none absolute right-5 top-28 hidden md:right-8 md:top-32 md:block">
        <div className="pointer-events-auto rounded-2xl border border-cream/15 bg-cream/10 p-5 shadow-[var(--shadow-elegant)] backdrop-blur-xl">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-2 font-display text-2xl font-semibold text-cream">3.7 <span className="text-sm font-sans text-cream/70">Google Rating</span></div>
          <div className="text-xs uppercase tracking-widest text-cream/70">180+ Reviews</div>
        </div>
      </div>
    </section>
  );
}

const SPECIALTIES = [
  { name: "Mutton Biryani", desc: "Tender slow-cooked mutton served over fragrant basmati rice.", img: muttonBiryani, popular: true },
  { name: "Roti Prata", desc: "Golden, crispy outside and fluffy inside.", img: prata, popular: true },
  { name: "Mee Goreng", desc: "Classic wok-fried noodles packed with flavour.", img: meeGoreng },
  { name: "Butter Chicken & Garlic Naan", desc: "Rich creamy curry served with freshly baked naan.", img: butterChicken, popular: true },
  { name: "Chicken Tikka", desc: "Chargrilled and marinated with aromatic spices.", img: chickenTikka },
  { name: "Teh Tarik & Teh Halia", desc: "Freshly pulled traditional drinks.", img: tehTarik },
];

const MENU_IMAGES = [
  { img: menu130, section: "Drinks" },
  { img: menu323 },
  { img: menu326 },
  { img: menu334 },
  { img: menu341 },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-brown">
        <span className="h-px w-8 bg-gold" /> {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Specialties() {
  return (
    <section id="featured-menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Specialties"
            title={<>Dishes our regulars <span className="italic text-forest">order again and again</span></>}
            subtitle="A taste of what keeps the Holland Drive crowd coming back — freshly made, generously portioned, honestly priced."
          />
          <a href="#menu" className="reveal gold-underline text-sm font-medium text-forest">
            Explore full menu →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((s, i) => (
            <article
              key={s.name}
              className="reveal card-lift group overflow-hidden rounded-[24px] border border-border bg-card shadow-[var(--shadow-soft)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                {s.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-forest shadow-sm backdrop-blur">
                    ★ Popular Choice
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="relative bg-[color:var(--muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Full Menu"
          title={<>Our full <span className="italic text-forest">restaurant menu</span></>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_IMAGES.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)] focus:outline-none focus:ring-2 focus:ring-gold/70"
                  aria-label={`View menu photo ${index + 1}`}
                >
                  <img
                    src={item.img}
                    alt={`Menu photo ${index + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.section && (
                    <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/70 to-transparent px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-cream/80">{item.section}</p>
                      <h3 className="mt-2 text-lg font-semibold text-cream">Drinks</h3>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent px-3 py-2 text-xs uppercase tracking-[0.2em] text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Click to enlarge
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="w-auto max-w-[95vw] p-0 overflow-hidden rounded-[32px] bg-transparent shadow-none">
                <img
                  src={item.img}
                  alt={`Menu photo ${index + 1} full`}
                  className="block w-full max-w-[1200px] object-cover"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: ChefHat, title: "Freshly Prepared Daily", desc: "Every dish cooked to order from the wok, tandoor and biryani pot." },
  { icon: Wallet, title: "Affordable Prices", desc: "Hearty portions that respect your wallet — students and families welcome." },
  { icon: Leaf, title: "Authentic Recipes", desc: "Traditional Indian-Muslim recipes refined over years of service." },
  { icon: Utensils, title: "Large Halal Variety", desc: "Biryani, prata, curries, noodles, drinks — something for everyone." },
  { icon: HeartHandshake, title: "Friendly Family Environment", desc: "A neighbourhood spot where you're greeted like a regular." },
  { icon: Timer, title: "Quick Service", desc: "Fast, warm service whether you're dining in or grabbing takeaway." },
];

function Why() {
  return (
    <section className="relative bg-[color:var(--muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Why locals keep coming back"
          title={<>Comfort, care & <span className="italic text-forest">consistency</span></>}
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className="reveal card-lift rounded-[24px] border border-border bg-card p-8"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-forest/8 text-forest">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group overflow-hidden rounded-[32px] border border-border bg-neutral-100 shadow-[0_35px_80px_-40px_rgba(17,24,39,0.45)] transition duration-500 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold/70"
                aria-label="View restaurant photo"
              >
                <img
                  src={restaurant}
                  alt="Al-Amin Food Paradise restaurant interior"
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-full w-full min-h-[420px] object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-[95vw] p-0 overflow-hidden rounded-[32px] bg-transparent shadow-none">
              <img
                src={restaurant}
                alt="Al-Amin Food Paradise restaurant interior full photo"
                loading="eager"
                className="block w-full max-w-[1200px] object-cover"
              />
            </DialogContent>
          </Dialog>
          <div className="absolute -bottom-6 -right-4 hidden rounded-3xl border border-border bg-cream p-5 shadow-[var(--shadow-elegant)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-gold">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-charcoal">3.7 ★</div>
                <div className="text-xs uppercase tracking-widest text-brown">180+ Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Al-Amin"
            title={<>A neighbourhood favourite <span className="italic text-forest">since day one</span></>}
          />
          <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Located at Holland Drive, Al-Amin Food Paradise has been serving authentic halal
            favourites to families, students and working professionals for years. From comforting
            biryani and prata to freshly prepared Indian-Muslim classics, every meal is made with
            care using traditional recipes and quality ingredients.
          </p>

          <dl className="reveal mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "180+", v: "Google Reviews" },
              { k: "Years", v: "Serving the Community" },
              { k: "Family", v: "Friendly" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-gold/60 pl-4">
                <dt className="font-display text-3xl font-semibold text-forest sm:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-brown">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const SHOWCASE = [
  { name: "Briyanee", desc: "Fragrant basmati layered with spiced meat or vegetables, perfumed with saffron, ghee and whole spices.", img: menu130 },
  { name: "Butter Chicken", desc: "Silky tomato-butter gravy coating tender tandoori chicken, finished with cream and kasuri methi.", img: menu323 },
  { name: "Mutton Masala", desc: "Slow-cooked lamb in a thick, onion-tomato masala with warming spices and a gentle chilli heat.", img: menu326 },
  { name: "Murtabak", desc: "Crispy-stretched prata stuffed with spiced minced meat, egg and onions, griddled till golden.", img: menu334 },
  { name: "Ghee Dosai", desc: "Paper-thin dosa brushed with aromatic ghee—crisp edges, soft center—served with chutneys and sambar.", img: gheeDosai },
  { name: "Roti Bom", desc: "Buttery, caramelised-layered prata: flaky outside, soft and slightly sweet within—irresistible with curry.", img: meeGoreng },
  { name: "Mee Goreng Combo", desc: "Wok-fried yellow noodles tossed with vegetables, egg and your choice of protein, finished with bold mamak flavours.", img: comboMee },
  { name: "Nasi Goreng Combo", desc: "Fragrant fried rice stir-fried with vegetables, egg and your choice of protein for a smoky, savoury finish.", img: comboNasi },
  { name: "Combo Roti John", desc: "Toasted baguette loaded with spiced minced meat, fries and egg, drizzled with sauce—messy, meaty, moreish.", img: menu557 },
];

function Showcase() {
  return (
    <section id="showcase" className="relative bg-[color:var(--muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Signature Menu"
          title={<>A closer look at the <span className="italic text-forest">signatures</span></>}
          subtitle="Made from scratch. Served warm. Priced kindly."
        />
        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {SHOWCASE.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.name}
                className={`reveal grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="relative group overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)] focus:outline-none focus:ring-2 focus:ring-gold/70"
                      aria-label={`View full photo of ${item.name}`}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent px-4 py-3 text-sm font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Click to enlarge
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-auto max-w-[95vw] p-0 overflow-hidden rounded-[32px] bg-transparent shadow-none">
                    <img
                      src={item.img}
                      alt={`${item.name} full photo`}
                      className="block w-full max-w-[1200px] object-cover"
                    />
                  </DialogContent>
                </Dialog>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-brown">
                    0{i + 1} / 0{SHOWCASE.length}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "One of the better places for mutton biryani around Holland. Tender meat and generous portions.",
    name: "Regular diner",
    rating: 5,
  },
  {
    text: "Friendly staff and delicious prata. Great neighbourhood spot for a quick meal.",
    name: "Local resident",
    rating: 4,
  },
  {
    text: "The butter chicken and garlic naan are always satisfying. Warm atmosphere and good value.",
    name: "Happy customer",
    rating: 5,
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(REVIEWS);
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewConsent, setNewReviewConsent] = useState(true);
  const [privateReviewCount, setPrivateReviewCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedText = newReviewText.trim();
    const trimmedName = newReviewName.trim();

    if (!trimmedText || !trimmedName) {
      return;
    }

    const newReview = {
      text: trimmedText,
      name: trimmedName,
      rating: newReviewRating,
    };

    if (newReviewConsent) {
      setReviews((current) => [newReview, ...current]);
      setSuccessMessage("Thanks! Your review is now visible on the website.");
    } else {
      setPrivateReviewCount((current) => current + 1);
      setSuccessMessage("Thank you! Your feedback is saved privately and will not be published.");
    }

    setNewReviewText("");
    setNewReviewName("");
    setNewReviewRating(5);
    setNewReviewConsent(true);
  };

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={<>Loved by the <span className="italic text-forest">Holland community</span></>}
          />
          <div className="reveal flex items-center gap-6">
            <div>
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="mt-1 font-display text-2xl font-semibold text-charcoal">
                3.7 <span className="text-sm font-sans text-brown">Google Rating</span>
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-forest">180+</div>
              <div className="text-xs uppercase tracking-widest text-brown">Reviews</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleReviewSubmit}
          className="reveal mt-10 rounded-[24px] border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                Add your review
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Share your experience with the community and help others discover Al-Amin Food Paradise.
              </p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal shadow-[var(--shadow-gold)] transition hover:bg-gold/90"
            >
              Submit Review
            </button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-charcoal">
              Your name
              <input
                type="text"
                value={newReviewName}
                onChange={(event) => setNewReviewName(event.target.value)}
                placeholder="e.g. Sarah"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-charcoal outline-none transition focus:border-forest/60"
              />
            </label>
            <div className="space-y-5">
              <label className="space-y-2 text-sm text-charcoal">
                Your review
                <textarea
                  value={newReviewText}
                  onChange={(event) => setNewReviewText(event.target.value)}
                  placeholder="Tell us what you enjoyed..."
                  className="min-h-[140px] w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-charcoal outline-none transition focus:border-forest/60"
                />
              </label>
              <div className="space-y-3 rounded-[24px] border border-border/80 bg-background p-4">
                <div className="text-sm font-semibold text-charcoal">Star rating</div>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setNewReviewRating(i + 1)}
                      className={`rounded-full p-2 transition ${newReviewRating >= i + 1 ? "bg-gold text-charcoal" : "bg-cream text-muted-foreground"}`}
                      aria-label={`${i + 1} star${i === 0 ? "" : "s"}`}
                    >
                      <Star className="h-4 w-4" />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Choose your star rating before submitting.</p>
              </div>
              <label className="flex items-center gap-3 text-sm text-charcoal">
                <input
                  type="checkbox"
                  checked={newReviewConsent}
                  onChange={(event) => setNewReviewConsent(event.target.checked)}
                  className="h-4 w-4 rounded border-border bg-background text-forest focus:ring-forest"
                />
                May we display your review on the website?
              </label>
            </div>
          </div>
          {successMessage && (
            <div className="mt-6 rounded-[24px] border border-forest/30 bg-forest/5 px-5 py-4 text-sm text-forest">
              {successMessage}
            </div>
          )}
        </form>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="reveal card-lift flex h-full flex-col rounded-[24px] border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-charcoal">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm text-brown">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const DINING = [
  { icon: Utensils, label: "Dine In" },
  { icon: ShoppingBag, label: "Takeaway" },
  { icon: Sun, label: "Outdoor Seating" },
  { icon: ChefHat, label: "Catering" },
  { icon: Users, label: "Family Friendly" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
  { icon: BadgeCheck, label: "Halal Menu" },
  { icon: Timer, label: "Quick Meals" },
];

function Dining() {
  return (
    <section className="relative bg-[color:var(--muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Dining Options"
          title={<>However you like to <span className="italic text-forest">enjoy your meal</span></>}
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DINING.map((d, i) => (
            <div
              key={d.label}
              className="reveal card-lift group flex flex-col items-center gap-4 rounded-[24px] border border-border bg-card p-8 text-center"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-brown transition-colors group-hover:bg-forest group-hover:text-cream">
                <d.icon className="h-6 w-6" />
              </div>
              <div className="font-display text-base font-semibold text-charcoal">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal overflow-hidden rounded-[28px] border border-border shadow-[var(--shadow-elegant)]">
          <iframe
            title="Al-Amin Food Paradise map"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            className="h-full min-h-[380px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Visit Us"
            title={<>Find us at <span className="italic text-forest">Holland Drive</span></>}
          />
          <div className="mt-8 space-y-6">
            <div className="reveal flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-semibold text-charcoal">
                  Al-Amin Food Paradise
                </div>
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  47 Holland Drive<br />#01-377<br />Singapore 270047
                </div>
              </div>
            </div>
            <div className="reveal flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-charcoal">Phone</div>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-1 block text-sm text-muted-foreground hover:text-forest"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="reveal flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-charcoal">
                  Hours
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Daily
                  <br />
                  · Open until 8:00 PM
                  <br />
                  Last order: 7:30 PM
                </div>
              </div>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-cream px-6 py-3 text-sm font-semibold text-charcoal hover:border-forest hover:text-forest"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://www.foodpanda.sg/restaurant/krrp/al-amin-food-paradise-restaurant-holland-drive"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gold px-6 py-3 text-sm font-semibold text-charcoal shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:bg-gold/90"
              >
                <ShoppingBag className="h-4 w-4" /> Order Delivery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal/95" />
      <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <span className="reveal inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-gold backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> Come Hungry
        </span>
        <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
          Ready for authentic
          <br />
          <span className="italic text-gold">halal comfort food?</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Whether you're craving freshly made prata, flavourful biryani or a hearty meal with
          family and friends, we're ready to welcome you.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            View Menu <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-8 py-4 text-sm font-semibold text-cream backdrop-blur hover:bg-cream/15"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="overflow-hidden rounded-full border border-charcoal/10 bg-cream p-1">
              <img
                src={logo}
                alt="Al-Amin Food Paradise logo"
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <span className="min-w-[140px] flex flex-col leading-tight">
              <span className="font-display text-3xl font-semibold text-cream">Al-Amin</span>
              <span className="text-xl uppercase tracking-[0.22em] text-gold">Food Paradise</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Authentic halal comfort food, freshly prepared daily at Holland Drive.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Quick Links</div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Visit</div>
          <address className="mt-5 not-italic text-sm leading-relaxed text-cream/70">
            {ADDRESS}
          </address>
          <a href={`tel:${PHONE}`} className="mt-3 block text-sm hover:text-gold">
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Hours</div>
          <div className="mt-5 text-sm text-cream/70">
            Daily
            <br />
            Open until 8:00 PM 
            <br /> 
            Last order:7:30PM 
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/alaminfoodparadisesg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@alaminfoodparadise"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold"
            >
              <TikTok className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/alaminfoodparadise"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} Al-Amin Food Paradise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Menu />
        <Why />
        <About />
        <Showcase />
        <Reviews />
        <Dining />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
