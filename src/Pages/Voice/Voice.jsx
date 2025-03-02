import React from "react";
import ContentImageBlock from "../../CommonComponent/ContentImageBlock";
import Boxcontainer from "../../CommonComponent/Boxconatainer";
import { voiceBox } from "../../Constant/Voice";
import voice_hero from "../../assets/VoiceImage/lottie/Services-Voice-Hero.json";

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Voice Service Provider In India ",
      heading:
        "Integrate and tailor voice calls within various applications using the Voice API.",
      content:
        "Quickly provision and deploy custom voice solutions with flexible APIs on the most extensive global network. Tailor voice solutions to your needs.",
      secheading: "IVR | Contact Center Solution | Voice OBD | Call Masking",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Explore Our Other Solutions",
      para: "",
      carddata: voiceBox,
    },
  },
];

const Voice = () => {
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

export default Voice;
