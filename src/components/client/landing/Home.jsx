import '../../../App.css';
import Hero from './Hero';
import { bookShelfImg } from '../../../assets';
import {
  RegisterNow,
  EBooks,
  MostViewedEBooks,
  Counter,
  OtherBooks,
  Footer,
  ContactDetails,
} from '../sections';

function Home() {
  return (
    <div className="bg-white">
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(16, 30, 71, 0.7), rgba(16, 30, 71, 0.7)), url(' +
            bookShelfImg +
            ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Hero />
      </div>
      <RegisterNow />
      <EBooks />
      <MostViewedEBooks />
      <Counter />
      <OtherBooks />
      <ContactDetails />
      <Footer />
    </div>
  );
}

export default Home;
