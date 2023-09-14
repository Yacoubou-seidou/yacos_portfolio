import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { projects } from '../../data/Projects';
const ProjectList = ({ handleProjectDetail }) => {
  return (
    projects.map((project, index) => {
      return <Card sx={{ backgroundColor: '#222222' }} key={project.name + index} className='project_image'>
        <CardMedia
          component="img"
          alt={project.name}
          height="200"
          // width="100%"
          image={project.preview}
          className='image_item'
        />
        <CardContent>
          <Typography variant="h4" component="div" sx={{ color: '#eee', fontFamily: 'poppins, Helvetica, sans-serif ', fontWeight: '600 ', fontSize: '14px' }}>
            {project.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Button size="small" onClick={() => handleProjectDetail(project)}>
            Details
          </Button>


          {project.link !== '' ? <Button size="small"><a target='_blank' rel='noreferrer' href={project.link}>
            Visit
          </a> </Button> : <Button size="small" disabled={true} className='category'><span>{project.name === 'Sahelian Dev Website' ? 'Ongoing' : 'Console'}</span></Button>}
          {project.private ? <Button size="small" disabled={true} className='category'><span>Private</span></Button> : project.repo ? <Button size="small"><a target='_blank' rel='noreferrer' href={project.repo}>
            Github
          </a></Button> : ''}
        </CardActions>
      </Card>
    })
  )
}

export default ProjectList
