import { makeStyles, Grid, Typography } from '@material-ui/core'
import Wallpaper from 'assets/wallpaper.png'
import UserCard from 'components/UserCard'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import ActiveContributors from 'containers/TeamContainers/ActiveContributorsSection'
import PastContributors from 'containers/TeamContainers/PastContributorsSection'
import SpecialThanks from 'containers/TeamContainers/SpecialThanksSection'
import { NextPage } from 'next'
import data from 'components/UserCard/team'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  wallpaper:
    theme.palette.type === 'dark'
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper.src}')`
        }
      : { display: 'none' },
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  developBlock: {
    marginTop: 154
  }
}))

const teamData = data.map(data => {
  return (
    <UserCard
      name={data.name}
      nickname={data.nickname}
      role={data.role}
      noAvatar={data.avatar}
      socials={{
        github: data.github,
        twitter: data.twitter,
        linkedIn: data.linkedIn,
        email: data.email
      }}
    />
  )
})

const Team: NextPage = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
      <Grid className={classes.title} item xs={12}>
        <Typography className={classes.headingTitle} variant="h1" align="center">
          The Team <br /> behind Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <Grid container item xs={12} md={9} spacing={4}>
        {teamData}
      </Grid>
      <ActiveContributors />
      <SpecialThanks />
      <PastContributors />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
