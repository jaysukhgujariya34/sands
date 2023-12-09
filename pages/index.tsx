import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./haeder/index";
import Slider from "./slider/index";
import Product from "./product/index";
import ProductMonth from "./product/product_month";
import Category from "./category/index";
import FeedBack from "./feedback/index";
import AllProduct from "./allproduct";
import NewProduct from "./newproduct";
import Newsletter from "./newsletter";
import Service from "./service";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <Product />
      <ProductMonth />
      <Category />
      <FeedBack />
      <AllProduct />
      <NewProduct />
      <Newsletter />
      <Service />
      <Footer />
    </div>
  );
}
