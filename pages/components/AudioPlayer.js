import React, { useState } from 'react'
import styles from '../../styles/AudioPlayer.module.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying); 
    }

    return (
        <div className={styles.audioPlayer}>
            <audio src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" preload="metadata"></audio>
            <button className={styles.forwardBackward}> <BsArrowLeftShort /> 30</button>
            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <button className={styles.forwardBackward}> <BsArrowRightShort /> 30</button>

            {/* current time */}
            <div className={styles.currentTime}>0:00</div>

            {/* progress bar */}
            <div>
                <input type='range' className={styles.progressBar} />
            </div>

            {/* duration */}
            <div className={styles.duration} >2:49</div>
        </div>
    )
}
export { AudioPlayer } 
