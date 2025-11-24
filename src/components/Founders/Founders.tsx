import PresidentMsg from "../PresidentMsg/PresidentMsg";

const founders = [
    { name: "Founder 1", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Founder 2", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Founder 3", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  ];
  
  const FounderMembers = () => {
    return (
      <>
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">Founder Members</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {founders.map((f, i) => (
            <div key={i}>
              <img src={f.img} className="w-full h-60 object-cover rounded-lg" />
              <p className="mt-2 font-semibold">{f.name}</p>
            </div>
          ))}
        </div>
      </div>
      <PresidentMsg/>
      </>
    );
  };
  
  export default FounderMembers;
  