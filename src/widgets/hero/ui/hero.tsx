import { HeroView } from './hero-view';
import { HeroContent } from './hero-content';
import { HeroBox } from './hero-box';
import { HeroTitle } from './hero-title';
import { HeroSubtitle } from './hero-subtitle';
import { HeroVideo } from './hero-video';
import { VideoPlayer } from './video-player';
import { View } from '@/shared/ui/view';

export function Hero() {
  return (
    <HeroView>
      <View>
        <HeroContent>
          <HeroBox>
            <HeroTitle>Most important title on&nbsp;the&nbsp;page</HeroTitle>
            <HeroSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </HeroSubtitle>
          </HeroBox>
          <HeroVideo>
            <VideoPlayer
              videoId="dQw4w9WgXcQ"
              title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            />
          </HeroVideo>
        </HeroContent>
      </View>
    </HeroView>
  );
}
