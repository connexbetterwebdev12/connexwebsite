import React from "react";
import ContentImageBlock from "../../CommonComponent/ContentImageBlock";
import Boxcontainer from "../../CommonComponent/Boxconatainer";
import { Accordian } from "../../CommonComponent/Accordian";
import { Button } from "../../CommonComponent/Button";
import LeftRightBLock from "../../CommonComponent/LeftRightBLock";
import CommonHeading from "../../CommonComponent/CommonHeading";
import Scrollcomponent from "../../CommonComponent/Scrollcomponent";
import FAQ from "../../CommonComponent/FAQ";
import ivrbigimage from "../../assets/VoiceImage/IMAGE/asdcqdfcaeqsdqa.webp";
import {
  ivrBox,
  ivrziczac,
  voiceBox,
  IVRFAQ,
  IVRDLT,
  IVRcroll,
} from "../../Constant/Voice";
import voice_hero from "../../assets/VoiceImage/lottie/Services-Voice-Hero.json";
import Agirlwithtext from "../../CommonComponent/Agirlwithtext";

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Best IVR Service Provider In India",
      heading: "Interactive Voice Response System (IVR) for your Business",
      content:
        "Discover the best Interactive Voice Response (IVR) system in India, designed to streamline customer interactions and improve efficiency for businesses of all sizes with our tailored IVR solutions.",
      secheading:
        "Integrated Voice Response | IVR Software | Cloud IVR | Hosted IVR",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "What are different types of IVR System?",
      para: "",
      carddata: ivrBox,
    },
  },
  {
    component: CommonHeading,
    props: {
      h: "Features of IVR System for Enhanced Customer Engagement",
      p: "Our IVR as a Service offers businesses a comprehensive solution to automate customer interactions and improve service delivery. With our advanced IVR call centre solutions.",
    },
  },

  {
    component: LeftRightBLock,
    props: { data: ivrziczac },
  },

  {
    component: Boxcontainer,
    props: {
      heading: "Explore Our Other Solutions",
      para: "",
      carddata: voiceBox,
    },
  },

  {
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center">
        <CommonHeading h="Advanced Features of Our IVR Solutions" p="" />

        <Scrollcomponent data={IVRcroll} />
      </div>
    ),
  },
  {
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <div>
          {IVRDLT.map((ele, ind) => (
            <Accordian val={ele} key={ind}></Accordian>
          ))}
        </div>
        <div className="">
          <div className="bg-blue-50  p-6 rounded-lg shadow-md flex flex-col gap-4  ">
            <div className="border-b-2 border-blue-400 pb-2">
              <h1 className="text-blue-600 text-2xl font-bold">
                Connex Better Smart IVR Solution for Enterprises
              </h1>
            </div>
            <p className="text-gray-700 mt-4">
              Do you have any additional questions you would like to ask?
            </p>
            <Button name="Contact Now" link="/Contact"></Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    custom: () => (
      <div className="container">
        <CommonHeading h="What are the significant use cases of IVR?" p="" />
        <img
          src={ivrbigimage}
          alt="image of Authentication"
          loading="lozy"
        ></img>
      </div>
    ),
  },
  {
    component: FAQ,
    props: { data: IVRFAQ },
  },
  {
    component: Agirlwithtext,
  },
];

const IVR = () => {
  return (
    <section>
      {sections.map((section, index) =>
        section.custom ? (
          <React.Fragment key={index}>{section.custom()}</React.Fragment>
        ) : (
          <div key={index} className="container">
            <section.component {...section.props} />
          </div>
        )
      )}
    </section>
  );
};

export default IVR;
