import App from './App';
// import Participants from './components/Participants';
import Profile from './components/Profile';

import NotFound from './components/NotFound';


const routes = [
  {
    name: "Home",
    path: "",
    response: () => {
      return {
        body: App
      };
    }
  },
  {
    name: "Profile",
    path: "profile",
    response: () => {
      return {
        body: Profile
      };
    }
  },
  // {
  //   name: "Name",
  //   path: "path",
  //   response: () => {
  //     return {
  //       body: Participants
  //     };
  //   },
    // children: [
    //   {
    //     name: "Name",
    //     path: ":path",
    //     response: () => {
    //       return {
    //         body: Component
    //       };
    //     }
    //   }
    // ]
  // },
  {
    name: "NotFound",
    path: "(.*)",
    response: () => {
      return {
        body: NotFound
      };
    },
    navIgnore: true
  }
];

export default routes;
