//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import StarIcon from '@mui/icons-material/Star';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { IconButton } from '@mui/material';

function SwipeButtons(){
return(<div className="swipeButtons">
    <IconButton className="swipeleft">
    <EmojiEmotionsIcon fontSize="Large"/>
    </IconButton> 
    <IconButton className="swipestar"><StarIcon fontSize="Large"/>
    </IconButton>
    <IconButton className="swiperight"> 

    <SentimentVeryDissatisfiedIcon fontSize="Large"/>
    </IconButton>
</div>)
}

export default SwipeButtons