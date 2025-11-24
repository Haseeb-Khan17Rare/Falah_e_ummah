import VicePresidentMsg from "../VicePresidentMsg/VicePresidentMsg"; 
const PresidentMsg = () => {
  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>President Message</h1>
      <img 
        src="https://via.placeholder.com/200x200?text=President" 
        alt="President" 
        style={{ borderRadius: "10px", margin: "20px 0" }}
      />
      <p>Hello! I am the President. Welcome to our website!</p>
    </div>
    <VicePresidentMsg/>
    </>
  );
};

export default PresidentMsg;
