import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import StatsCard from '../components/stats-card'
import BlogPostCard2 from '../components/blog-post-card2'
import TestimonialsCard from '../components/testimonials-card'
import './home.css'
import { Player } from '@lottiefiles/react-lottie-player'

import Background from '../components/background/background';


const LINKS = {
  api: 'https://rapidapi.com/hub/',
  documentationLink: 'https://balmacefa.github.io/nft-api-engine-docs/'
};

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NFT Engine | 1 call NFT</title>
        <meta property="og:title" content="NFT Engine" />
      </Helmet>

      <Background />
      <div className="home-init">
        <div className="home-hero">
          <div className="home-container07">
            <h1 className="home-text006">
              <p>Fully automated</p>
              <p>NFT API 🍜🐋</p>
              {/* <span>1 Call Mint!🍜🐋</span> */}
            </h1>
            <span className="home-text011">

              <p>
                🌈👉 With just one API call, you can mint and deploy an NFT using your own custom data.
              </p>
              <p>
                👉 The API manages all technical aspects. No crypto required!
              </p>
              <p>
                👉 Our resilient work queue ensures that your NFT is successfully deployed.
              </p>
              <p>
                So why wait? Get started today!
              </p>

            </span>
            <div className="home-btn-group">
              <button className="home-button button">
                {/* link to https://rapidapi.com/hub/ */}
                <a href={LINKS.api} target="_blank" rel="noreferrer noopener">
                  USE API NOW
                </a>
              </button>
              <button className="home-button1 button">
                <a href={LINKS.documentationLink} target="_blank" rel="noreferrer noopener">
                  View Docs!
                </a>
              </button>
            </div>
          </div>
          <div className="home-container08 relative">

            <Player
              className='home__lottie_1'
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_2du6xppr.json"
              style={{ height: '403px', width: '687px' }}
            >
            </Player>

          <img
            alt=""
            src={process.env.PUBLIC_URL + "/playground_assets/right.svg"}
            className="home-right"
          />

          </div>
        </div>
        <div className="home-container09">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/playground_assets/turquoise-circle.svg"}
            className="home-turquoise-cirble"
          />
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/playground_assets/purple-circle.svg"}
            className="home-purple-circle"
          />
        </div>
      </div>
      <div className="home-black">
        <div className="home-container10">
          <div className="home-container11">
            <h2 className="home-text036">
              <span className="home-text037">The Job queue 💀🥀🧲🧭</span>
              <br></br>
              <span className="home-text039">🕵📜</span>
            </h2>
          </div>
          <div className="home-container12">
            <StatsCard
              number="Resilient Redis queue"
              image_src={process.env.PUBLIC_URL + "/playground_assets/01.svg"}
              description="Jobs are placed in a resilient Redis queue"
              rootClassName="stats-card-root-class-name1"
            ></StatsCard>
            <StatsCard
              number="Attempts until NFT is successfully deployed"
              image_src={process.env.PUBLIC_URL + "/playground_assets/04.svg"}
              description="The nature of the networks and technology used to create non-fungible tokens (NFTs) means that there are multiple potential points of failure. To account for this, a resilience work queue is used that attempts each step until the NFT is successfully deployed. If a job does not succeed after 10 tries, it is considered unrecoverable."
              rootClassName="stats-card-root-class-name"
            ></StatsCard>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-container13">
            <div className="home-container16">
              <h1 className="home-text049">
                <span className="home-text042">
                  1-
                </span>
                <br></br>
                <span className="home-text045">
                  Jobs are placed in a resilient Redis queue.
                </span>
              </h1>
            </div>
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <h1 className="home-text049">
                <span className="home-text050">2.</span>
                <br></br>
                <span className="home-text052">
                  A smart contract is deployed
                </span>
                <br></br>
                <span className="home-text054">for each collection.</span>
              </h1>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-container18">
              <h1 className="home-text055">
                <span>3#</span>
                <br></br>
                <span></span>
                <span>Data is uploaded to IPFS in base64 format.</span>
                <br></br>
                <span></span>
              </h1>
            </div>
          </div>
          <div className="home-container19">
            <div className="home-container20">
              <span className="home-text061">
                <span>4$</span>
                <br></br>
                <span>
                  The IPFS results are included in the NFT Json Metadata.As
                  specified by your custom path. (Internally is done by [lodash
                  _.set
                </span>
              </span>
            </div>
          </div>
          <div className="home-container21">
            <div className="home-container22">
              <h1 className="home-text049">
                <span className="home-text066">5%</span>
                <br></br>
                <span className="home-text068">
                  The compiled NFT Json Metadata is uploaded to IPFS
                </span>
              </h1>
              <span className="home-text069 headline3">
                <br></br>
                <span>^6^</span>
                <br></br>
                <span>The NFT is deployed to the blockchain.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container23">
            <div className="home-container24">
              <h1 className="home-text049">
                <span>7&amp;</span>
                <br></br>
                <span>
                  Webhook is used to notify the user of the job&apos;s stages and
                  status.
                </span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </div>


      {PriceInfo()}


      <div className="home-api mt-1">
        <h3 className="home-text018 headline5">
          <span>Designed for developers</span>
          <span></span>
          <span></span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
        </h3>
        <h2 className="home-text025 headline2">
        The world’s most powerful and easy-to-use NFT API
        </h2>
        <span className="home-text033">
          <span>
            The nature of the networks and technology used to create
            non-fungible tokens (NFTs) means that there are multiple potential
            points of failure. To account for this, a resilience work queue is
            used that attempts each step until the NFT is successfully deployed.
            If a job does not succeed after 10 tries, it is considered
            unrecoverable.
          </span>
          <br></br>
          <span></span>
        </span>
        <button className="home-button2 button">
          <a href={LINKS.documentationLink} target="_blank" rel="noreferrer noopener">
            Dev Docs
          </a>
        </button>
        <div className="home-features">
          <FeatureCard
            text="NFTs are becoming prime uses for identities in the form of avatars. Much like passports connect individuals to a country, avatars represent memberships in communities."
            title="Integración absoluta"
          ></FeatureCard>
          <FeatureCard
            text="NFTs could be employed for a range of applications. They can, for example, be used to signify ownership of digital goods like art, music, or videos, as well as any JSON structure. They can also be used to represent tangible items like automobiles and houses. NFTs can also be used to represent shares in a firm or cryptocurrency tokens.\n"
            title="High Compatibility"
            image_src={process.env.PUBLIC_URL + "/playground_assets/02.svg"}
          ></FeatureCard>
        </div>
      </div>

      <div className="home-steps">
        <div className="home-container25">
          <BlogPostCard2
            text="Location-based NFTs can be utilized to provide exclusive benefits and access to experiences in the physical and digital worlds to visitors of certain areas."
            when="@@@@"
            label="@"
            title="You have complete control over your internal economy, and you may choose to use the blockchain to deploy your NFT."
            author="@@"
            image_src1="https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUwfHxnYWxheHl8ZW58MHx8fHwxNjUxNjI4MjQ4&amp;ixlib=rb-1.2.1&amp;w=1500"
            description="- A museum that provides museum permits to visitors, which can be utilized to provide personalized NFT and physical access to sub-galleries or sub-experiences."
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="blog-post-card2-root-class-name3"
          ></BlogPostCard2>
        </div>
        <div className="home-container26">
          <BlogPostCard2
            text="."
            title="Proof of progress DAO structure"
            image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            image_src1="https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI4MDAw&amp;ixlib=rb-1.2.1&amp;w=1500"
            description="The goldcrest will be opening up the 🔥💡 official blockchain API/gRpc hub  in the former NFT, proof of progress DAO structure, Cupola_XS137. The hub aims to help speed up the adoption of blockchain technology and improve the climate for NFT &lt;&lt;-..^-^. The hub will be working, processing decentralized code processing &amp;&amp;_AND innovation to help support blockchain technology 33_6TY!!."
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="blog-post-card2-root-class-name"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          text="Each significant game decision is saved as a historical record chain in your JSON structure, which can be as rich or as simple as you wish.\n\nThe progress_proof json is used to keep track of players' decisions and to decide the game's outcome. As a result, you may have a totally unique and dynamic gaming experience over time."
          title="Write the history of the progress_proof json in a video game:"
          image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
          image_src1="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI4MDAw&amp;ixlib=rb-1.2.1&amp;w=1500"
          description='The progress_proof json is used in the video game "NFT API Engine." Players in this game have the option of joining the game&apos;s development team or simply playing the game. The game is set  and is determined by the choices made by the entire universe of players.'
          profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
          rootClassName="blog-post-card2-root-class-name2"
        ></BlogPostCard2>
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/playground_assets/turquoise-circle.svg"}
          className="home-turquoise-cirble1"
        />
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/playground_assets/purple-circle.svg"}
          className="home-purple-circle1"
        />
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/playground_assets/purple-circle.svg"}
          className="home-purple-circle2"
        />
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/playground_assets/left.svg"}
          className="home-left1"
        />
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/playground_assets/right.svg"}
          className="home-right1"
        />
      </div>
      <div className="home-experiencia-de-usuario">
        <div className="home-container27">
          <img
            src={process.env.PUBLIC_URL + "/playground_assets/2022-05-03_20-17-1100w.png"}
            alt=""
            className="home-image08"
          />
          <div className="home-container28">
            <div className="home-container29">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/playground_assets/quote-mark.svg"}
                className="home-image09"
              />
              <h1 className="home-text084 headline2">
                Custom JSON
              </h1>
              <h1 className="home-text084 headline2">
                Structure
              </h1>
            </div>
            <div className="home-container30">
              <TestimonialsCard
                text="Save Historical events, agreement, contract of gavideo game. \n- Air drop NFts\n- No knowledge required\n- Address splitter periodical or stream of NFTs with crypto revenue.\n- Save Historical events, agreement, contract of video game\n- NFTs can be used to represent ownership of digital goods like art, music, or videos, as well as any JSON structure."
                text1="s"
                text2="c"
                image_src={process.env.PUBLIC_URL + "/playground_assets/logo-4.svg"}
                rootClassName="testimonials-card-root-class-name"
              ></TestimonialsCard>
            </div>
          </div>
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/playground_assets/2022-05-03_20-16-700h.png"}
            className="home-image10"
          />
          <div className="home-container31">
            <div className="home-container32"></div>
            <div className="home-container33"></div>
          </div>
        </div>
      </div>
      <div className="home-testimonio">
        <footer className="home-container34">
          <span className="lead1 h1">
            <span>
              Key Points
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text087">🔑</span>
            <span>🥇🔑</span>
            <span></span>
          </span>
          <span className="home-text090 lead1">
            <span></span>
            <span></span>
            <span>- Jobs are placed in a resilient Redis queue.</span>
            <br></br>
            <span>- A smart contract is deployed for each collection.</span>
            <br></br>
            <span>
              - Data is uploaded to [IPFS](https://ipfs.io/) (The InterPlanetary
              File System) in base64 format.
            </span>
            <br></br>
            <span>
              - The IPFS results are included in the NFT Json Metadata.As
              specified by your custom path. (Internally is done by [lodash
              _.set](https://lodash.com/docs/4.17.15#set))
            </span>
            <br></br>
            <span>- The compiled NFT Json Metadata is uploaded to IPFS.</span>
            <br></br>
            <span>- The NFT is deployed to the blockchain.</span>
            <br></br>
            <span>
              - A webhook is used to notify the user of the job&apos;s stages
              and status.
            </span>
          </span>
        </footer>
      </div>
      
      {PriceInfo()}


      <div className="home-feature1">
        <div className="home-container41">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1631695161296-fb4daf40d3f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxzcGlyYWx8ZW58MHx8fHwxNjUxNjI1MTcx&amp;ixlib=rb-1.2.1&amp;w=500"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            className="home-image12"
          />
        </div>
        <div className="home-container42">
          <h3 className="home-text116 headline3">
            Enterprise usage NFT Engine - 1
          </h3>
          <span className="home-text117 lead1">
            <span></span>
            <br></br>
            <span>
              NFTs or non-fungible tokens are digital assets that are unique and
              cannot be replaced. They are often used to represent items in
              video games or digital art. Recently, there has been a lot of
              interest in NFTs as their prices have skyrocketed. For example, an
              NFT of a digital cat sold for over $100,000!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              This NFT API Engine is a platform that allows developers to create
              and manage NFTs. It is easy to use and only requires one API call!
              This makes it perfect for developers who want to create NFTs but
              don&apos;t have the time or expertise to do so.
            </span>
            <span></span>
          </span>
          <button className="home-button5 button">
            <a href={LINKS.api} target="_blank" rel="noreferrer noopener">
              USE API NOW
            </a>
          </button>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container43"></div>
      </div>
    </div>
  )
}

export default Home
function PriceInfo() {
  return <div className="home-pricing">
    <div className="home-container36">
      <div className="home-container37">
        <h1 className="home-text101">Cost per Usage</h1>
      </div>
      <div className="home-container38">
        <div className="home-container39">
          <span className="home-text102">Mainnet</span>
          <span className="home-text103">1 usd</span>
          <span className="home-text104">
            <span className="home-text105"></span>
            <span className="home-text106">
              mint
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }} />
            </span>
            <br></br>
            <span className="home-text108"></span>
            <br></br>
            <span className="home-text110">on Polygon Matic</span>
          </span>
          <button className="home-button3 button">
            <a href={LINKS.api} target="_blank" rel="noreferrer noopener">
              USE API NOW
            </a>
          </button>
        </div>
        <div className="home-container40">
          <span className="home-text111">Testnet</span>
          <span className="home-text112">500</span>
          <span className="home-text113">
            <span>Free Requests</span>
          </span>
          <button className="home-button4 button">
            <a href={LINKS.api} target="_blank" rel="noreferrer noopener">
              USE API NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
}

