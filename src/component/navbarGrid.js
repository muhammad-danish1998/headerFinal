import React from 'react';
import { Navbar } from "./Navbar";
import Grid from '@material-ui/core/Grid';

export  function NavbarComp() {

  return (
    <div className='main'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>
    </div>
  );
}
