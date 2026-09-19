import { useState, useEffect } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import TechnologyCard from './components/TechnologyCard'
import YourStack from './components/YourStack'
function App() {
 const [technologies, setTechnologies] = useState([]);
const [stack, setStack] = useState([]);
const UserDatapromise = async () => {
  const response = await fetch('/tecnologies.json');
  const data =await response.json();
  return data;
 
}
const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };
  const handleRemove = (tech) => {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  useEffect(() => {
    UserDatapromise().then((data) => {
      setTechnologies(data);
    });
  }, []); 

  return (
    <div className="min-h-screen bg-white">
   <Navbar />
    <Banner />
     <main id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Explore the <span className="brand-text">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
    <Suspense fallback={<div>Loading...</div>}>
      
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard 
        key={tech.id} tech={tech}
        onAdd={handleAdd}
        onRemove={handleRemove}
        isAdded={stack.some((item) => item.id === tech.id)} />
      ))
      }

      </div>
      <YourStack 
      stack={stack} 
      onRemove={handleRemove} 
      onRemoveAll={handleRemoveAll} />
      </div>
    </Suspense>
    </main>
    <ToastContainer position="top-right" autoClose={2000} />
    
    </div>
  )
}
    

export default App
