import Header from "../components/CommonComponents/Header/Header";
import Head from 'next/head'
import Home from "../components/Home/Home";
import ProductItem from "../components/Home/ProductItem/ProductItem";
import News from "../components/Home/News/News";
import Footer from "../components/CommonComponents/Footer/Footer";
import Nav from "../Router/Nav";
const IndexPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <Nav>
      <Home></Home>
      <ProductItem></ProductItem>
      <News></News>
    </Nav>
    <Footer></Footer>
  </>
)

export default IndexPage
