import { MoonFilled } from "@ant-design/icons";
import { Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import "./MusicPlayerStyles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import chillSongs from "../Category/chillSongs";
import lazySongs from "../Category/jazzySongs";
import sleepySongs from "../Category/sleepySongs";
import Quote from "../Quote/QuoteTime";
import Timer from "./Timer";
import { quotes } from "../Quote/quotes";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectsong, setSelectsong] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [song, setSong] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [quote, setQuote] = useState("");


  const randomIndex = Math.floor(Math.random() * quotes.length);

  function handleTimer() {
    setShowTimer(!showTimer);
  }

  useEffect(() => {
    setQuote(quotes[randomIndex]);
  }, []);

  useEffect(() => {
    setSelectsong(chillSongs);

    if (chillSongs.length > 0) {
      setSong(chillSongs[0]);
    }
  }, []);

  const handleNextSong = () => {
    const nextIndex = (songIndex + 1) % selectsong.length;
    setSongIndex(nextIndex);
    setSong(selectsong[nextIndex]);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    const prevIndex = (songIndex - 1 + selectsong.length) % selectsong.length;
    setSongIndex(prevIndex);
    setSong(selectsong[prevIndex]);
    setIsPlaying(true);
  };

  const handleCategoryChange = (category) => {
    console.log("Category selected:", category);
    switch (category) {
      case "chillsong":
        setSelectsong(chillSongs);
        setIsPlaying(true);
        break;
      case "jazzysong":
        setSelectsong(lazySongs);
        setIsPlaying(true);
        break;
      case "sleepysong":
        setSelectsong(sleepySongs);
        setIsPlaying(true);
        break;
      default:
        break;
    }
    console.log("Selected songs:", selectsong);
    setSongIndex(0);
    setSong(selectsong[0]);
  };

  return (
    <div className="player">
      <Flex className="TrackContainer" justify="space-between" gap="2rem">
        {/* Card Container with time and random quote */}
        <Quote />
        <Card className="playlist">
          <Flex align="center" justify="space-between" vertical gap="15rem">
            <Flex
              className="topControllers"
              justify="flex-end"
              align="flex-end"
              gap="35rem"
            >
              <Flex vertical style={{zIndex : "5"}}>
                <button
                  className="btn timerSelctor"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleTimer}
                >
                  Pomodoro
                </button>
                {showTimer && <Timer />}
              </Flex>

              <select
                name="songSelect"
                id=""
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="btn songSelect"
              >
                <option value="chillsong" className="btn">
                  Chill Lofi
                </option>
                <option value="jazzysong" className="btn">
                  Jazzy Lofi
                </option>
                <option value="sleepysong" className="btn">
                  Sleepy Lofi
                </option>
              </select>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex className="PlayerDock" gap="1rem">
        <Card className="nowPlaying">
          <Flex
            align="center"
            gap="small"
            justify="space-between"
            className="nowPlayingContainer"
          >
            <Flex vertical className="nowPLayingTrack">
              <Typography.Text
                style={{
                  color: "var(--color)",
                  fontSize: "1.5rem",
                  whiteSpace: "wrap",
                  fontFamily: "var(--font-player",
                }}
              >
                {quote}
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
        <Card className="musicController">
          <Flex justify="center" gap="1rem">
            <AudioPlayer
              showSkipControls={true}
              autoPlay={true}
              src={song}
              className="audioPlayer"
              onClickNext={handleNextSong}
              onClickPrevious={handlePreviousSong}
              onEnded={handleNextSong} // Autoplay next song when the current song ends
            />
          </Flex>
        </Card>
      </Flex>
    </div>
  );
};

export default MusicPlayer;
