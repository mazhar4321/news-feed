
import './App.css';
import Avatar from './components/Avatar';
import Card from './components/Card';
import NavigationCard from './components/NavigationCard';
import PostFormCards from './components/PostFormCards';
import PostFormData from './components/PostFormData';

function App() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
     {/* <div className='w-1/3'>
      <NavigationCard/>
     </div> */}
     <div className='grow'>
      <PostFormCards/>
      {/* <PostFormData/> */}
     </div>
    </div>
  );
}

export default App;
