import Home from '../pages/home/Home';
import Explore from '../pages/Explore';
import Notifications from '../pages/Notifications';
import Messages from 'pages/Messages';
import Layout from '../layout/Layout';
import Bookmarks from 'pages/Bookmarks';
import Lists from 'pages/Lists';
import Jobs from 'pages/Jobs';
import Communities from 'pages/Communities';
import Premium from 'pages/Premium';
import Profile from 'pages/Profile';
import PostModal from 'features/modals/components/PostModal';
import { useNavigate } from 'react-router-dom';
import PostStatus from 'components/posts/postStatus/PostStatus';

export const MyRoutes = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    const previousRoute = localStorage.getItem('previousRoute');
    if (previousRoute) {
      navigate(previousRoute);
    } else {
      navigate('/home');
    }
  };

  const routesData = [
    {
      path: '/',
      component: <Layout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'explore', element: <Explore /> },
        { path: 'notifications', element: <Notifications /> },
        { path: 'messages', element: <Messages /> },
        { path: 'lists', element: <Lists /> },
        { path: 'bookmarks', element: <Bookmarks /> },
        { path: 'jobs', element: <Jobs /> },
        { path: 'communities', element: <Communities /> },
        { path: 'premium', element: <Premium /> },
        { path: ':username', element: <Profile /> },
        { path: `:username/status/:postId`, element: <PostStatus /> },
        {
          path: 'compose/post',
          element: <PostModal handleClose={handleClose} />,
        },
      ],
    },
  ];
  return routesData;
};
