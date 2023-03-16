import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">back to Home page</Link>
      <h2>Not Found Page</h2>
      <img
        src="data:image/png;base64,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"
        //src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T1435A675PA4397PT10X30Y2D145113680W8987H8987/views/1,width=550,height=550,appearanceId=675,backgroundColor=4BA8CC,noPt=true/popcorn-pop-art-matlada.jpg"
        alt="Not Found "
      />
    </div>
  );
};
export default NotFoundPage;
