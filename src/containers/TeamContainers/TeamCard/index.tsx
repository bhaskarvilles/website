import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  GridProps
} from '@material-ui/core'
import Github from '../assets/Github.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Email from '../assets/Email.svg'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  },
  iconLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: 15
  },
  team: {
  },
  nicknameTextColor: {
    color: '#05EEFF',
    opacity: 1
  },
  role: {
    marginTop: 20,
    marginBottom: 50
  },
  icons: {
    display: 'block',
    margin: 'auto',
    fill: theme.palette.type === 'light' ? 'white' : 'inherit',
    '& #github': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #twitter': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #linkedin': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #email': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    }
  }
}))

const TeamCard = (props: GridProps) => {
  const classes = useStyles()

  return (
    <Grid {...props} className={classes.team} item xs={12} md={4} justifyContent="center">
      <Card elevation={0}>
        <CardContent className={classes.card}>
          <Avatar className={classes.iconLarge} src="" />
          <Typography variant="h5" component="h2">
            Name
          </Typography>
          <Typography className={classes.nicknameTextColor}>nickname</Typography>
          <Typography className={classes.role}>Role</Typography>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <IconButton size="small">
                <Github className={classes.icons} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small">
                <Twitter className={classes.icons} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small">
                <LinkedIn className={classes.icons} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small">
                <Email className={classes.icons} />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default TeamCard