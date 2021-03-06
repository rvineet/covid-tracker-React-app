import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

function infoBox({title, cases, total}) {
    return (
       <Card>
<CardContent>
<Typography className="infoBox__title" color= "textSecondary">
    {title}
</Typography>


<h2 className = "infosBox__cases">{cases}</h2>


<Typography className="infoBox__total" color = "textSecondary">
    {total} Total
</Typography>

</CardContent>
       </Card>
    )
}

export default infoBox
