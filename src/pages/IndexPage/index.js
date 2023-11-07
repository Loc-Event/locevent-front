import './styles.scss';
import { useSelector } from 'react-redux';

const IndexPage = () => {
  return (
    <>
        <div className="div-button">
            <button type="button" className="btn-main">Gaming Room</button>
            <button type="button" className="btn-main">Cinema Maison</button>
            <button type="button" className="btn-main">Matériel de fête</button>
        </div>
      </>
  );
};

export default IndexPage;
