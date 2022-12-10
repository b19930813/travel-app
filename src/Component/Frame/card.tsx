import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import test from '../../Image/tokyotower.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { DataFunction , Travel} from  '../../Function/DataController';
import {Link}  from 'react-router-dom';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(travel: Travel) {
  if(travel.Remark.length < 84){
    travel.Remark.padEnd(84);
  }
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    //取得Login 狀態
   
}, [])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid md={4}>
<Link to={`123`}>
  <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              F
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={travel.Title}
          subheader={travel.TravelDate.toDateString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={travel.ImagePath}
          alt="Paella dish"
        />
        <CardContent >
       
          <Typography variant="body2" color="text.secondary" >
            {travel.Remark}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
       
      </Card>
</Link>
     
    </Grid>

  );
}