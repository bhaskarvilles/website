import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import PButton from 'components/PButton'
import Wallpaper from '../assets/wallpaper.png'
import shell from '../assets/icons/shell.svg'
import ToolsSection from 'containers/ToolsSection'
import HTBSection from 'containers/HTBSection'
import WelcomeSection from 'containers/WelcomeSection'
import FeaturesSection from 'containers/FeaturesSection'
import TrustSection from 'containers/TrustSection'
import DevelopingSection from 'containers/DevelopingSection'
import StatsSection from 'containers/StatsSection'
import OSSection from 'containers/OSSection'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  features: {
    marginTop: 130,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  trustBlock: {
    marginTop: 90
  },
  trustLogosBlock: {
    marginTop: 40
  },
  toolsBlock: {
    marginTop: 90,
    paddingLeft: 16,
    paddingRight: 16
  },
  statsBlock: {
    marginTop: 217,
    [theme.breakpoints.down('sm')]: {
      marginTop: 116
    }
  },
  htbBlock: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16
  },
  developBlock: {
    marginTop: 154
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  }
}))

const Index = () => {
  const classes = useStyles()
  const [cookies] = useCookies()
  return (
    <Grid container className={classes.root} justifyContent="center">
      {cookies.theme === 'dark' && <div className={classes.wallpaper} />}
      <WelcomeSection />
      <FeaturesSection className={classes.features} />
      <TrustSection className={classes.trustBlock} />
      <ToolsSection className={classes.toolsBlock} />
      <DevelopingSection />
      <StatsSection className={classes.statsBlock} />
      <OSSection />
      <HTBSection className={classes.htbBlock} />
      <Grid
        className={classes.developBlock}
        container
        item
        xs={9}
        direction="column"
        alignItems="center"
      >
        <Box className={classes.iconHolder} style={{ background: '#FFF' }}>
          <img src={shell} alt="Shell Icon" />
        </Box>
        <Typography variant="h1" paragraph align="center">
          Develop for Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography variant="body1" align="center">
          Different versions for different players, role your need and play freely.
        </Typography>
        <PButton variant="contained" to="/contribute" style={{ width: 165, marginTop: 37 }}>
          Learn More
        </PButton>
      </Grid>
    </Grid>
  )
}

export default Index
