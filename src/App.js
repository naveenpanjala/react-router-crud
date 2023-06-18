import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import GalleryContainer from "./components/GalleryContainer";
import Img1 from "./components/imagelist/Img1";
import Img2 from "./components/imagelist/Img2";
import Img3 from "./components/imagelist/Img3";
import Img4 from "./components/imagelist/Img4";
import Img5 from "./components/imagelist/Img5";
import Img6 from "./components/imagelist/Img6";
import PersonContainer from "./components/personlist/PersonContainer";
import Person1 from "./components/personlist/Person1";
import Person2 from "./components/personlist/Person2";
import Person3 from "./components/personlist/Person3";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import UserListing from "./components/UserListing";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="gallery" element={<GalleryContainer />}>
          <Route index element={<Gallery />} />

          <Route path="1/person" element={<PersonContainer />}>
            <Route index element={<Img1 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>

          <Route path="2/person" element={<PersonContainer />}>
            <Route index element={<Img2 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>

          <Route path="3/person" element={<PersonContainer />}>
            <Route index element={<Img3 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>

          <Route path="4/person" element={<PersonContainer />}>
            <Route index element={<Img4 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>

          <Route path="5/person" element={<PersonContainer />}>
            <Route index element={<Img5 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>

          <Route path="6/person" element={<PersonContainer />}>
            <Route index element={<Img6 />} />
            <Route path="1" element={<Person1 />} />
            <Route path="2" element={<Person2 />} />
            <Route path="3" element={<Person3 />} />
          </Route>
        </Route>

        <Route path="user-listing" element={<UserListing />}></Route>
        <Route path="add-user" element={<AddUser />}></Route>
        <Route path="add-user/:userId" element={<AddUser />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
