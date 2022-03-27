import React, { useState, useEffect } from 'react';
import useAuth from '../components/Auth/useAuth';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from '../components/TrackSearch/TrackSearchResult';
import Player from '../components/TrackSearch/Player';
import ImgCover from '../components/TrackSearch/ImgCover';

const spotifyApi = new SpotifyWebApi({
    clientId: '0f0333feafaa4798b3d06aad57ce3fe1',
})

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    console.log('ssss', playingTrack)


    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearch('')
    }

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([]) 
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
        if (cancel) return
        setSearchResults(
            res.body.tracks.items.map(track => {
            const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
                },
                track.album.images[0]
            )

            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
                bigAlbumImg: track.album.images[0],
            }
            })
        )
        })

        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <Container className='d-flex flex-column py-2' style={{height: '85vh'}}>
            <Form.Control 
            type='search' 
            placeholder='search Songs/Artists' 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            />
            <div className='flex-grow-1 my-2' style={{overflowY: 'auto'}}>
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                ))}
            </div>
            <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </Container>
    )
}

export default Dashboard;