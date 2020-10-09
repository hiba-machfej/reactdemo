import React, { Component } from "react";
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';



export default class RelatedMovies extends Component {
   render() {
     const style = {
       display: "flex",
       flexWrap: "wrap",
     };
 
     let movies = this.props.movies
       .filter(function (movie) {
         return movie.poster_path != null;
       })
       .map(function (movie) {
         return (
           <Col xs={6} sm={4} md={3} key={movie.id}>
             <Link to={"/movie/" + movie.id}><Poster info id={movie.id} path={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date} responsive /></Link>
           </Col>
         );
       });
 
     return (
       <Grid fluid={false}>
         <Row style={style}>{movies}</Row>
       </Grid>
     );
   }
 }
// export default class RelatedMoviesList extends Component{

//   render() {
//   const style={
// 	display: 'flex',
// 	flexWrap: 'wrap'
//   }
//    console.log(thi.props)
//     let movies = this.props.related_movies.map(function(movie) {
//       return movie.poster_path != null;
//     }).map(function(movie) {
//         return(
//             <Col xs={6} sm={4} md={3} key={movie.id} >
//             <Link to={'/movie/'+movie.id} ><Poster info id={movie.id} path={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date} responsive /></Link>
//           </Col>
//         );
//     });

//     return(
//         <p>hello</p>
//     //   <Grid fluid={false}>
//     //     <Row style={style}>
//     //       {movies}
//     //     </Row>
//     //   </Grid>
//     );
//   }
// }
