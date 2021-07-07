const IntroductionAnimation = () => {
  return (
    <div className="animated-text">
      <div className="animated-text-desc">Fullstack developer</div>
      <div className="animated-text-desc">Web designer</div>
      <div className="animated-text-desc">Medical imaging</div>
      <div className="animated-text-desc">Fullstack developer</div>
    </div>
  );
};

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction-title">
        <h1>Hello World!</h1>
      </div>
      <div className="intro-content">
        <div className="intro-wrapper">
          I am <IntroductionAnimation />
        </div>
      </div>
    </div>
  );
}
