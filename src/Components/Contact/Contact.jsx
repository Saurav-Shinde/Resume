import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="main1">

      <h1 className='heading'>Contact me</h1>
      <div className="containera">

        <div className="text">
            <div className="instagram">
              <a href="https://www.instagram.com/saurav_shindee/">
              <img src="./images/instagram.png" alt="" /></a>
              <a href="https://www.instagram.com/saurav_shindee/">
              <p>Like me on Instagram</p></a>
            </div>
            <div className="twitter">
              <a href="https://x.com/SauravS39495284">
              <img src="./images/twitter.png" alt="" /></a>
              <a href="https://x.com/SauravS39495284">
              <p>Follow me on Twitter</p></a>              
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADr9_ZkByK-h_-f5_oD_l7Uz89WrqWrKV5o&keywords=saurav%20shinde&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ce5fee18-f1b1-421e-9f4f-5ef97091b7fe&sid=9.O&spellCorrectionEnabled=false">
              <img src="./images/linkedin.png" alt="" /></a>
              <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADr9_ZkByK-h_-f5_oD_l7Uz89WrqWrKV5o&keywords=saurav%20shinde&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ce5fee18-f1b1-421e-9f4f-5ef97091b7fe&sid=9.O&spellCorrectionEnabled=false">
              <p>Connect with me on Linkedin</p></a>
              
            </div>
            <div className="gmail">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwsGlVsdqpfwGxQlKHWlThqPSlvzlMBCgXswBQBDTPrQmSBBggHFdgzMTrGkXwnwWdpDnC">
              <img src="./images/gmail.png" alt="" /></a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwsGlVsdqpfwGxQlKHWlThqPSlvzlMBCgXswBQBDTPrQmSBBggHFdgzMTrGkXwnwWdpDnC">
              <p>Send mails on Gmail</p></a>
              
            </div>
        </div>

        <div className="message">
          <img className='messageimg' src="./images/message.jpg" alt="" />
        </div>
          
      </div>
    </div>
  )
}

export default Contact