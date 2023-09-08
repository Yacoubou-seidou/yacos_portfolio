import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { projects } from '../../data/Projects';
const ProjectList = () => {
  return (
    projects.map((project, index) => {
      <Card sx={{ maxWidth: 345 }} key={project.name + index}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={project.preview}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            {project.private ? <a id="ajax-page-close-button" href={`/${project.id}/details`}>
              Details
            </a> : <a id="ajax-page-close-button" href={project.link ? project.link : 'Console App'}>
              Visite
            </a>}
          </Button>
          {project.private ? '' : <Button size="small"><a id="ajax-page-close-button" href={project.repo}>
            Github
          </a></Button>}
        </CardActions>
      </Card>
    })
  )
}

export default ProjectList
