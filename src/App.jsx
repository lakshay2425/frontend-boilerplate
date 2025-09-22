import { useEffect, Suspense, lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(()=> import("./pages/Home.jsx"))
const ScrollToTop = lazy(()=> import('./utilis/scrollToTop.jsx'))
const NotFound = lazy(()=> import("./pages/NotFound.jsx"))
const Spinner = lazy(()=> import("./components/LoadingBar.jsx"))
const LoadingScreen = lazy(()=> import("./components/LoadingScreen.jsx"))

function App() {
  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
        preventDefault(e);
      }
    };

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    <LoadingScreen>
    <ScrollToTop/>
    <Suspense fallback={<Spinner message={"Loading Resources..."}/>}>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>
      </LoadingScreen>
    </>
  )
}

export default App