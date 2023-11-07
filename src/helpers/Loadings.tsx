import ReactLoading, { LoadingType } from 'react-loading';

interface LoadingsProps {
    type: LoadingType;
    color: string;
    }


const Loadings = ({type, color}: LoadingsProps) => {
  return <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />;
};

export { Loadings };
