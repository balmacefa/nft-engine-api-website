import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import StatsCard from '../components/stats-card'
import BlogPostCard2 from '../components/blog-post-card2'
import TestimonialsCard from '../components/testimonials-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NFT Engine | 1 call NFT</title>
        <meta property="og:title" content="NFT Engine" />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1540449078594-94d6173856c0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI3NDkw&amp;ixlib=rb-1.2.1&amp;h=800"
              className="home-image"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1540449078594-94d6173856c0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI3NDkw&amp;ixlib=rb-1.2.1&amp;h=800"
              className="home-image01"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1540449078594-94d6173856c0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI3NDkw&amp;ixlib=rb-1.2.1&amp;h=800"
              className="home-image02"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1540449078594-94d6173856c0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI3NDkw&amp;ixlib=rb-1.2.1&amp;h=800"
              className="home-image03"
            />
          </div>
          <div className="home-menu"></div>
          <div className="home-container01"></div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src={process.env.PUBLIC_URL +"/playground_assets/logotype-dark.svg"}
                className="home-image04"
              />
            </div>
            <div data-type="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon03">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text">About</span>
            <span className="home-text001">Products</span>
            <span className="home-text002">Pricing</span>
            <span className="home-text003">Blog</span>
            <span className="home-text004">Jobs</span>
            <span className="home-text005">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container02">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <div className="home-container05">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-init">
        <div className="home-hero">
          <div className="home-container07">
            <h1 className="home-text006">
              <span>Fully automaed 🤖🧞</span>
              <span>NFT API.</span>
              <br></br>
              <span>1 Call Mint!🍜🐋</span>
            </h1>
            <span className="home-text011">

              <p>
                Deploy an NFT with a single API call to the
                <a href="https://polygon.technology/" target="_blank" rel="noreferrer noopener">
                  Polygon Matic
                </a>
                blockchain
              </p>
              <p>
                ( this
                is a layer 2 Ethereum network).
                more blockchains will be added soon ..BSC, CELO, ONE.. SOlana.              </p>
              <p>
                Royalty_split_address for Collaboration on OpenSeas sales.
                Multi NFT collections, [a token for 'n' amount of people!, by 'm' amount in the gallery of collections]
              </p>
            </span>
            <div className="home-btn-group">
              <button className="home-button button">USE API NOW</button>
              <button className="home-button1 button">View More!</button>
            </div>
          </div>
          <div className="home-container08 relative">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI3NDkw&amp;ixlib=rb-1.2.1&amp;w=400"
              className="home-image05"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1525215351243-2ba501f3442c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg0fHxnYWxheHl8ZW58MHx8fHwxNjUxNjI4Mjgy&amp;ixlib=rb-1.2.1&amp;w=300"
              className="home-image06"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1651578496177-1b4605f13fe9?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjUxNjE4MDEx&amp;ixlib=rb-1.2.1&amp;h=600"
              className="home-image07"
            />
          </div>
        </div>
        <div className="home-container09">
          <div className="home-blur-background"></div>
          <img
            alt="image"
            src={process.env.PUBLIC_URL +"/playground_assets/turquoise-circle.svg"}
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src={process.env.PUBLIC_URL +"/playground_assets/purple-circle.svg"}
            className="home-purple-circle"
          />
          <img
            alt="image"
            src={process.env.PUBLIC_URL +"/playground_assets/left.svg"}
            className="home-left"
          />
          <img
            alt="image"
            src={process.env.PUBLIC_URL +"/playground_assets/right.svg"}
            className="home-right"
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
              image_src={process.env.PUBLIC_URL +"/playground_assets/04.svg"}
              description="The nature of the networks and technology used to create non-fungible tokens (NFTs) means that there are multiple potential points of failure. To account for this, a resilience work queue is used that attempts each step until the NFT is successfully deployed. If a job does not succeed after 10 tries, it is considered unrecoverable."
              rootClassName="stats-card-root-class-name"
            ></StatsCard>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-container13">
            <div className="home-container14">
              <h1 className="home-text040">
                <span></span>
                <span className="home-text042">
                  1-
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <span className="home-text045">
                  Jobs are placed in a resilient Redis queue.
                </span>
                <br></br>
                <span></span>
                <span></span>
                <span></span>
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
              <h1 className="home-text065">
                <span className="home-text066">5%</span>
                <br></br>
                <span className="home-text068">
                  {' '}
                  The compiled NFT Json Metadata is uploaded to IPFS
                </span>
              </h1>
              <span className="home-text069 headline3">
                <span>^6^</span>
                <br></br>
                <span>The NFT is deployed to the blockchain.</span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-container23">
            <div className="home-container24">
              <h1 className="home-text078">
                <span>7&amp;</span>
                <br></br>
                <span> W</span>
                <span>
                  ebhook is used to notify the user of the job&apos;s stages and
                  status.
                </span>
                <br></br>
                <span></span>
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div className="home-pricing">
        <div className="home-container36">
          <img
            src="https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbnQlMjBjb2xvciUyMHxlbnwwfHx8fDE2NTE2MzEwMDg&amp;ixlib=rb-1.2.1&amp;w=300"
            alt="image"
            className="home-image11"
          />
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
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text108"></span>
                <br></br>
                <span className="home-text110">onPolygon Matic</span>
              </span>
              <button className="home-button3 button">USE API</button>
            </div>
            <div className="home-container40">
              <span className="home-text111">Testnet</span>
              <span className="home-text112">500</span>
              <span className="home-text113">
                <span className="home-text114">Requie</span>
                <span>Requests</span>
              </span>
              <button className="home-button4 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>





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
          <span></span>
          <span>The world’s most powerful and easy-to-use NFT API</span>
          <br></br>
          <span></span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
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
        <button className="home-button2 button">Documentación</button>
        <div className="home-features">
          <FeatureCard
            text="NFTs are becoming prime uses for identities in the form of avatars. Much like passports connect individuals to a country, avatars represent memberships in communities."
            title="Integración absoluta"
          ></FeatureCard>
          <FeatureCard
            text="NFTs could be employed for a range of applications. They can, for example, be used to signify ownership of digital goods like art, music, or videos, as well as any JSON structure. They can also be used to represent tangible items like automobiles and houses. NFTs can also be used to represent shares in a firm or cryptocurrency tokens.\n"
            title="High Compatibility"
            image_src={process.env.PUBLIC_URL +"/playground_assets/02.svg"}
          ></FeatureCard>
          <FeatureCard
            text="Use integrations for systems like Shopify, WooCommerce, NetSuite, and more.\nGive your most loyal customer access to premium products or request in nft forms."
            title="Prebuilt integrations\n"
            image_src={process.env.PUBLIC_URL +"/playground_assets/03.svg"}
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
          alt="image"
          src={process.env.PUBLIC_URL + "/playground_assets/turquoise-circle.svg"}
          className="home-turquoise-cirble1"
        />
        <img
          alt="image"
          src={process.env.PUBLIC_URL + "/playground_assets/purple-circle.svg"}
          className="home-purple-circle1"
        />
        <img
          alt="image"
          src={process.env.PUBLIC_URL + "/playground_assets/purple-circle.svg"}
          className="home-purple-circle2"
        />
        <img
          alt="image"
          src={process.env.PUBLIC_URL + "/playground_assets/left.svg"}
          className="home-left1"
        />
        <img
          alt="image"
          src={process.env.PUBLIC_URL + "/playground_assets/right.svg"}
          className="home-right1"
        />
      </div>
      <div className="home-experiencia-de-usuario">
        <div className="home-container27">
          <img
            src={process.env.PUBLIC_URL + "/playground_assets/2022-05-03_20-17-1100w.png"}
            alt="image"
            className="home-image08"
          />
          <div className="home-container28">
            <div className="home-container29">
              <img
                alt="image"
                src={process.env.PUBLIC_URL +"/playground_assets/quote-mark.svg"}
                className="home-image09"
              />
              <h1 className="home-text084 headline2">
                Code JSON - Custom structure
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
            alt="image"
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
          <div className="home-container35">
            <span className="home-text100 body2">© All rights reserved</span>
          </div>
        </footer>
      </div>
      <div className="home-pricing">
        <div className="home-container36">
          <img
            src="https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbnQlMjBjb2xvciUyMHxlbnwwfHx8fDE2NTE2MzEwMDg&amp;ixlib=rb-1.2.1&amp;w=300"
            alt="image"
            className="home-image11"
          />
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
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text108"></span>
                <br></br>
                <span className="home-text110">onPolygon Matic</span>
              </span>
              <button className="home-button3 button">USE API</button>
            </div>
            <div className="home-container40">
              <span className="home-text111">Testnet</span>
              <span className="home-text112">500</span>
              <span className="home-text113">
                <span className="home-text114">Requie</span>
                <span>Requests</span>
              </span>
              <button className="home-button4 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container41">
          <img
            alt="image"
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
          <button className="home-button5 button">Use now</button>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container43"></div>
      </div>
    </div>
  )
}

export default Home
