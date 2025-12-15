import React, { useState, useEffect } from 'react';
import { 
    Heart, Package, MapPin, ShoppingCart, FileText,  ArrowRight, Truck, 
    BookOpen, Gift, Smile, List, Compass,   Shirt, Home, Shield, DollarSign,
    Sun, Tally2, Layers, Clipboard, Globe, Video,Monitor
} from 'lucide-react';

const HumanizedImpactDashboard = () => {
  // --- Data Definitions from User Requirements ---
  
  const [counts, setCounts] = useState({
    items: 0,
    kits: 0,
    families: 0,
    widows: 0
  });

  const kitItems = [
    { icon: Tally2, name: 'Warm Shawl' },
    { icon: Layers, name: 'Sweater/Jacket' },
    { icon: Tally2, name: 'Pair of Socks' },
    { icon: Layers, name: 'Gloves' },
    { icon: Tally2, name: 'Woolen Cap' },
    { icon: Package, name: 'Heavy Blanket' },
    { icon: Shield, name: 'Hygiene Essentials' }
  ];

  const pricingOptions = [
    { amount: 300, description: 'Woolen Cap + Socks Combo' },
    { amount: 500, description: "Children's Sweater" },
    { amount: 1000, description: 'Winter Clothing Pack' },
    { amount: 3500, description: 'Complete Winter Kit', highlight: true },
    { amount: 5000, description: 'Family Blanket + Clothing Support' }
  ];

  const executionSteps = [
    { icon: ShoppingCart, title: 'Collection / Purchase', description: 'Procuring high-quality winter items.' },
    { icon: Package, title: 'Packing of Kits', description: 'Assembling complete kits with care.' },
    { icon: Truck, title: 'Distribution', description: 'Delivery to rural & urban areas.' },
    { icon: Clipboard, title: 'Follow-up & Documentation', description: 'Verification and impact tracking.' },
    { icon: BookOpen, title: 'Impact Reporting', description: 'Sharing stories and accountability.' },
  ];

  const locations = ['Mansehra', 'Abbottabad', 'Rural Hill Areas', 'Local villages with high need'];

  // --- Animated Counters Logic ---
  useEffect(() => {
    const targets = { items: 1000, kits: 300, families: 150, widows: 80 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        items: Math.min(targets.items, Math.floor(targets.items * progress)),
        kits: Math.min(targets.kits, Math.floor(targets.kits * progress)),
        families: Math.min(targets.families, Math.floor(targets.families * progress)),
        widows: Math.min(targets.widows, Math.floor(targets.widows * progress))
      });
      if (step >= steps) clearInterval(timer);
    }, increment);
    return () => clearInterval(timer);
  }, []);

  // --- Utility Components ---

  const SectionHeader: React.FC<{ title: string; subtitle: string; icon: any }> = ({ title, subtitle, icon: Icon }) => (
    <div className="mb-10 text-center">
      <Icon className="w-12 h-12 mx-auto mb-3 text-red-700" />
      <p className="text-xl font-semibold uppercase text-red-700 mb-1">{subtitle}</p>
      <h2 className="text-4xl font-black text-gray-900 leading-tight">{title}</h2>
    </div>
  );

  type ImpactCounterProps = {
    number: string | number;
    label: string;
    icon: React.ElementType; // lowercase
  };
  
  const ImpactCounter: React.FC<ImpactCounterProps> = ({ number, label, icon: Icon }) => (
    <div className="p-4 text-center rounded-xl border-2 border-red-300 bg-red-50 shadow-md">
      <div className="w-16 h-16 mx-auto mb-2 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <p className="text-3xl font-black text-gray-900 leading-none">{number}</p>
      <p className="text-xs uppercase font-medium text-gray-600 mt-1">{label}</p>
    </div>
  );

  type PriceCardProps = {
    amount: number;
    description: string;
    highlight?: boolean;
  };

  const PriceCard: React.FC<PriceCardProps> = ({ amount, description, highlight = false }) => (
    <div className={`p-5 text-center rounded-xl border-2 transition h-full ${highlight ? 'bg-red-700 text-white border-red-700 shadow-xl scale-105' : 'bg-white text-red-700 border-red-300 hover:bg-red-50'}`}>
        <p className={`text-3xl font-black mb-1 ${highlight ? 'text-white' : 'text-red-700'}`}>Rs. {amount.toLocaleString()}</p>
        <p className={`text-sm font-semibold uppercase ${highlight ? 'text-red-300' : 'text-gray-600'}`}>{description}</p>
    </div>
  );


  // --- Main Component Structure ---

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto shadow-2xl overflow-hidden">

        {/* 1. EMOTIONAL HERO HEADER & MISSION STATEMENT */}
        <header className="relative bg-red-700 text-white pt-20 pb-16">
            <div className="container mx-auto px-16 text-center max-w-4xl">
                <Gift className="w-20 h-20 mx-auto mb-4 text-white" />
                <h1 className="text-7xl font-black mb-3 tracking-tight">WINTER DRIVE</h1>
                <p className="text-2xl font-light mb-8">
                    A consistent effort to bring warmth, dignity, and comfort to deserving individuals across Pakistan.
                </p>
                <div className="p-4 border-l-4 border-white/50 bg-white/10 rounded-lg max-w-xl mx-auto">
                    <p className="text-lg leading-relaxed font-medium">
                        Our Mission: To ensure that no child sleeps cold, no widow suffers, and no family endures winter without basic protection.
                    </p>
                </div>
            </div>
        </header>

        {/* 2. THEMATIC DIVIDER: WHY IT MATTERS */}
        <section className="px-16 py-12 bg-gray-50 text-center border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center">
                <Heart className="w-6 h-6 mr-3 text-red-700" /> Why the Winter Drive Matters
            </h3>
            <p className="text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                A warm jacket or a blanket becomes more than an item… It becomes safety, comfort, and relief. Your support ensures individuals can survive winter with **protection and dignity.**
            </p>
        </section>


        {/* 3. IMPACT COUNTERS (Visual Section) */}
        <section className="px-16 py-16 bg-white">
            <SectionHeader title="Our Impact & Progress" subtitle="Making a Difference" icon={Globe} />
            <div className="grid sm:grid-cols-4 gap-8">
                <ImpactCounter number={counts.items + '+'} label="Warm Clothing Items Distributed" icon={Shirt} />
                <ImpactCounter number={counts.kits + '+'} label="Winter Kits Provided" icon={Package} />
                <ImpactCounter number={counts.families + '+'} label="Families Supported in Rural Areas" icon={Home} />
                <ImpactCounter number={counts.widows + '+'} label="Widows & Orphans Served" icon={Heart} />
            </div>
        </section>

        {/* 4. KIT CONTENTS & EXECUTION (Split Section) */}
        <section className="px-16 py-16 bg-red-50 border-t-8 border-red-700">
            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Left Block: Kit Contents */}
                <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                        <List className="w-7 h-7 mr-3 text-red-700" /> What’s Inside a Winter Kit?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {kitItems.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-red-200">
                                <item.icon className="w-5 h-5 text-red-700 flex-shrink-0" />
                                <span className="text-md font-medium text-gray-800">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Block: Execution Plan */}
                <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                        <Compass className="w-7 h-7 mr-3 text-red-700" /> Execution Plan
                    </h3>
                    <div className="space-y-4">
                        {executionSteps.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-4 p-3 bg-white rounded-lg shadow-md">
                                <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-md font-bold flex-shrink-0">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">{idx + 1}. {step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        {/* 5. PRICING & LOCATION (Modular Strip) */}
        <section className="px-16 py-16 bg-white border-t border-gray-200">
            <SectionHeader title="How Supporters Contribute" subtitle="Every Contribution Brings Huge Comfort" icon={DollarSign} />
            
            <div className="grid sm:grid-cols-5 gap-6 mb-12">
                {pricingOptions.map((option, idx) => (
                    <PriceCard 
                        key={idx} 
                        amount={option.amount} 
                        description={option.description} 
                        highlight={option.highlight}
                    />
                ))}
            </div>

            <div className="text-center mt-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                    <MapPin className="w-6 h-6 mr-3 text-red-700" /> Where We Work
                </h4>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 font-medium">
                    {locations.map((loc, idx) => (
                        <span key={idx} className="px-4 py-2 bg-red-50 rounded-full border border-red-300 shadow-sm">
                            {loc}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. GALLERY & VIDEO CTA */}
        <section className="bg-red-700 text-white py-16 px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Block: Video Placeholder */}
                <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <Video className="w-20 h-20 text-red-300 animate-pulse" />
                        <span className="absolute text-white text-lg font-bold">Video Section Placeholder</span>
                    </div>
                </div>

                {/* Right Block: Gallery/Stories CTA */}
                <div>
                    <h3 className="text-3xl font-black mb-4 flex items-center"><Monitor className="w-8 h-8 mr-3 text-white" /> Winter Drive Gallery</h3>
                    <p className="text-lg font-light mb-6">View the powerful stories and visual evidence of your impact, including distribution photos and testimonials.</p>
                    <button className="bg-white text-red-700 px-6 py-3 rounded-full text-md font-bold hover:bg-gray-100 transition flex items-center">
                        <FileText className="w-5 h-5 mr-2" /> Stories of Warmth (Section Reserved)
                    </button>
                </div>
            </div>
        </section>

        {/* 7. FINAL CALL TO ACTION */}
        <footer className="py-12 px-16 text-center bg-gray-50">
            <h2 className="text-4xl font-black text-gray-900 mb-4 flex items-center justify-center"><Smile className="w-8 h-8 mr-3 text-red-700" /> Secure Warmth. Preserve Dignity.</h2>
            <p className="text-lg text-gray-600 mb-8">It takes just one act of kindness to change a life this winter.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-red-700 text-white px-8 py-4 rounded-full text-xl font-black hover:bg-red-600 transition shadow-xl flex items-center">
                    <Sun className="w-6 h-6 mr-3" /> SPONSOR WARMTH NOW
                </button>
                <button className="bg-white text-red-700 border-2 border-red-700 px-6 py-4 rounded-full text-lg font-bold hover:bg-red-100 transition shadow-md flex items-center">
                    View Full Gallery <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="bg-white text-gray-700 border border-gray-300 px-6 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-md flex items-center">
                    Explore More Projects
                </button>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default HumanizedImpactDashboard;