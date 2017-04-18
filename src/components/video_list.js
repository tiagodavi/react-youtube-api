import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems =
    props.videos.map(video =>
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} />
    );

  return (
    <div className="col-md-4">
      <ul clasName="list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
