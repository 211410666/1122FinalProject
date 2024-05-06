import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import{HomeLayout_66,HomePage_66} from './pages'
import{DataStructPrefix,DataStructPostfix,NQueenQuestion,DataStructInfix,Signin} from './pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5 //5 minutes
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_66 />,
    children: [
      {
        index: true,
        element:<HomePage_66/>
      },
      {
        path:'datastructPrefix',
        element:<DataStructPrefix/>
      },
      {
        path:'datastructPostfix',
        element:<DataStructPostfix/>
      },
      {
        path:'nQueenQuestion',
        element:<NQueenQuestion/>
      },
      {
        path:'datastructInfix',
        element:<DataStructInfix/>
      },
      {
        path:'signin',
        element:<Signin/>
      },
    ],
  }
]);

const App_66 = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
  //   <BrowserRouter>
  //     <Routes>
  //       <Route exact path='/' element={<HomePage_66 />} />
  //       <Route path='/mid2Blog_66' element={<Mid2NodeBlog_66 />} />
  //       <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
  //       <Route path='/demoGetBlog_66' element={<SupaGetBlog_66 />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App_66;
