"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import FooterTOp from "../img/border-border.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./careers.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Careers() {
  return (
    <div className="inner-page-main careers-main-page">
      <main>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Explore current job openings at Intelli Platforms - Software Developers and Network Engineers. Join a global Managed IT Services Provider."
          />
          <link
            rel="canonical"
            href="https://www.intelliplatforms.com/careers/"
          />
        </Head>

        <header>
          <Header />
        </header>

        <div className={`careers-page ${raleway.className}`}>
          <section className="careers-hero">
            <div className="careers-hero-in">
              <div className="careers-wrap">
              <div className="careers-crumbs">
                <Link href="/">Home</Link> &nbsp;/&nbsp; Careers
              </div>
              <h1>
                Build What&apos;s Next.
                <br />
                <span className="careers-teal">
                  Careers at Intelli Platforms.
                </span>
              </h1>
              <p>
                We&apos;re a global, full-service Managed IT Services Provider
                with over a decade of experience - and we&apos;re growing.
                Explore our current openings and help us deliver intelligent IT
                solutions to enterprises worldwide.
              </p>
              <div className="careers-hero-stats">
                <div>
                  <div className="careers-hs-n">10+</div>
                  <div className="careers-hs-l">Years of Expertise</div>
                </div>
                <div>
                  <div className="careers-hs-n">Global</div>
                  <div className="careers-hs-l">Reach &amp; Results</div>
                </div>
                <div>
                  <div className="careers-hs-n">0</div>
                  <div className="careers-hs-l">Open Roles</div>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="careers-section" id="openings">
            <div className="careers-wrap">
              <div className="careers-sec-eyebrow">Job Openings</div>
              <h2 className="careers-sec-title">Current Opportunities</h2>
              <p className="careers-sec-sub">
                There are no open roles at this time. Check back soon, or email
                your resume to stay on our radar.
              </p>
              {/* No openings right now — uncomment when recruiting:
              <div className="careers-jobs">
                <article className="careers-job" id="software-developers">
                  <div className="careers-job-head">
                    <div>
                      <div className="careers-job-eyebrow">Now Hiring</div>
                      <h3 className="careers-job-title">Software Developers</h3>
                    </div>
                    <a
                      className="careers-btn careers-btn-teal"
                      href="mailto:hr@inteliplatforms.com?subject=Application%20-%20Software%20Developers"
                    >
                      Apply Now
                    </a>
                  </div>
                  <div className="careers-job-meta">
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Location</span>
                      West Windsor Township, NJ &amp; various unanticipated U.S.
                      locations
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Education</span>
                      Master&apos;s degree in Science, Technology, or
                      Engineering (any)
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Type</span>
                      Full-time
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Openings</span>
                      Multiple
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Experience</span>
                      0 Year
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Posted</span>
                      June 15, 2026
                    </div>
                  </div>
                  <div className="careers-job-body">
                    <h4 className="careers-jb-h">Job Description</h4>
                    <p>
                      Involve in all phases of Software Development Life Cycle
                      (SDLC). Design, develop, and configure software
                      applications using Java, JavaScript, HTML, CSS, ReactJS,
                      jQuery, and Bootstrap. Prepare technical design
                      specifications based on functional requirements and
                      analysis using Tomcat and WebLogic. Develop and maintain
                      operational and system level documentation. Write SQL
                      queries to load data to the database. Perform testing and
                      fix defects. Master&apos;s degree in Science, Technology,
                      or Engineering (any) is required. Work location: West
                      Windsor Township, NJ and various unanticipated locations
                      throughout the U.S.
                    </p>
                  </div>
                </article>

                <article className="careers-job" id="network-engineers">
                  <div className="careers-job-head">
                    <div>
                      <div className="careers-job-eyebrow">Now Hiring</div>
                      <h3 className="careers-job-title">Network Engineers</h3>
                    </div>
                    <a
                      className="careers-btn careers-btn-teal"
                      href="mailto:hr@inteliplatforms.com?subject=Application%20-%20Network%20Engineers"
                    >
                      Apply Now
                    </a>
                  </div>
                  <div className="careers-job-meta">
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Location</span>
                      West Windsor Township, NJ &amp; various unanticipated U.S.
                      locations
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Education</span>
                      Master&apos;s degree in Science, Technology, or
                      Engineering (any)
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Type</span>
                      Full-time
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Industry</span>
                      IT Managed Services
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Openings</span>
                      Multiple
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Experience</span>
                      0 Year
                    </div>
                    <div className="careers-job-meta-item">
                      <span className="careers-meta-label">Posted</span>
                      June 15, 2026
                    </div>
                  </div>
                  <div className="careers-job-body">
                    <h4 className="careers-jb-h">Job Description</h4>
                    <p>
                      Develop, maintain and configure the entire network layout
                      based on requirements. Implement pre-approved network
                      designs and administer existing infrastructure based on
                      defined technical requirements and approved
                      specifications. The role does not involve originating
                      network architecture. Configure network devices, maintain
                      IP address schemes, and support ongoing operations within
                      established environments. Network environments include
                      enterprise LAN/WAN and hybrid infrastructure supporting
                      clients in the information technology services, financial
                      services, and healthcare industries across the United
                      States. Configure and manage firewalls, routers and
                      switches using Wireshark, Active Directory, SNMP, DHCP,
                      OSPF and EIGRP. Applying firewall rules on Cisco ASA,
                      configuring routing protocols (OSPF, EIGRP) per approved
                      design documents, managing DHCP and SNMP policies, and
                      performing packet analysis using Wireshark for
                      diagnostics. Active Directory is used for network access
                      policy enforcement. Infoblox is used for DNS/DHCP/IPAM
                      management. Escalation to senior engineers occurs for
                      non-routine issues. Automate network processes using
                      Python and Bash scripting languages, Unix and Linux.
                      Automated tasks include scheduled configuration backups,
                      SNMP-based monitoring alerts, and routine compliance
                      validation checks, to reduce manual workload and improve
                      consistency across client environments. Perform system
                      upgrades including service packs, patches, hot fixes, and
                      security configurations using Infoblox and Cisco ASA, by
                      following established change management procedures and
                      approved change tickets. Execute upgrade tasks as
                      directed, document outcomes, and report results to
                      project managers. Upgrade sequencing and risk assessment
                      decisions are made by senior staff. The employee does not
                      supervise other personnel. Industry and Field: Information
                      technology managed services, supporting enterprise clients
                      in financial services, healthcare, and commercial sectors.
                      Master&apos;s degree in Science, Technology, or
                      Engineering (any) is required. Work location: West
                      Windsor Township, NJ and various unanticipated locations
                      throughout the U.S.
                    </p>
                  </div>
                </article>
              </div>
              */}
            </div>
          </section>

          <section className="careers-section careers-apply">
            <div className="careers-wrap">
              <div className="careers-apply-card">
                <div className="careers-apply-left">
                  <h2>How to Apply</h2>
                  <p>
                    Think you&apos;re a fit? Email your resume to our HR
                    department and reference the role you&apos;re applying for.
                  </p>
                </div>
                <div className="careers-apply-right">
                  <a
                    className="careers-btn careers-btn-teal"
                    href="mailto:hr@inteliplatforms.com"
                  >
                    Email Your Resume
                  </a>
                </div>
              </div>
              <p className="careers-apply-note">
                Email resume to HR Dept., Inteli Platforms, Inc., at{" "}
                <a href="mailto:hr@inteliplatforms.com">hr@inteliplatforms.com</a>
                .
              </p>
              <div className="careers-referral">
                <div className="careers-referral-title">
                  Referral Award · $1,000.00
                </div>
                <p>
                  Should the candidate accept employment with Inteli Platforms,
                  Inc., the referring employee will be eligible to receive an
                  award of $1,000.00 for the successful referral.
                </p>
              </div>
              <p className="careers-eeo">
                Intelli Platforms is an equal opportunity employer. All
                qualified applicants will receive consideration for employment
                without regard to race, color, religion, sex, national origin,
                disability, or protected veteran status.
              </p>
            </div>
          </section>
        </div>

        <section className="foot-top-sectto">
          <Image src={FooterTOp} alt="" />
          <div className="container">
            <div className="footer-top-heading">
              <h3>
                Let&apos;s build what&apos;s next. <span>Together.</span>
              </h3>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
