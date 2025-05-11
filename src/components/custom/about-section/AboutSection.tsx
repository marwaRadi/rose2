import AboutContent from "./components/AboutContent";
import AboutImages from "./components/AboutImages";

function AboutSection() {
  return (
    <section className="fixed-size">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-3 ">
        {/* images */}
        <AboutImages/>
        {/* content */}
        <AboutContent />
      </div>
    </section>
  );
}

export default AboutSection;
