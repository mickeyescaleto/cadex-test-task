'use client';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

type VideoPlayerProps = {
  videoId: string;
  title: string;
};

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <LiteYouTubeEmbed
      aspectHeight={9}
      aspectWidth={16}
      id={videoId}
      title={title}
    />
  );
}
