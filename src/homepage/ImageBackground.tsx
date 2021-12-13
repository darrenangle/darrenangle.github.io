type FullBGImageProps = {
  url: string;
};
import './ImageBackground.css';
import defaultUrl from '../assets/images/cottage.jpg';

export const ImageBackground = (props: FullBGImageProps) => {
  const { url } = props;
  const dynamicStyles: React.CSSProperties = {
    backgroundImage: `url(${url || defaultUrl})`,
  };
  return <div className="ImageBackground" style={dynamicStyles}></div>;
};
