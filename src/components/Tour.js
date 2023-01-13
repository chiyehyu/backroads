//import imgTour1 from '../images/tour-1.jpeg';
//import imgTour2 from '../images/tour-2.jpeg';
//import imgTour3 from '../images/tour-3.jpeg';
//import imgTour4 from '../images/tour-4.jpeg';
//import imgTour5 from '../images/tour-5.jpeg';
//import imgTour6 from '../images/tour-6.jpeg';
import { tours } from '../data';
import SectionTitle from './SectionTitle';

const Tour = () => {
  return (
    <section className="section" id="tours">
      {SectionTitle('featured', 'tours')}

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour;

          return (
            <article className="tour-card" key={'tour' + id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tour;
