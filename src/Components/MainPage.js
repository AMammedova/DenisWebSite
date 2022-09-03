import React from 'react'
import "../Components/MainPage.css"
export default function MainPage() {
  return (
    <div>
        <div className="left__name_block">
          <p className="left__name-block-p">Daker Creative Studio</p>
        </div>
        <div className="right__name_block">
          © 2022 daker.website - All rights reserved
        </div>
        <div className="footer_block-social">
          <a href="#" className="footer_content-block-a"
            >.instagram
            <div id="borderbottom"></div>
          </a>
          <a href="#" class="footer_content-block-a"
            >.facebook
            <div id="borderbottom"></div>
          </a>
          <a href="#" className="footer_content-block-a"
            >.telegram
            <div id="borderbottom"></div>
          </a>
          <a href="#" className="footer_content-block-a"
            >.whatsapp
            <div id="borderbottom"></div>
          </a>
        </div>
    </div>
  )
}
