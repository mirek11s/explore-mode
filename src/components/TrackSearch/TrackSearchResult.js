import React from 'react'

const TrackSearchResult = ({ track, chooseTrack }) => {

    const handlePlay = () => {
        chooseTrack(track)
    }

  return (
    <div 
    className='d-flex my-2 align-items-center' 
    style={{cursor: 'pointer'}}
    onClick={handlePlay}
    >
        <img src={track.albumUrl} alt="" style={{ height:'64px', width:'64px' }} />
        <div className="ml-3 ps-2">
            <div>{track.title}</div>
            <div className="text-muted">{track.artist}</div>
            <div>KIKi</div>
        </div>
    </div>
  )
}

export default TrackSearchResult