import SectionTitle from './SectionTitle';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      {SectionTitle('our', 'services')}

      <div className="section-center services-center">
        {services.map((sv) => {
          return (
            <article className="service" key={'service' + sv.id}>
              <span className="service-icon">
                <i className={sv.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{sv.title}</h4>
                <p className="service-text">{sv.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
