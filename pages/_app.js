import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { Loading, Login } from "../components";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  console.log(user);

  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, "users", user?.uid),
          {
            email: user?.email,
            lastSeen: serverTimestamp(),
            photoURL: user?.photoURL,
          },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
    };

    if (user) {
      setUserInDb();
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
