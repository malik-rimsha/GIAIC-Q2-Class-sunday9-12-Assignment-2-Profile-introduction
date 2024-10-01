import Image from "./image.jpg";

export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="greenColor">Rimsha</span>
          <br />I am an IT student at the Governor's House, specializing in Generative AI, Metaverse, and Web3.
          With a Bachelor of Arts degree, I have a passion for learning IT technologies. Currently, I am 
          focused on mastering Next.js, having already completed TypeScript and front-end web development basics
        </div>
        <div className="imageContainer">
          <img src= "/image.jpg" alt="Rimsha's Image" />
        </div>
      </div>



    </>
  );
}