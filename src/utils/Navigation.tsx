import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const WithRouter = (Component: React.ComponentType<any>) => {
  return (props: Props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};
