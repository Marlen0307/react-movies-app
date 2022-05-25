import { makeStyles } from "@mui/styles";

export const useMoviesStyles = makeStyles((theme: any) => ({
    root : {
        '& .MuiPaper-root':{
            minHeight: '400px',
        }
    },
    images : {
        width: '70%',
        objectFit: 'cover',
        borderRadius: '50%',
    }
  }));