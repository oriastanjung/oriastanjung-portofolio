import {useRouter} from "next/router";
import Taskbar from "../Taskbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "../Head";

function Layout(props) {
  const router = useRouter();



  return (
    <div className="background-img" onClick={() => router.push('/')}>
      <Head></Head>
      <Navbar></Navbar>
      {props.children}

      <Taskbar></Taskbar>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
