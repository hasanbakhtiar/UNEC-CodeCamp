import React from 'react'
import StaticLang from '../utils/StaticLang'

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis"><StaticLang en={"Ecommerce Project"} az={"Eticarət Layihəsi"}/></h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-dark btn-lg px-4">Start</button>
        </div>
      </div>
    </div>

  )
}

export default Home