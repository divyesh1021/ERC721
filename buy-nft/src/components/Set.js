import { Button, Card,CardContent,Grid,TextField,Typography } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Set = ({state}) => {

    // const navigate = useNavigate();

    const [url,setURL] = useState('');
    const set_URL = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const mediaUrl = await contract.setBaseTokenURI(url);
        console.log('----->',url);
        console.log('transaction hash --->',mediaUrl.hash)
        // localStorage.setItem("url", url);
        // navigate("/buy", { state: url })
    };
    
    return(
        <>
        <div className="div1">
            <Typography gutterBottom variant="h3" align="center">SET NFT IMG URL</Typography>
            <div>
                <Card style={{maxWidth:"50%",margin:"0 auto",padding:"20px 5px"}}>
                    <CardContent>
                        <form onSubmit={set_URL}>
                            <Grid container spacing={1}>
                                <Grid xs={20} sm={12} item>
                                    <TextField label="URL" placeholder="Enter URL" variant="outlined" fullWidth onChange={(e)=>{setURL(e.target.value)}}></TextField>
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" size="large">SET URL</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    );
};

export default Set;