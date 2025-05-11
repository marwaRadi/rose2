import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
import {services} from '../data/serviceData'
function OurServiceContent() {
  return (
    <section className="background-light p-10  md:my-20 my-6  ">
      <div className="fixed-size !mb-0 grid grid-cols-1 gap-8 items-center sm:grid-cols-2 md:justify-between md:grid-cols-4">
        {services.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center lg:text-start gap-2 lg:flex-row"
          >
            <CircleBgIcon>
              <item.icon />
            </CircleBgIcon>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServiceContent;
