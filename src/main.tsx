import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NodeInfo from './well_known/NodeInfo.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
		element: <App />
  },
  {
    path: '/waitlist',
		element: <App />
  },
	{
		path: '/nodeinfo',
		element: <NodeInfo />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
