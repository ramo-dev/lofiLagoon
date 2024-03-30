import './PageNotFoundStyles.css'
import sadMac from '../../assets/5h4drj.jpg'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
      <div className="error404">
        <figure>
          <div classNameName="sad-mac">
            <img src={sadMac} alt="" />
          </div>
          <figcaption>
            <span className="sr-text">Error 404: Not Found</span>
            <span className="e"></span>
            <span className="r"></span>
            <span className="r"></span>
            <span className="o"></span>
            <span className="r"></span>
            <span className="_4"></span>
            <span className="_0"></span>
            <span className="_4"></span>
            <span className="n"></span>
            <span className="o"></span>
            <span className="t"></span>
            <span className="f"></span>
            <span className="o"></span>
            <span className="u"></span>
            <span className="n"></span>
            <span className="d"></span>
          </figcaption>
        </figure>
        <Link to="/">
          <button className="btn">Go back Home</button>
        </Link>
      </div>
    );
}
 
export default Error404;