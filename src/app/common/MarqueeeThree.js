import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// === Images ===
import TeamSevenMNB from "../img/Preeta.png";
import TeamSeven from "../img/ravi.jpg";
import TeamSixx from "../img/Amit.png";
import Teamone from "../img/Group 277@2x.png";
import TeamTwo from "../img/Group 282.png";
import TeamThree from "../img/Group 281.png";
import TeamFour from "../img/Group 279.png";
import TeamFive from "../img/Khushal.png";
import TeamSix from "../img/Group 284.png";

export default function TestimonialSlide() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      img: Teamone,
      name: "Rahul Bajaj",
      designation: "Chairman of the Board",
      description:
        "Rahul is an entrepreneur, investor, and technology advisor with a distinguished record of building and scaling global businesses from inception to successful exits. A strategic and results-driven leader, he has held key roles at IBM, Barnes & Noble, and HSBC, driving cross-functional growth through mergers, integrations, and acquisitions. Rahul is the Co-founder and former CEO of Data Glove, Inc., and a Co-founder of OpsArc, Inc. and Avistos, LLC.",
    },
    {
      id: 2,
      img: TeamTwo,
      name: "Venkata Dhaniyala",
      designation: "Chief Advisor",
      description:
        "Venkata brings more than 18 years of experience in the IT industry and a strong background in finance. He has served as a BI architect for Fortune 100 companies across pharmaceuticals, finance, investment banking, and life sciences. As an entrepreneur, he has founded and led several mid-size businesses, including Comtekglobal, Inc., Intelli Platforms, Inc., and iOasiZ, Inc., partnering with major U.S. enterprises as a technology and resource enabler.",
    },
    {
      id: 3,
      img: TeamThree,
      name: "Ross Mistretta",
      designation: "Chief Technology & Delivery Officer",
      description:
        "Ross is a seasoned IT versatilist with deep expertise spanning operations, service quality, and software engineering. With extensive experience across both corporate and consulting domains, he brings a rare combination of technical, resource, and financial acumen to complex IT initiatives. As a delivery leader, Ross has built high-performing teams that deliver operational excellence and measurable outcomes for global clients.",
    },
    {
      id: 4,
      img: TeamFour,
      name: "Anirban Ghosh",
      designation: "Global Head of Growth and Strategy",
      description:
        "Anirban brings nearly two decades of experience in driving business expansion, revenue growth, and market positioning across global markets. With strong analytical and strategic capabilities, he excels at developing innovative growth models, forging strategic partnerships, and leading cross-functional teams to deliver transformative results. Anirban is a visionary leader with a proven track record of creating sustainable, high-growth ecosystems.",
    },
    {
      id: 5,
      img: TeamFive,
      name: "Kushal Bothra",
      designation: "Solutions Architect, Observability Business Unit",
      description:
        "Kushal is an accomplished technology leader with over 15 years of experience in data analytics, observability, and financial technology. He has led multiple large-scale integrations, mergers, and analytics initiatives, managing revenue streams exceeding $100 million. His expertise lies in designing intelligent observability solutions and driving operational efficiency through data-driven insights.",
    },
    {
      id: 6,
      img: TeamSix,
      name: "Deeptanshu J. Bansal",
      designation: "Chief Marketing Officer",
      description:
        "Deeptanshu is an integrated marketing strategist with over 18 years of experience in building brands and driving business growth across global markets. He specializes in creating data-driven marketing ecosystems that deliver measurable ROI and long-term brand equity. Deeptanshu holds an MBA in Marketing and Finance from the Simon School of Business, University of Rochester, NY, and has co-founded multiple ventures, including Nu Stock Images, Atmaya AI, and One Eyed Jack.",
    },
    {
      id: 7,
      img: TeamSixx,
      name: "Amit Gupta",
      designation: "Legal Advisor",
      description:
        "With over three decades of global experience, Amit is a trusted advisor in corporate law, risk, and compliance. His leadership roles at VFS Global and Teleperformance have been defined by his ability to structure complex transactions, lead post-acquisition integrations, and establish robust compliance frameworks across more than 90 countries. Amit is recognized for his expertise in navigating multinational environments and implementing sound governance practices.",
    },
    {
      id: 8,
      img: TeamSeven,
      name: "Ravi Nimmagadda",
      designation: "Head of BFSI",
      description:
        "Ravi serves as the Head of BFSI at Intelli Platforms, bringing over 32 years of experience across financial services, healthcare, and life sciences. A seasoned technology and operations leader, he has driven large-scale digital transformation programs and regulatory compliance initiatives for leading global firms including Cognizant, Wipro, Infosys, Tech Mahindra, and Coforge. At Intelli, Ravi leads the BFSI practice by integrating strategy, operations, and innovation to accelerate client growth. He holds an MS in Robotics from IIT Chennai and is based in Princeton, NJ.",
    },
       {
      id: 9,
      img: TeamSevenMNB,
      name: "Preeta Mohanty",
      designation: "Chief People Officer",
      description:
        "Preeta is a people-first strategist with extensive experience in building and scaling organizations through culture, capability, and leadership transformation. She has led People and Talent functions across fast-growing enterprises, driving impact through organizational design and leadership alignment. Her previous roles at Narayana One Health, Tata Consulting Engineers, Amazon, and Tata Communications reflect her expertise in workforce expansion, performance frameworks, and culture integration across global teams.",
    },
  ];

  return (
    <>
      <Marquee pauseOnHover={true} loop={10} speed={40}>
        <div className="intelli_leader_team_row">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`intelli_leader_team_col ${
                index % 2 === 0
                  ? "intelli_leader_team_upper"
                  : "intelli_leader_team_bottom"
              }`}
              onClick={() => setSelectedMember(member)}
              style={{ cursor: "pointer" }}
            >
              <Image src={member.img} alt={member.name} />
              <div className="intelli_leader_team_info">
                <p className="intelli_leader_team_name">{member.name}</p>
                <p className="intelli_leader_team_designation">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* === Popup Modal === */}
      {selectedMember && (
        <div className="team_popup_overlay" onClick={() => setSelectedMember(null)}>
          <div
            className="team_popup"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="popup_close" onClick={() => setSelectedMember(null)}>
              ✕
            </button>

            <div className="team_popup_content">
              {/* Left Image Section */}
              <div className="popup_left">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="popup_image"
                />
              </div>

              {/* Right Content Section */}
              <div className="popup_right">
                <h3>{selectedMember.name}</h3>
                <p className="popup_designation">{selectedMember.designation}</p>
                <p className="popup_description">{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Styling === */}
      <style jsx>{`
        .team_popup_overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .team_popup {
          background: #fff;
          border-radius: 16px;
          max-width: 700px;
          width: 90%;
          padding: 40px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.3s ease;
        }

        .team_popup_content {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .popup_left {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .popup_right {
          flex: 2;
        }

        .popup_close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
        }

        .popup_image {
          border-radius: 10px;
          width: 180px;
          height: 180px;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .popup_right h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 6px;
        color: #01C591;;
        }

        .popup_designation {
          font-weight: 600;
          color: #555;
          margin-bottom: 15px;
        }

        .popup_description {
          color: #444;
          line-height: 1.6;
          font-size: 15px;
        }

        @media (max-width: 600px) {
          .team_popup_content {
            flex-direction: column;
            text-align: center;
          }
          .popup_left {
            margin-bottom: 20px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
