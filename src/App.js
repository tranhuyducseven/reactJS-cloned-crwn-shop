import Header from "components/Header";
import NotFound from "components/NotFound";
import Checkout from "features/Checkout";
import Home from "features/Home";
import Shop from "features/Shop";
import SignInSignUp from "features/SignInSignUp";
import { setCurrentUser } from "features/SignInSignUp/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { auth, createUserProfileDocument } from "firebaseConfig/firebase.utils";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  console.log("users of state: ", users);
  useEffect(() => {
    onAuthStateChanged(auth, async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        onSnapshot(userRef, (doc) => {
          // console.log("Current data: ", doc.data());
          // console.log('Current snapshot', doc)
          const action = setCurrentUser(
            {
              id: doc.id,
              ...doc.data()
            })
          dispatch(action);
          // setAuthUser({
          //   currentUser: {
          //     id: doc.id,
          //     ...doc.data()
          //   }
          // });
        });
      }
      else {
        const action = setCurrentUser(null);
        dispatch(action);

      }


    });
  }, [])



  // useEffect(() => {
  //   console.log('Auth user change', users);
  // }, [users])
  return (
    <div className="app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/checkout/*" element={<Checkout />} />
            <Route path="/sign-in/*" element={users.currentUser ? <Navigate replace to="/" /> : <SignInSignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
