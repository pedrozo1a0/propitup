
import './App.css';
import { PersonCard } from './PersonCard';

function App() {
  return (
    <section className='tarjetas'>
    <PersonCard nombre="Jane" apellido="Doe" edad={45} hair="Black" />
    <PersonCard nombre="John" apellido="Smith" edad={88} hair="Brown" />
    <PersonCard nombre="Millard" apellido="Fillmore" edad={50} hair="Brown" />
    <PersonCard nombre="Maria" apellido="Smith" edad={62} hair="Brown" />
    </section>
  );
}

export default App;
