import "./welcomeBanner.scss";

interface WelcomeBannerProps {
  text: string;
}

export const WelcomeBanner = ({ text }: WelcomeBannerProps) => {
  return (
    <div className="welcome-banner">
      <h2 className="welcome-banner__title">{text}</h2>
      <img
        className="welcome-banner__tooth"
        src="https://framerusercontent.com/images/lrihIsMBKBgzxKwcuCWrg0Pje0.png?width=320&height=498"
        alt="tooth"
      />
    </div>
  );
};
