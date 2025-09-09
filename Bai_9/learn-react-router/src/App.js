import './App.css';
import AllRoutes from './components/AllRoute';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Error404 from './pages/Error404';
// import LayoutDefalt from './layout/LayoutDefault';
// import Blog from './pages/Blog';
// import BlogNew from './pages/Blog/BlogNew';
// import BlogRelated from './pages/Blog/BlogRelated';
// import BlogAll from './pages/Blog/BlogAll';
// import BlogDetail from './pages/Blog/BlogDetail';
// import InforUser from './pages/InforUser';
// import Login from './pages/Login';
// import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <AllRoutes/>
    // <Routes>
    //   <Route path='/' element={<LayoutDefalt />}>
    //     <Route index element={<Home />} />
    //     <Route path='about' element={<About />} />
    //     <Route path='contact' element={<Contact />} />
    //     <Route path='blog' element={<Blog />}>
    //       <Route index element={<BlogAll />} />
    //       <Route path='news' element={<BlogNew />} />
    //       <Route path='blogRelated' element={<BlogRelated />} />
    //       <Route path=':id' element={<BlogDetail />} />
    //     </Route>
    //     <Route path='login' element={<Login />} />
    //     <Route path='info-user' element={<InforUser />} />
    //     <Route element={<PrivateRoutes />}></Route>
    //   </Route>


    //   <Route path='*' element={<Error404 />} />
    // </Routes>
  );
}

export default App;
