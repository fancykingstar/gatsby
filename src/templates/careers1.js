import React from "react";
import lifecycle from 'react-pure-lifecycle';
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Player from '@vimeo/player';

import Layout from "../components/layout"
import SEO from "../components/seo"



class Career extends React.Component{
  constructor(props) {
    super(props)
    this.handstick = React.createRef(null);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('clicked')
  }

  componentDidMount(){
    const player = new Player(this.handstick.current, {
      id: 19231868,
      width: 640
    });
    
    player.on('play', function() {
      console.log('played the video!');
    });
  }
  
render(){
  const data = this.props.data;
  // console.log(this)
  return (  
    <Layout>
      <SEO title={data.wpgraphql.category.name} description={data.wpgraphql.category.name}/>
      
      <section className="video-section">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-md-10 m-auto" ref={this.handstick}>
                <img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/careers_video.png" alt="career video" onClick={this.handleClick} />
            </div>
          </div>
        </div>
      </section>

      <section className="service-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 header-text mb-4">
              <h2 className="mb-20 text-center"><span>Why Work at EnerBank?</span></h2>
              <p> Jobs come and go, but a career at EnerBank is just that: a career. We truly value our people — hiring the best and brightest, then continuing to nurture that talent as team members develop their skills and move up through the organization over time. If you love to help people, thrive in a challenging environment, 
      and are ready for the time of your life, consider joining us.</p>
            </div>
            <div className="col-md-12 header-text">
              <h2 className="mb-20 text-center"><span>Available Positions</span></h2>
            </div>
            {/* Jobs List */}
            <ul className="jobs_list">              
              {data.wpgraphql.category.careers_post.edges.map(({node}, i) => (
                <li key={node.careers.availablePositions.fieldGroupName + i}>
                    <h3 dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.positionTitle }} />
                    <div className="job_location" dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.location }} />
                    <p dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.overview}} />
                    <Link to={`/${node.slug}`} className="btn btn-primary f-bold equal-wd mb-4">View Job Details &amp; Apply</Link>
                </li>
              ))}
            </ul>
            {/* Pagination Nav start here */}
          </div>
        </div>
      </section>
    </Layout>
  )
 }
}
export default Career

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      category(id: $databaseId, idType: DATABASE_ID) {
        id
        name
        careers_post {
          edges {
            node {
              id
              title
              careers {
                availablePositions {
                  fieldGroupName
                  location
                  overview
                  positionTitle
                }
              }
            }
          }
        }

      }
    }
  }
`