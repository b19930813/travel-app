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
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';


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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [cardText , setCardText] = React.useState(); 
  const [display, setDisplay] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const [statetravel, setTravel] = React.useState({
    Name: travel.Title,
    Date: travel.TravelDate,
    Remark: travel.Remark,
    Pic: travel.ImagePath
})

  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    //取得Login 狀態
   
}, [])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteClick = () =>{
    const df = new DataFunction();
    df.DeleteAllTravel(travel.Title);
    setDisplay("none");
  }

  const handleUpdateData = () =>{
     let travel = new Travel();
     travel.Title = statetravel.Name;
     travel.Remark = statetravel.Remark;
     travel.TravelDate = new Date(statetravel.Date);
     travel.ImagePath = statetravel.Pic;
     const df = new DataFunction();
     df.CreateTravel(travel);
  }

  const handleTextChange = (event: { persist: () => void; target: { id: any; value: any; }; }) => {
    event.persist();
    switch (event.target.id) {
        case "Name":
          setTravel(oldValues => ({
                ...oldValues,
                Name: event.target.value
            }))
            break;
        case "Date":
          setTravel(oldValues => ({
                ...oldValues,
                Date: event.target.value
            }))
            break;
        case "Remark":
          setTravel(oldValues => ({
                ...oldValues,
                Remark: event.target.value
            }))
            break;
            case "Pic":
              setTravel(oldValues => ({
                    ...oldValues,
                    Pic: event.target.value
                }))
                break;
    }
  }


  

  return (
    <Grid md={4}>
  <Card sx={{ maxWidth: 345 , display:{display}}} >
    
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
          subheader={statetravel.Date.toDateString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={statetravel.Pic}
          alt="Paella dish"
        />
        <CardContent >
       
          <Typography variant="body2" color="text.secondary" >
            {statetravel.Remark}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"  onClick={handleDeleteClick}>
            <DeleteIcon  />
          </IconButton>
          <IconButton aria-label="share"  onClick={handleClickOpen}>
            <UpdateIcon />
          </IconButton>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>建立行程</DialogTitle>
        <DialogContent>
          <DialogContentText width={600}>
              建立屬於你的行程
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="行程名稱"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={statetravel.Name}
            onChange={handleTextChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Date"
            label="日期"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={statetravel.Date}
            onChange={handleTextChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="Remark"
            label="說明"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={statetravel.Remark}
            onChange={handleTextChange}
          />
              <TextField
            autoFocus
            margin="dense"
            id="Pic"
            label="圖片"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={statetravel.Pic}
            onChange={handleTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleUpdateData}>更新資料</Button>
        </DialogActions>
      </Dialog>

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
    </Grid>

  );
}