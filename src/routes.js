import App from './App';

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
  // {
  //   name: "Profile",
  //   path: "profile",
  //   response: () => {
  //     return {
  //       body: Profile
  //     };
  //   }
  // },
  // {
  //   name: "Add Participant",
  //   path: "add",
  //   response: () => {
  //     return {
  //       body: AddParticipant
  //     };
  //   }
  // },
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
