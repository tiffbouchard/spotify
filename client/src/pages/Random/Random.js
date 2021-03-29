import React from 'react';
import Loader from "../../components/Loader/Loader";
import { getTopArtistsShort, getArtist, getRelated, getRecommendationsForArtist, getAllArtistInfo, getUser, followArtist, doesUserFollowArtist} from "../../utils/spotifyService";
import InfoCard from "../../components/InfoCard/InfoCard";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

import Modal from "../../components/Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faExternalLinkAlt, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'


import "./Random.scss";

const Random = () => {
  const [artists, setArtists] = React.useState(null);  
  const [singleArtist, setSingleArtist] = React.useState(null);  
  const [relatedArtists, setRelatedArtists] = React.useState(null);  
  const [randomArtist, setRandomArtist] = React.useState(null);  
  const [loading, setLoading] = React.useState(false);  
  const [play, setPlay] = React.useState(false);  
  const [nowPlaying, setNowPlaying] = React.useState(null);
  const [artistDetails, setArtistDetails] = React.useState(null);  
  const [modal, setModal] = React.useState(false);  
  const [following, setFollowing] = React.useState();  



  const audioEl = React.useRef(null);
  

  const getSeeds = async () => {
    const artistsList = await getTopArtistsShort();
    const max = artistsList.data.items.length;
    const min = 0;
    var i = 0;
    var randomIdx;
    var randArtistList = [];

    while (i < 4) {
      randomIdx = Math.floor(Math.random() * (max - min + 1)) + min;
      if (artistsList.data.items[randomIdx]) {
        randArtistList.push(artistsList.data.items[randomIdx].id)
      } else {
        continue
      }
      i++;
    }

    return randArtistList;
  }

  const getRandomArtist = async () => {
    setLoading(true);
    const seeds = await getSeeds();
    const randomArtist = await getRecommendationsForArtist(seeds);
    const user = await getUser();
    const artistDetails = await getAllArtistInfo(randomArtist.data.tracks[0].artists[0].id, user.data.country)
    setRandomArtist(artistDetails);
    setFollowing(null);
    setLoading(false);
  }
  

  const getSingleArtist = async (artistId) => {
    const singleArtist = await getArtist(artistId);
    setSingleArtist(singleArtist.data)
  }

  const getRelatedArtists = async (artistId) => {
    const relatedArtists = await getRelated(artistId);
    setRelatedArtists(relatedArtists.data.artists);
  }
  
  const getArtistDetails = async (artistId) => {
    const user = await getUser();
    const artistDetails = await getAllArtistInfo(artistId, user.data.country);
    setArtistDetails(artistDetails);

  }

  const handleFollow = async (event) => {
    const following = await followArtist(event.target.id);
    console.log(following.status)
    setFollowing(following.status)
  }



  const handleClick = (event) => {
    event.stopPropagation();
    console.log(event.target);
    getRelatedArtists(event.target.id);
    getArtistDetails(event.target.id);
    getSingleArtist(event.target.id);
    setFollowing(null);

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  const playMusic = (event) => {
    event.stopPropagation();
    setPlay(event.target.id);
    setNowPlaying([event.target.src, event.target.getAttribute("data-name"), event.target.getAttribute("data-artists")]);
  }


  const stopMusic = (event) => {
    event.stopPropagation();
    setPlay(null);
    setNowPlaying(null);
  }


  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  React.useEffect(() => {
    getRandomArtist();
  }, [])

  
  if (!randomArtist) {
    return (
      <Loader />
    )
  }

  return ( 
    <main className="random">
      {modal && <Modal closeModal={closeModal} title="How it works" body="The random artist generator is the perfect way to discover new artists or rediscover some of your favourites. Sometimes there are just too many options and the random generator makes it easy to jump in and start listening to something good. Your results are based on your current favourites so you always get an artist that matches your vibe. A random array of your top artists from the past 4 weeks are thrown into Spotify's recommendation system and returns someone similar. Not happy with the results? Generate a new artist using the ↻ button"/>}

      {relatedArtists && 
        <InfoCard 
        following={following}
        handleFollow={handleFollow}
        artistDetails={artistDetails}
        handleClick={handleClick} 
      />}



      <div>
        <div className="randomheader-info">
          <button onClick={getRandomArtist}>
            <FontAwesomeIcon spin={loading} icon={ faRedo } />
          </button>
          <small onClick={showModal}><u>How it works</u></small>
        </div>
        <div className="randomrow">
          <div className="image">
            <img src={randomArtist.artist.images ? randomArtist.artist.images[0].url : ""}/>
          </div>
          <div className="artistinfo">
            <div className="randomrow artist-header">
              <h1>{randomArtist.artist.name}</h1>
              <a target="_blank" className="external-tag" href={randomArtist.artist.external_urls.spotify}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
            <div className="moreinfo">
              <small>{randomArtist.artist.followers.total} followers</small>
              <div className="tags">
                {randomArtist.artist.genres.map((genre) => <small>{genre}</small>)}
              </div>

              {randomArtist.doesFollow || following === 204 ? 
                <button id={randomArtist.artist.id} className="follow-btn">Following</button> 
                : 
                
                  <button onClick={handleFollow} id={randomArtist.artist.id} className="follow-btn">Follow&nbsp;<FontAwesomeIcon icon={faPlusCircle}/></button>
              
              }
            


            </div>
      
          </div>

        </div>

        <div className="info">
          <h2>Top Tracks</h2>
          <div className="related m-0">
            {randomArtist.topTracks.tracks.map((track) => 
              <div>
                {track.is_playable && play === track.id &&
                  <audio id={track.id} autoPlay>
                    <source src={track.preview_url} type=""/>
                  </audio>
                }
                {track.is_playable && 
                <div className="album-thumbnail">
                  <img src={track.album.images[0].url} onMouseEnter={playMusic} onMouseLeave={stopMusic} data-name={track.name} id={track.id} data-artists={track.artists.map((artist) => artist.name)}/>
                </div>
                }
              </div>
            )}
          </div>
          <h2>Related Artists</h2>
          <div className="related m-0">
            {randomArtist.related.artists.map((a) => 
              <div>
                <div className="thumbnail" onClick={handleClick} >
                  <img src={a.images[0].url} id={a.id}/>
                </div>
                <p>{a.name}</p>
              </div>
            )}
          </div>
        </div>


      </div>
      <MusicPlayer nowPlaying={nowPlaying}/>

    </main> 
    );
}
 
export default Random;