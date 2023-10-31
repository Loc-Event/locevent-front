import './style.scss';
import { useSelector } from 'react-redux';

const IndexPage = () => {
  const hello = useSelector((state) => state.init.hello);
  return (
      <h1>{hello}</h1>
  );
};

export default IndexPage;
