type FullBGImageProps = {
  url: string;
};
import "./ImageBackground.css";
export const ImageBackground = (props: FullBGImageProps) => {
  const { url } = props;
  const dynamicStyles: React.CSSProperties = {
    backgroundImage: `url(${
      url ||
      "https://images.unsplash.com/photo-1638225985946-11f1770e24f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
    })`,
  };
  return <div className="ImageBackground" style={dynamicStyles}></div>;
};
