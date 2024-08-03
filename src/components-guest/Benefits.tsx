
import imgBooks from '../images/homeGuestPage/img-books.svg';
import imgArticle from '../images/homeGuestPage/img-article.png';
import imgVideo from '../images/homeGuestPage/img-video.png';


const Benefits = () => {
  return (
    <div className="container mt-2">
<div className="featurette-divider text-center ">

<div className="row featurette pt-5">
      <div className="col-md-7 align-items-center order-first order-md-1">
        <h2 className="featurette-heading fw-normal lh-1 fw-bold">The best books.</h2>
        <p className="lead fw-normal">Thousands of personal development, <br /> professional, fiction or hobby titles.</p>
      </div>
      <div className="col-md-5">
      <img src={imgBooks} alt="books" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"/>
      </div>
</div>

<div className="featurette-divider mt-5">

    <div className="row featurette">
      <div className="col-md-7 align-items-center order-first order-md-1">
        <h2 className="featurette-heading fw-normal lh-1 fw-bold">Articles for your inspiration.</h2>
        <p className="lead fw-normal">Unlimited access to a vast collection of <br />award-winning articles written by renowned authors.</p>
      </div>
      <div className="col-md-5 order-md-2">
      <img src={imgArticle} alt="article" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"/>
      </div>
    </div>
</div>
    <div className="featurette-divider mt-5">

    <div className="row featurette">
      <div className="col-md-7 align-items-center order-first order-md-1">
        <h2 className="featurette-heading fw-normal lh-1 fw-bold">Exciting videos</h2>
        <p className="lead fw-normal">The best TED presentations or courses from top universities.</p>
      </div>
      <div className="col-md-5">
      <img src={imgVideo} alt="video" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"/>
      </div>
    </div>
</div>
</div>
</div>
)
  
}

export default Benefits



