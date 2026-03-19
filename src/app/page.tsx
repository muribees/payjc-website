export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Schedule />
      <Workshops />
      <Register />
      <FAQ />
      <Footer />
    </main>
  );
}

/* ─── Navigation ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif font-black text-2xl italic text-blue-950">
          PAYJC
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider text-blue-900/60">
          <a href="#about" className="hover:text-blue-950 transition">
            About
          </a>
          <a href="#schedule" className="hover:text-blue-950 transition">
            Schedule
          </a>
          <a href="#workshops" className="hover:text-blue-950 transition">
            Workshops
          </a>
          <a href="#faq" className="hover:text-blue-950 transition">
            FAQ
          </a>
          <a
            href="https://www.activityhero.com/biz/53231-camp-mac-palo-alto-ca/palo-alto-youth-journalism-convention-225513/1912333?aht_cam=schedule-widget&aht_src=54201&brand=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition normal-case tracking-normal"
          >
            Register &rarr;
          </a>
        </div>
        <a
          href="https://www.activityhero.com/biz/53231-camp-mac-palo-alto-ca/palo-alto-youth-journalism-convention-225513/1912333?aht_cam=schedule-widget&aht_src=54201&brand=1"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-blue-600 text-white px-4 py-2 text-sm font-semibold"
        >
          Register
        </a>
      </div>
      {/* Thin rule like a newspaper */}
      <div className="h-px bg-blue-950/10" />
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-blue-950 pb-20 pt-32">
      {/* Dramatic diagonal slice */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0c1a3a 0%, #1e3a6e 40%, #2563eb 100%)",
        }}
      />
      {/* Newspaper-style grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, white 79px, white 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, white 79px, white 80px)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="md:grid md:grid-cols-12 md:gap-8 items-end">
          {/* Main headline — takes most of the space */}
          <div className="md:col-span-8">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
              Vol. I &mdash; Paly Media Arts Center &mdash; April 25, 2026
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-white">
              Palo Alto Youth
              <br />
              <span className="italic">Journalism</span>
              <br />
              Convention
            </h1>
            <div className="h-1 w-24 bg-blue-400 mb-6" />
            <p className="text-lg md:text-xl text-blue-200/80 max-w-lg leading-relaxed mb-8">
              An educational event at Paly&apos;s Media Arts Center where
              4th&ndash;8th graders explore journalism firsthand. Learning the basics of AP style writing,
              photography, broadcasting, and design from students at the best high school journalism program in the United States.
            </p>
            <a
              href="https://www.activityhero.com/biz/53231-camp-mac-palo-alto-ca/palo-alto-youth-journalism-convention-225513/1912333?aht_cam=schedule-widget&aht_src=54201&brand=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-400 transition"
            >
              Register Now &rarr;
            </a>
          </div>
          {/* Side column — newspaper style info block */}
          <div className="md:col-span-4 mt-12 md:mt-0 border-l-2 border-blue-400/30 pl-6">
            <div className="text-blue-300 text-sm space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-blue-400 mb-1">When</p>
                <p className="font-serif text-xl text-white font-bold">Saturday, April 25</p>
                <p>10:00 AM &ndash; 12:30 PM</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-blue-400 mb-1">Where</p>
                <p className="font-serif text-xl text-white font-bold">Paly MAC</p>
                <p>Media Arts Center</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-blue-400 mb-1">Who</p>
                <p className="font-serif text-xl text-white font-bold">Grades 4&ndash;8</p>
                <p>PAUSD Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newspaper-style columns layout */}
        <div className="border-b-2 border-blue-950 pb-2 mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-black text-blue-950 tracking-tight">
            What to Expect
          </h2>
        </div>

        <div className="md:grid md:grid-cols-12 gap-x-12 gap-y-16">
          {/* Lead story — big left column */}
          <div className="md:col-span-7 mb-12 md:mb-0">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-blue-950 mb-4 leading-tight">
              The perfect introduction to journalism for interested PAUSD students
            </h3>
            <div className="h-0.5 w-16 bg-blue-500 mb-4" />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              PAYJC is a half-day convention organized by Paly&apos;s journalism
              program. Students rotate through workshops covering news writing, photojournalism, video production, magazine
              design, and more — each led by experienced high school student
              journalists.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The event gives younger students early exposure to the Media Arts
              program at Paly and a chance to see what student journalism looks
              like in practice. It&apos;s a low-commitment way to find out if your
              child is interested before signing up for the full <a href="https://campmacpalyjournalism.weebly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition">Camp MAC</a>
              experience this summer.
            </p>
          </div>

          {/* Right column — stacked items with rules */}
          <div className="md:col-span-5 md:border-l border-blue-100 md:pl-10 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2">
                Publications
              </p>
              <h4 className="font-serif text-xl font-bold text-blue-950 mb-2">
                Publications from Paly and Gunn participate
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Students will interact with staff from C Magazine, The
                Campanile, Viking, Paly Voice, InFocus, Incubator, Verde, Madrono, and The Gunn Oracle to learn what
                each publication covers and how they operate.
              </p>
            </div>
            <div className="border-t border-blue-100 pt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2">
                What&apos;s Included
              </p>
              <h4 className="font-serif text-xl font-bold text-blue-950 mb-2">
                T-shirt, lunch, reporter's notebook, and press pass
              </h4>
              <p className="text-gray-600 leading-relaxed">
                $10 registration covers everything: a PAYJC t-shirt, pizza lunch, a reporter&apos;s
                notebook, and a junior journalist press pass.
              </p>
            </div>
            <div className="border-t border-blue-100 pt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2">
                Camp MAC
              </p>
              <h4 className="font-serif text-xl font-bold text-blue-950 mb-2">
                Attendees receive a <a href="https://campmacpalyjournalism.weebly.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700 transition">Camp MAC</a> discount, check it out!
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Students who attend PAYJC get a discount on <a href="https://campmacpalyjournalism.weebly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition">Camp MAC</a>, the
                week-long summer journalism camp held at the same facility.
                A natural next step for kids who enjoy the convention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Schedule ─── */
function Schedule() {
  const timeline = [
    { time: "9:30 AM", event: "Check-in Opens", detail: "Grab your lanyard & t-shirt" },
    { time: "10:00 AM", event: "Opening Ceremony", detail: "Welcome & introductions" },
    { time: "10:20 AM", event: "Workshop Block 1", detail: "Hands-on journalism session" },
    { time: "11:00 AM", event: "Workshop Block 2", detail: "Hands-on journalism session" },
    { time: "11:40 AM", event: "Pizza & Publication Fair", detail: "Eat, explore, ask questions" },
    { time: "12:15 PM", event: "Closing & Camp MAC Info", detail: "Wrap-up and next steps" },
    { time: "12:30 PM", event: "Dismissal", detail: "See you at Camp MAC!" },
  ];

  return (
    <section id="schedule" className="py-24 md:py-32 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 mb-12 md:mb-0">
            <p className="text-[11px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">
              Schedule
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-4">
              Saturday,
              <br />
              April 25th
            </h2>
            <div className="h-1 w-16 bg-blue-400 mb-4" />
            <p className="text-blue-300 text-lg">
              10:00 AM &ndash; 12:30 PM
              <br />
              Paly Media Arts Center
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-5 border-b border-blue-800/50 group hover:bg-blue-900/30 transition -mx-4 px-4"
                >
                  <div className="w-20 shrink-0">
                    <span className="text-sm font-bold text-blue-400 tabular-nums">
                      {item.time}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg">{item.event}</p>
                    <p className="text-sm text-blue-300/70 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Workshops ─── */
function Workshops() {
  const workshops = [
    {
      title: "News Writing 101",
      description:
        "Learn the inverted pyramid, write a lead, and draft your first article.",
      tag: "Writing",
      num: "01",
    },
    {
      title: "Photojournalism",
      description:
        "Composition, storytelling through images, and hands-on shooting practice.",
      tag: "Visual",
      num: "02",
    },
    {
      title: "Broadcast & Video",
      description:
        "Script, shoot, and edit a short news segment with student mentors.",
      tag: "Multimedia",
      num: "03",
    },
    {
      title: "Magazine Design",
      description:
        "Explore layout, typography, and what makes a great magazine spread.",
      tag: "Design",
      num: "04",
    },
    {
      title: "Sports Reporting",
      description:
        "Cover a live event, write game recaps, and interview like a pro.",
      tag: "Writing",
      num: "05",
    },
    {
      title: "Opinion & Editorial",
      description:
        "Find your voice, build an argument, and write persuasively.",
      tag: "Writing",
      num: "06",
    },
  ];

  return (
    <section id="workshops" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b-2 border-blue-950 pb-2 mb-4">
          <h2 className="font-serif text-4xl md:text-6xl font-black text-blue-950 tracking-tight">
            Workshops
          </h2>
        </div>
        <p className="text-gray-500 text-lg mb-12">
          All sessions led by Paly student journalists.
        </p>

        <div className="grid md:grid-cols-2 gap-0">
          {workshops.map((ws, i) => (
            <div
              key={ws.title}
              className={`py-8 pr-8 group ${
                i % 2 === 0 ? "md:border-r border-blue-100 md:pr-12" : "md:pl-12"
              } ${i < workshops.length - 2 ? "border-b border-blue-100" : i < workshops.length - 1 ? "border-b md:border-b-0 border-blue-100" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-black text-blue-200 leading-none mt-1">
                  {ws.num}
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-1">
                    {ws.tag}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition">
                    {ws.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {ws.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Register ─── */
function Register() {
  return (
    <section id="register" className="relative py-24 md:py-32 overflow-hidden">
      {/* Angled blue background */}
      <div className="absolute inset-0 bg-blue-600" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 mb-10 md:mb-0">
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Registration
              <br />
              <span className="italic">is open.</span>
            </h2>
            <div className="h-1 w-20 bg-white/40 mb-6" />
            <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
              $10 per student. Includes a t-shirt, lunch, reporter&apos;s
              notebook, and junior journalist press pass.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-6">
              Registration closes March 31
            </p>
            <a
              href="https://www.activityhero.com/biz/53231-camp-mac-palo-alto-ca/palo-alto-youth-journalism-convention-225513/1912333?aht_cam=schedule-widget&aht_src=54201&brand=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-10 py-5 text-xl font-bold hover:bg-blue-50 transition"
            >
              Register Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "Who is this for?",
      a: "PAUSD students (some exceptions) currently in grades 4 through 8. No prior journalism experience is needed. The workshops are designed as introductions to the basics.",
    },
    {
      q: "What does registration include?",
      a: "The $10 fee covers a PAYJC t-shirt, lunch (pizza), a reporter's notebook, and a lanyard/press pass. There are no additional costs.",
    },
    {
      q: "Where is the event held?",
      a: "The Paly Media Arts Center (MAC) on the Palo Alto High School campus. This is the same facility used by Paly's journalism classes and Camp MAC.",
    },
    {
      q: "What are the drop-off and pickup times?",
      a: "Check-in begins at 9:30 AM. The convention runs from 10:00 AM to 12:30 PM. Please arrange pickup by 12:30 PM.",
    },
    {
      q: "How does the Camp MAC discount work?",
      a: "Students who attend PAYJC receive a discount on Camp MAC registration, Paly's week-long summer journalism camp held at the same Media Arts Center later in the summer.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 mb-12 md:mb-0">
            <div className="md:sticky md:top-28">
              <h2 className="font-serif text-4xl md:text-5xl font-black text-blue-950 tracking-tight mb-4">
                FAQ
              </h2>
              <div className="h-1 w-16 bg-blue-500" />
            </div>
          </div>
          <div className="md:col-span-8">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`py-8 ${i < faqs.length - 1 ? "border-b border-blue-100" : ""}`}
              >
                <h3 className="font-serif text-xl font-bold text-blue-950 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top rule */}
        <div className="h-px bg-blue-800 mb-12" />
        <div className="md:flex md:justify-between md:items-start gap-12 mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif font-black text-3xl italic mb-2">PAYJC</h3>
            <p className="text-blue-400 text-sm">
              Palo Alto Youth Journalism Convention
            </p>
            <p className="text-blue-400 text-sm">
              Brought to you by Paly Media Arts
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-blue-500 font-bold mb-3">
                Event
              </p>
              <ul className="space-y-2 text-blue-300">
                <li>Saturday, April 25, 2026</li>
                <li>10:00 AM &ndash; 12:30 PM</li>
                <li>Paly Media Arts Center</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-blue-500 font-bold mb-3">
                Navigate
              </p>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-300 hover:text-white transition">About</a></li>
                <li><a href="#schedule" className="text-blue-300 hover:text-white transition">Schedule</a></li>
                <li><a href="#workshops" className="text-blue-300 hover:text-white transition">Workshops</a></li>
                <li><a href="#register" className="text-blue-300 hover:text-white transition">Register</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px bg-blue-800 mb-6" />
        <p className="text-center text-sm text-blue-500">
          &copy; 2026 PAYJC &middot; Palo Alto High School
        </p>
      </div>
    </footer>
  );
}
