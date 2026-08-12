"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Banner from "../img/bfsi-banner.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BfsiSubPage({ title }) {
  return (
    <div className="network-page bfsi-sub-page">
      <main>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content={`${title} | Intelli Platforms BFSI`} />
        </Head>

        <header>
          <Header />
        </header>

        <section className="home-banner intelli_buit_sec_new nb">
          <div className="container">
            <div className="home-banner-middle">
              <Image src={Banner} alt="" />
              <div className="bfsi-sub-page-heading">
                <h1 className="intelli_seconf_banner_first_head">{title}</h1>
              </div>
              <div className="home-banner-middle-middle">
                <h2 className="intelli_seconf_banner_second_head">BFSI</h2>
                <p className="intelli_seconf_banner_first_para">
                  Driving modernization, resilience, and innovation across
                  financial services ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
